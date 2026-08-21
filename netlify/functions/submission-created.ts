import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const CONTACT_FORM_NAME = "contacto";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }
  const trimmed = value.trim();
  return (
    trimmed.length > 0 &&
    trimmed.length <= MAX_EMAIL_LENGTH &&
    EMAIL_PATTERN.test(trimmed)
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeName(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  // Un nombre de persona razonable: sin saltos de línea ni longitud excesiva.
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

function safeSiteHost(siteUrl: string | undefined): string | null {
  if (!siteUrl) {
    return null;
  }
  try {
    return new URL(siteUrl).host;
  } catch {
    // SITE_URL mal formada: se omite el pie de enlace sin romper el envío.
    return null;
  }
}

function buildEmailContent(greeting: string, siteUrl: string | undefined) {
  const host = safeSiteHost(siteUrl);
  const footerHtml = host
    ? `<p style="margin:24px 0 0;color:#a3a3a3;font-size:13px;line-height:1.5;">MMNT Sports — <a href="${siteUrl}" style="color:#a3a3a3;">${host}</a></p>`
    : "";
  const footerText = host ? `\n\nMMNT Sports — ${host}` : "";

  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background-color:#f5f5f4;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
            <tr>
              <td style="height:4px;background-color:#e7ff00;"></td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;color:#171717;font-size:16px;line-height:1.6;">${greeting}</p>
                <p style="margin:0 0 16px;color:#171717;font-size:16px;line-height:1.6;">Hemos recibido correctamente tu solicitud de contacto.</p>
                <p style="margin:0 0 16px;color:#171717;font-size:16px;line-height:1.6;">Nuestro equipo revisará la información y se pondrá en contacto contigo lo antes posible.</p>
                <p style="margin:0 0 24px;color:#171717;font-size:16px;line-height:1.6;">Gracias por confiar en MMNT Sports.</p>
                <p style="margin:0;color:#171717;font-size:16px;line-height:1.6;">Un saludo,<br />Equipo MMNT Sports</p>
                ${footerHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `${greeting}

Hemos recibido correctamente tu solicitud de contacto.

Nuestro equipo revisará la información y se pondrá en contacto contigo lo antes posible.

Gracias por confiar en MMNT Sports.

Un saludo,
Equipo MMNT Sports${footerText}`;

  return { html, text };
}

/**
 * Netlify invoca automáticamente esta función (por su nombre reservado
 * "submission-created") después de almacenar CUALQUIER envío de formulario
 * del sitio. Filtramos aquí por form_name para actuar solo sobre "contacto".
 * El almacenamiento en Netlify Forms ya ha ocurrido antes de que esta
 * función se ejecute: un fallo aquí (o de Resend) nunca invalida el envío.
 */
export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST" || !event.body) {
      return { statusCode: 200, body: "Ignored: unexpected request" };
    }

    const parsed = JSON.parse(event.body) as {
      payload?: { form_name?: string; data?: Record<string, unknown> };
    };
    const payload = parsed.payload;

    if (!payload || payload.form_name !== CONTACT_FORM_NAME) {
      return { statusCode: 200, body: "Ignored: not the contact form" };
    }

    const data = payload.data ?? {};
    const email = data.email;
    const name = sanitizeName(data.nombre);

    if (!isValidEmail(email)) {
      console.error(
        "[submission-created] Contact submission missing a valid email; confirmation email skipped.",
      );
      return { statusCode: 200, body: "Skipped: invalid or missing email" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const replyTo = process.env.CONTACT_REPLY_TO_EMAIL;

    if (!apiKey || !fromEmail || !replyTo) {
      console.error(
        "[submission-created] Missing required environment variable(s) (RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_REPLY_TO_EMAIL). Confirmation email skipped.",
      );
      return { statusCode: 200, body: "Skipped: missing configuration" };
    }

    const greeting = name ? `Hola, ${escapeHtml(name)}:` : "Hola:";
    const { html, text } = buildEmailContent(greeting, process.env.SITE_URL);

    const resend = new Resend(apiKey);

    try {
      await resend.emails.send({
        from: fromEmail,
        to: (email as string).trim(),
        replyTo,
        subject: "Hemos recibido tu solicitud | MMNT Sports",
        html,
        text,
      });
    } catch (sendError) {
      console.error(
        "[submission-created] Resend failed to send the confirmation email.",
        sendError instanceof Error ? sendError.message : "Unknown error",
      );
      return {
        statusCode: 200,
        body: "Submission stored; confirmation email failed",
      };
    }

    return { statusCode: 200, body: "OK" };
  } catch (error) {
    console.error(
      "[submission-created] Unexpected error handling form submission.",
      error instanceof Error ? error.message : "Unknown error",
    );
    return { statusCode: 200, body: "Submission handling encountered an error" };
  }
};
