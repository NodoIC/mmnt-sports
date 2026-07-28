"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const INQUIRY_TYPES = [
  "Representación deportiva",
  "Carrera de fútbol en EE. UU.",
  "Club o colaboración profesional",
  "Otra consulta",
];

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500";

const labelClass = "text-sm font-medium text-neutral-200";

/**
 * Formulario cableado para Netlify Forms. Con @opennextjs/netlify
 * (sucesor de @netlify/plugin-nextjs v5) Netlify ya no puede detectar
 * formularios embebidos en páginas renderizadas por React/Next.js, así
 * que la detección ocurre en un archivo HTML estático aparte
 * (public/__forms.html, con el mismo name="contacto" y los mismos campos).
 * Este componente ya no lleva data-netlify/netlify-honeypot (serían
 * inertes aquí); solo conserva name/form-name para que el payload enviado
 * se asocie al formulario ya detectado. El envío real (fetch a
 * /__forms.html) solo funciona una vez desplegado en Netlify; en local
 * devolverá error, que es el comportamiento correcto (no se simula un
 * envío que no existe).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contacto"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden">
        <label>
          Deja este campo vacío: <input name="bot-field" />
        </label>
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className={labelClass}>
          Nombre y apellidos
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telefono" className={labelClass}>
            Teléfono <span className="text-neutral-500">(opcional)</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tipo-consulta" className={labelClass}>
          Tipo de consulta
        </label>
        <select
          id="tipo-consulta"
          name="tipo-consulta"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {INQUIRY_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className={inputClass}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-300">
        <input
          type="checkbox"
          name="privacidad"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/5 text-orange-500 focus:ring-1 focus:ring-orange-500"
        />
        <span>
          Acepto la política de privacidad.
          {/* Pendiente: enlazar a la página real de política de privacidad
              cuando exista. No hay ninguna ruta real todavía. */}
        </span>
      </label>

      <div
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        className="min-h-[1.5rem] outline-none"
      >
        {status === "success" && (
          <p className="text-sm font-medium text-orange-400">
            Hemos recibido tu solicitud. Te hemos enviado un correo de
            confirmación.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-400">
            No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbenos
            a info@goals4players.com.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
