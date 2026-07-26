# Auditoría de contenido: goals4players.com vs. CONTENT.md

> Fecha de la auditoría: 2026-07-26.
> Método: nuevo recorrido completo de `https://goals4players.com/` con múltiples pasadas de transcripción literal, y contraste contra el `CONTENT.md` ya existente en el proyecto.
> Igual que en la extracción original, no dispongo de scraping HTML puro; el recorrido se hace con fetch + instrucciones de transcripción literal. Cuando una pasada arrojaba un resultado dudoso, se ha repetido con una pregunta neutral para confirmarlo o descartarlo (ver apartado "Elemento descartado por posible alucinación").

---

## 1. Secciones presentes en la web real

Inventario completo de encabezados encontrados, en orden:

1. H1 — "Goals4Players Take the Chance"
2. Subtítulo — "Gestión integral de carreras futbolísticas: representación, formación, marketing y oportunidades internacionales."
3. Texto de apoyo — "Acompañamos tu carrera futbolística de forma integral, del amateur a lo profesional."
4. "Quiénes somos" → Equipo multidisciplinar / Colaboradores / De amateur a profesional
5. "Qué hacemos" → Intermediación y Representación / Desarrollo y Formación Deportiva / Comunicación, Marketing & Sponsoring
6. "Misión, Visión y Objetivos"
7. "Formación y Tecnificación" → Formación Integral / Área de Tecnificación
8. "Comunicación, Marketing & Sponsoring" (sección ampliada, independiente de la del punto 5) → Comunicación / Marketing / Sponsoring
9. "Carrera de fútbol en EEUU – Goals4Players4EEUU" → Programas Internacionales / Becas y Financiación
10. "Nuestros jugadores" → un único perfil (Liam Burstein)
11. **"¿Hablamos de tu carrera?"** (bloque final antes del formulario) — **nueva, no estaba en CONTENT.md**
12. "Contacto" (encabezado del bloque de formulario + datos de contacto)
13. Footer

## 2. Secciones presentes en CONTENT.md

Cubre correctamente los puntos 1–10 y 12–13 de la lista anterior. **No cubre el punto 11** ("¿Hablamos de tu carrera?") ni el contenido asociado a ese bloque.

## 3. Contenido que falta en CONTENT.md

### Títulos que faltan
- H2 **"¿Hablamos de tu carrera?"** — encabezado del bloque final de conversión, justo antes del formulario de contacto.

### Párrafos que faltan
- "Envíanos tu consulta. Te respondemos rápido." (texto introductorio del bloque de contacto).

### Listas / elementos destacados que faltan
Tres beneficios con icono/emoji, ubicados en el bloque "¿Hablamos de tu carrera?" (no capturados en la extracción original):
- "🤝 Asesoramiento personalizado"
- "🎓 Plan formativo y tecnificación"
- "🌎 Oportunidades nacionales e internacionales"

### Formulario de contacto (ausente por completo en CONTENT.md)
CONTENT.md solo recoge los datos de contacto (email/teléfono), pero no la estructura del formulario real:
- Campo: Nombre
- Campo: Email
- Campo: Mensaje
- Checkbox: "Acepto la política de privacidad"
- Un campo oculto tipo honeypot ("deja este campo vacío") — es una trampa antispam técnica, no contenido editorial; se menciona solo para que quede constancia, no debe replicarse como contenido visible.
- Botón de envío: **"Enviar"**

**Nota importante**: el checkbox referencia una "política de privacidad", pero no existe ningún enlace a una página de política de privacidad, aviso legal, cookies o términos en ninguna parte de la web (confirmado también en el footer). Es una inconsistencia del sitio actual, no un contenido que falte por capturar — habrá que decidir si la nueva web necesita una página de privacidad real antes de replicar ese checkbox.

## 4. Botones/CTA que faltan o requieren revisión

- **"Enviar"** (botón de envío del formulario) — no estaba en la lista de CTAs de CONTENT.md.
- **"¿Quieres información personalizada?"** — aparece en el listado original del Hero como uno de los "botones/enlaces destacados", pero en esta nueva pasada centrada específicamente en botones/CTA no se ha detectado como elemento clicable. Requiere confirmación visual: podría ser solo una frase de contexto (no un botón) en lugar de un CTA real.
- Resto de CTAs (Reservar llamada, Escríbenos, Contactar, Solicitar información, Hablar ahora, Solicitar información de EEUU, Transfermarkt "#", Instagram "#") — confirmados, ya estaban recogidos correctamente en CONTENT.md.

## 5. Tarjetas que faltan

Ninguna adicional detectada más allá de las ya documentadas (tres pilares de "Qué hacemos", tres subapartados de "Comunicación, Marketing & Sponsoring" ampliada, dos bloques de "Formación y Tecnificación", dos bloques de "Carrera de fútbol en EEUU"). Los tres beneficios con emoji del punto 3 podrían tratarse como una "tarjeta"/lista adicional a incorporar.

## 6. FAQs

**No existen.** Confirmado: no hay ninguna sección de preguntas frecuentes ni acordeón de preguntas/respuestas en la web actual.

## 7. Logos, testimonios, estadísticas y elementos destacados

- **Logos de patrocinadores/clubes/partners:** no existen.
- **Sellos de confianza / certificaciones:** no existen.
- **Estadísticas numéricas** (p. ej. "+X jugadores", "X años"): no existen.
- **Testimonios de clientes o jugadores:** no existen testimonios reales de terceros.
- **Jugadores en "Nuestros jugadores":** confirmado que hay **un único jugador** (Liam Burstein); no es una galería con más perfiles. Esto resuelve la duda que CONTENT.md dejaba abierta ("si hay más jugadores, revisar visualmente") — queda confirmado que no los hay en el HTML accesible.

## 8. Elemento descartado por posible alucinación (no incluido en CONTENT.md)

Una de las pasadas de esta auditoría devolvió una supuesta cita: *"El acompañamiento integral marca la diferencia en cada etapa de la carrera." — Goals4Players*, ubicada supuestamente en "Misión, Visión y Objetivos". Al repetir la comprobación con una pregunta neutral (pedir la transcripción íntegra de esa sección sin mencionar la cita), **no volvió a aparecer** — la sección solo contiene Misión/Visión/Objetivos, ya recogidos en CONTENT.md. Todo apunta a que fue una invención puntual de la pasada anterior, así que **no la he añadido a ningún documento**. Recomiendo que la revises tú visualmente si quieres descartarla del todo.

## 9. Footer — confirmaciones adicionales

- No hay enlaces a aviso legal, política de privacidad, cookies ni términos y condiciones en el footer (confirmado, coincide con lo ya anotado en CONTENT.md).
- No hay newsletter ni formulario de suscripción en el footer.
- Redes sociales: mismo resultado que antes (usuario "@Goals4Players" en Instagram/X/LinkedIn/TikTok, sin URLs reales asignadas en el HTML).

---

## Resumen de acciones sugeridas (no ejecutadas — esto es solo el informe)

1. Añadir a CONTENT.md el bloque "¿Hablamos de tu carrera?" con su intro y sus tres beneficios con emoji.
2. Añadir la estructura real del formulario de contacto (campos + botón "Enviar").
3. Aclarar en CONTENT.md que "Nuestros jugadores" tiene un único perfil confirmado.
4. Decidir qué hacer con la referencia a "política de privacidad" sin página real asociada.
5. Verificar visualmente si "¿Quieres información personalizada?" es un CTA clicable o solo texto.
6. Descartar definitivamente (o confirmar) la cita sobre "acompañamiento integral" con una revisión visual directa.

No he modificado CONTENT.md ni ningún componente de la aplicación. No se ha escrito código de la web. Solo este informe.
