/* ================================================================
   Estudio Jurídico Basavilbaso — Seguimiento de conversiones
   Registra las acciones de contacto reales como eventos:
     · Clic en WhatsApp            → generate_lead (method: whatsapp)
     · Envío del formulario         → generate_lead (method: formulario)
     · Clic en "Agendar consulta"   → generate_lead (method: agenda)

   Los eventos van a Google Analytics (GA4) y —si se configura una
   acción de conversión en Google Ads— también disparan la conversión.

   Para activar Google Ads: definir antes de cargar este archivo
     window.AW_SEND_TO = 'AW-XXXXXXXXX/etiqueta';
   (podés usar un objeto por tipo: {whatsapp:'AW.../a', formulario:'AW.../b', agenda:'AW.../c'})
   ================================================================ */
(function () {
  'use strict';

  // Acción de conversión "Contacto" de Google Ads (AW-18284828027).
  // Se dispara con el clic en WhatsApp / envío de formulario / agendar.
  window.AW_SEND_TO = window.AW_SEND_TO || 'AW-18284828027/MdzJCJ3w_8wcEPuq8Y5E';

  function fire(method) {
    try {
      if (typeof gtag !== 'function') return;
      // 1) Evento GA4 (analítica + importable a Ads)
      gtag('event', 'generate_lead', { method: method, event_category: 'contacto', event_label: method });
      // 2) Conversión nativa de Google Ads (si está configurada)
      var s = window.AW_SEND_TO;
      var sendTo = (s && typeof s === 'object') ? s[method] : s;
      if (sendTo) gtag('event', 'conversion', { send_to: sendTo });
    } catch (e) { /* nunca bloquear la navegación */ }
  }
  // Exponer por si se quiere disparar manualmente
  window.trackLead = fire;

  document.addEventListener('DOMContentLoaded', function () {
    // Delegación global: cubre cualquier punto de contacto del sitio
    // (home, evaluador, blog, footer, flotante…), presente o futuro,
    // sin tener que marcar cada botón.
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;

      // 1) Botones que abren WhatsApp por JavaScript (evaluador, etc.)
      if (t.closest('.wa-send, [onclick*="sendWhatsApp"], [onclick*="wa.me"], [data-wa]')) {
        fire('whatsapp'); return;
      }

      // 2) Enlaces <a>
      var a = t.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href') || '';
      // Solo cuenta el WhatsApp que va A NUESTRO número (contacto). Los
      // botones de "compartir" del blog abren wa.me/?text (sin número) y
      // NO deben contar como conversión.
      var isContactWa = /wa\.me\/\d/i.test(href) || /(?:api|web)\.whatsapp\.com\/send.*[?&]phone=\d/i.test(href);
      if (isContactWa) fire('whatsapp');
      else if (/calendly\.com/i.test(href) || a.classList.contains('book-cta')) fire('agenda');
      else if (/^mailto:/i.test(href)) fire('email');
    }, true);

    // 3) Formulario de contacto del home (abre WhatsApp por JS, no es un <a>)
    var form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', function () { fire('formulario'); });
  });
})();
