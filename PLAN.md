# PROMPT MAESTRO — Optimización Estudio Jurídico Basavilbaso

> Objetivo del sitio: que las personas **contacten al Dr. Basavilbaso, principalmente por WhatsApp**.
> Identidad buscada: **sobrio · estético · profesional · confiable**.
> La prioridad sobre todo es **convertir posibles clientes en clientes**.

---

## 1. Rol y objetivo
Actuás como especialista en diseño UX, copywriting jurídico y optimización de conversión (CRO).
**Objetivo único y medible:** maximizar el número de personas que contactan al Dr. Basavilbaso,
principalmente por WhatsApp. Todo cambio se justifica por su aporte a esa conversión. Si un
cambio es solo "lindo" pero no mueve la aguja, va al final de la cola.

## 2. Principios rectores (filtro para cada decisión)
- **Sobrio:** menos es más. Sin saturación visual, sin animaciones gratuitas, paleta verde/dorado disciplinada.
- **Estético:** jerarquía tipográfica clara (Playfair serif + Raleway), aire/espaciado generoso, consistencia milimétrica.
- **Profesional:** lenguaje preciso, cero faltas, datos verificables, nada que parezca "plantilla".
- **Confiable:** prueba social real, credenciales visibles, transparencia de precios y proceso.
  **Nunca inventar testimonios, matrícula ni datos** — si falta el dato, se deja placeholder marcado y se pide al cliente.

## 3. Restricciones técnicas
- Stack actual: HTML/CSS/JS estático (GitHub Pages), sin build. Mantenerlo simple.
- Trabajar en branch (no pushear a `main` sin aprobación); commits descriptivos; PR para revisión.
- Multiidioma (`i18n.js`): todo texto nuevo visible debe registrarse en las 5 lenguas o quedar consistente con el sistema.
- Verificar cada cambio con screenshot mobile (414px) **y** desktop antes de dar por hecho.
  Mobile es la prioridad (el tráfico viene del bio de Instagram).

## 4. Fases de ejecución (en este orden — por ROI)

### FASE 1 — Performance (máximo retorno, técnico puro)
- Convertir TODAS las imágenes a **WebP** redimensionadas al tamaño real de display
  (la foto de 4.9 MB → ~150–250 KB).
- Servir con `<picture>` o `srcset`; añadir `width`/`height` para evitar layout shift.
- `loading="lazy"` en todo lo bajo el pliegue; `eager`/`preload` solo en el hero.
- **Meta de éxito:** peso total de la home < 1 MB (hoy ~15 MB); LCP < 2.5 s en mobile.

### FASE 2 — Confianza / Credibilidad (mayor freno de conversión hoy)
- **Sección de testimonios** real: 3–5 reseñas con nombre de pila + inicial, estrellas,
  idealmente tipo de caso. (Reusar `.testi-stars` ya existente.) → *requiere input del cliente.*
- **Matrícula profesional** visible (Tomo/Folio + Colegio/CPACF) en footer y/o "Quiénes somos". → *requiere input.*
- **Señales de confianza** discretas: años de ejercicio, cantidad de casos, "Confidencial", formación (UCA ya está).
- Reseñas en **schema.org** (`Review`/`AggregateRating`) para estrellas en Google.

### FASE 3 — Conversión directa a WhatsApp
- **Mensajes pre-cargados por contexto:** cada "Consultar →" de servicio abre WhatsApp con
  texto tipo *"Hola, quiero consultar sobre [Sucesiones]"*.
- Revisar el hero en mobile: eliminar el ~espacio muerto superior, contenido más arriba,
  considerar foto sutil del Dr. (humaniza → convierte en derecho de familia).
- Clarificar el embudo **"triage gratis por WhatsApp" → "consulta formal $50.000"**
  para que no se lea como contradicción.
- Microcopy de cierre en cada CTA que reduzca fricción ("Te respondemos en menos de 24 h", "Sin compromiso").

### FASE 4 — Copy empático + SEO local
- Ajustar tono: sumar contención emocional sin perder profesionalismo
  (divorcio/sucesión son momentos sensibles).
- **SEO local:** zona/barrio de atención + link a Google Business Profile; mapa embebido si hay oficina.
- Títulos de servicios orientados a la intención de búsqueda ("Abogado de divorcios en…").

## 5. Criterios de aceptación (definición de "terminado")
- [ ] Home pesa < 1 MB y LCP < 2.5 s en mobile.
- [ ] Hay prueba social visible (testimonios reales) y matrícula.
- [ ] Todo CTA de WhatsApp abre con mensaje contextual.
- [ ] Render verificado con captura en mobile y desktop, sin regresiones de estilo.
- [ ] Cero rosa/incoherencias; paleta verde/dorado consistente.
- [ ] Texto sin errores y, donde aplica, traducido en i18n.

## 6. Datos que necesito del cliente antes de cerrar Fases 2 y 4
1. **3–5 testimonios** reales (nombre de pila + inicial, tipo de caso, frase).
2. **Matrícula** profesional (Tomo/Folio + Colegio).
3. **Zona/barrio** de atención presencial (o confirmación de "solo virtual") y link de Google Business si existe.
4. Confirmar **años de ejercicio / nº de casos** que puedo afirmar con veracidad.

---

## Estado / progreso
- [x] **Fase 1 — Performance** ✅ Imágenes a WebP (8.8 MB → 219 KB, −97%); hero auto-contenido sin Unsplash.
- [~] **Fase 2 — Confianza** — Parcial: se usa la prueba social REAL existente (+15K seguidores en la barra de stats).
      Testimonios y matrícula quedan pendientes: **requieren datos del cliente** y no se inventan.
- [x] **Fase 3 — Conversión a WhatsApp** ✅ Mensajes contextuales por servicio + saludo en todos los CTA;
      hero mobile con título/subtítulo/CTAs sobre el pliegue.
- [~] **Fase 4 — Copy + SEO local** — Bloqueado en lo que requiere datos (dirección/GBP, matrícula).
      Copy actual ya equilibra profesionalismo y cercanía ("accesible, humano y efectivo", "Trato cercano").

> Nota: Fases 2 y 4 quedan abiertas a la espera de datos verificables del cliente.
> No se agregan testimonios, matrícula ni dirección inventados.
