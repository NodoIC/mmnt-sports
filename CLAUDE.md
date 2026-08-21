@AGENTS.md

# MMNT Sports — reglas del proyecto

La identidad actual de este proyecto es **MMNT SPORTS** (descriptor: *Talent
Manager*). Nota histórica, solo para contexto: el proyecto arrancó como la
web de la agencia "Goals For Players" / G4P y fue rebrandeado por completo;
esa marca ya no existe en el producto y no debe usarse como referencia para
ningún trabajo futuro salvo que se cite `CONTENT.md`/`CONTENT_AUDIT.md`
explícitamente por su valor histórico (ver informes de rebranding).

## Alcance
- Este proyecto consiste **únicamente** en reconstruir y mejorar la web pública de MMNT Sports.
- No crear documentos de estrategia, filosofía, marca, producto ni procesos internos.

## Contenido
- No inventar servicios, datos, cifras, textos, jugadores, teléfonos, correos ni enlaces.
- Todo el contenido debe proceder de la web actual de MMNT Sports, del registro histórico de la agencia (previo al rebrand, documentado en `CONTENT.md`/`CONTENT_AUDIT.md`), o de información que el usuario facilite expresamente.

## Forma de trabajar
- Trabajar mediante tareas pequeñas y revisables.
- Antes de modificar una funcionalidad existente, inspeccionar primero el código relacionado y explicar brevemente qué se va a cambiar.
- No instalar nuevas dependencias sin explicar antes por qué son necesarias.
- No hacer commits ni push salvo petición expresa del usuario.
- Antes de dar una tarea por terminada: ejecutar las comprobaciones necesarias y `npm run build`.

## Stack técnico
- Mantener Next.js, TypeScript, App Router y Tailwind CSS.
- No añadir Supabase, autenticación ni base de datos salvo petición expresa.
- Mantener el proyecto preparado para despliegue en Netlify.
