This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sistema de contacto (Netlify Forms + Resend)

El formulario de contacto de la Home (`name="contacto"`) se envía mediante **Netlify Forms** (almacenamiento nativo, sin backend propio). Tras cada envío verificado por Netlify, la función `netlify/functions/submission-created.ts` se ejecuta automáticamente (es el nombre reservado que Netlify invoca para *cualquier* envío de formulario del sitio; la función filtra internamente por `form_name === "contacto"`) y envía un correo de confirmación mediante **Resend**.

### 0. Detección del formulario con @opennextjs/netlify (Next.js Runtime v5)

Desde la v5 de `@netlify/plugin-nextjs` (hoy mantenido como `@opennextjs/netlify`), Netlify **ya no puede detectar formularios embebidos en páginas renderizadas por React/Next.js** — solo escanea HTML verdaderamente estático generado en el build. Por eso el proyecto usa el patrón oficial recomendado:

- **`public/__forms.html`**: un archivo HTML estático (nunca visitado por usuarios reales) que declara el formulario `contacto` con `data-netlify="true"`, el honeypot y todos los campos, exactamente con los mismos `name` que el formulario real. Es lo único que Netlify necesita para registrar el formulario en el build.
- **`src/components/ContactForm.tsx`**: sigue siendo el formulario real que ve el usuario, pero ya no lleva `data-netlify`/`netlify-honeypot` (serían inertes en una página React). Al enviarse, hace `fetch("/__forms.html", { method: "POST", ... })` con los mismos campos — Netlify intercepta ese POST porque el formulario `contacto` ya fue detectado en el build.
- Si algún campo cambia de nombre en `ContactForm.tsx`, hay que actualizar `public/__forms.html` en paralelo para que ambos coincidan.
- La función `submission-created.ts` no necesita ningún cambio: se dispara igual, independientemente de cómo se haya detectado el formulario.

### 1. Variables de entorno necesarias

| Variable | Uso |
|---|---|
| `RESEND_API_KEY` | Clave de API de Resend. Nunca se expone al navegador (solo se usa dentro de la función, en el servidor). |
| `CONTACT_FROM_EMAIL` | Remitente del correo de confirmación, p. ej. `Goals For Players <no-reply@goalsforplayers.com>`. |
| `CONTACT_REPLY_TO_EMAIL` | Dirección a la que llegan las respuestas de quien reciba el correo, p. ej. `contacto@goalsforplayers.com`. |
| `SITE_URL` | URL pública del sitio (`https://goalsforplayers.com`). Se usa solo como enlace de pie en el email; si falta, ese enlace simplemente se omite sin errores. |

Ninguna de estas variables lleva el prefijo `NEXT_PUBLIC_`: son secretos/config de servidor y no deben llegar al navegador.

### 2. Cómo añadirlas en Netlify

1. Entra en el sitio en Netlify → **Site configuration → Environment variables**.
2. Añade las 4 variables de la tabla anterior con sus valores reales de producción.
3. Vuelve a desplegar el sitio (o dispara un nuevo deploy) para que la función las recoja.

### 3. Verificación del dominio en Resend

`goalsforplayers.com` debe **verificarse en Resend** antes de poder enviar correos reales desde `no-reply@goalsforplayers.com`:

1. En el panel de Resend, añade el dominio `goalsforplayers.com`.
2. Resend mostrará una serie de registros DNS (normalmente SPF, DKIM y a veces un registro de verificación adicional).
3. Añade esos registros exactos en el proveedor DNS del dominio.
4. Espera a que Resend marque el dominio como **verificado** antes de activar el envío real — mientras tanto, los envíos fallarán o quedarán limitados al dominio de pruebas de Resend (que no debe usarse en producción).

### 4. Prueba real después del deploy

1. Despliega el sitio en Netlify con las 4 variables ya configuradas y el dominio verificado en Resend.
2. Rellena y envía el formulario de contacto desde la web ya desplegada (en local, `npm run dev`, el envío no funcionará: no existe el runtime de Netlify que procesa Netlify Forms).
3. Confirma en la web que aparece: *"Hemos recibido tu solicitud. Te hemos enviado un correo de confirmación."*
4. Comprueba que llega el correo de confirmación a la dirección usada en la prueba.

### 5. Cómo comprobar en Netlify

- **Formularios recibidos**: Site → **Forms** → selecciona el formulario `contacto` para ver cada envío almacenado.
- **Logs de la función**: Site → **Functions** → `submission-created` → pestaña de logs, para ver su ejecución en cada envío.
- **Errores de Resend**: si el envío del correo falla (API key inválida, dominio no verificado, etc.), el error se registra en esos mismos logs de la función mediante `console.error`, sin exponer secretos ni el mensaje completo del visitante. Un fallo de Resend nunca invalida ni bloquea el envío ya almacenado en Netlify Forms.
