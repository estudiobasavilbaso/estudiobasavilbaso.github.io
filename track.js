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
    // WhatsApp: cualquier enlace a wa.me / api.whatsapp
    document.addEventListener('click', function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (/wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/i.test(href)) {
        fire('whatsapp');
      } else if (/calendly\.com/i.test(href) || a.classList.contains('book-cta')) {
        fire('agenda');
      }
    }, true);

    // Formulario de contacto (abre WhatsApp por JS, no es un <a>)
    var form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', function () { fire('formulario'); });
  });
})();
