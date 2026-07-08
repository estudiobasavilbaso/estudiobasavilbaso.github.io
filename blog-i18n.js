/* ================================================================
   Estudio Jurídico Basavilbaso — Traducción del blog y sus artículos
   Idiomas: Español · English · Português · Deutsch · Русский

   Motor a nivel de bloque: traduce cada elemento por su texto en
   español (normalizado). Soporta HTML interno (negritas, enlaces) y
   botones con ícono (reemplaza solo la etiqueta, conserva el SVG).
   Las traducciones viven en blog-i18n-data.js (window.BLOG_T).

   Instalación (antes de </body>):
     <script src="blog-i18n-data.js"></script>
     <script src="blog-i18n.js"></script>
   ================================================================ */
(function () {
  'use strict';

  var LABELS = { es: 'ES', en: 'EN', pt: 'PT', de: 'DE', ru: 'RU' };
  var VALID  = { es: 1, en: 1, pt: 1, de: 1, ru: 1 };
  var STORE  = 'basavilbaso_lang';

  var DATA = window.BLOG_T || {};
  var TITLES = window.BLOG_TITLES || {};

  /* Selectores de bloques con HTML interno (se reemplaza innerHTML) */
  var HTML_SEL = [
    '.back-link', '.crumb',
    '.a-hero .cat', '.a-hero h1', '.a-hero .meta',
    '.article > p', '.article > h2', '.article > h3', '.article > blockquote', '.article > ul > li',
    '.cta-box .k', '.cta-box h3', '.cta-box > p',
    '.share .sh-title', '.share .sh-sub',
    '.related > h2', '.r-card .cat', '.r-card h4',
    'footer p',
    '.hero-inner h1', '.hero-inner p',
    '.filters .chip',
    '.feat .tag', '.feat h2', '.feat h3', '.feat > a > p', '.feat .card-body p', '.feat .meta',
    '.card .tag', '.card h3', '.card p', '.card .meta'
  ];
  /* Selectores de botones con ícono (se reemplaza solo la etiqueta) */
  var TAIL_SEL = ['.cta-btns .btn', '.share-btns .share-btn'];

  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }

  var htmlEls = [];  /* { el, key, orig } */
  var tailEls = [];  /* { el, node, key, orig } */

  function collect() {
    var seen = [];
    HTML_SEL.forEach(function (sel) {
      var list = document.querySelectorAll(sel);
      for (var i = 0; i < list.length; i++) {
        var el = list[i];
        if (seen.indexOf(el) !== -1) continue;
        seen.push(el);
        htmlEls.push({ el: el, key: norm(el.textContent), orig: el.innerHTML });
      }
    });
    TAIL_SEL.forEach(function (sel) {
      var list = document.querySelectorAll(sel);
      for (var i = 0; i < list.length; i++) {
        var el = list[i];
        /* etiqueta = último nodo de texto no vacío */
        var node = null;
        for (var n = el.childNodes.length - 1; n >= 0; n--) {
          if (el.childNodes[n].nodeType === 3 && norm(el.childNodes[n].textContent)) { node = el.childNodes[n]; break; }
        }
        if (!node) continue;
        tailEls.push({ el: el, node: node, key: norm(el.textContent), orig: node.textContent });
      }
    });
  }

  function tr(key, lang) {
    var e = DATA[key];
    if (!e) return null;
    var v = e[lang];
    return (v == null) ? null : v;
  }

  function applyLang(lang) {
    if (!VALID[lang]) lang = 'es';
    localStorage.setItem(STORE, lang);

    for (var i = 0; i < htmlEls.length; i++) {
      var it = htmlEls[i];
      if (lang === 'es') { it.el.innerHTML = it.orig; continue; }
      var v = tr(it.key, lang);
      it.el.innerHTML = (v != null) ? v : it.orig;
    }
    for (var j = 0; j < tailEls.length; j++) {
      var t = tailEls[j];
      if (lang === 'es') { t.node.textContent = t.orig; continue; }
      var tv = tr(t.key, lang);
      /* conservar el espacio de encabezado del original (ej. " Compartir…") */
      var lead = t.orig.match(/^(\s*)/)[1];
      t.node.textContent = (tv != null) ? (lead + tv) : t.orig;
    }

    document.documentElement.lang = lang;
    if (TITLES[lang]) document.title = TITLES[lang];

    var btns = document.querySelectorAll('.i18n-btn[data-lang]');
    for (var k = 0; k < btns.length; k++) {
      var on = btns[k].getAttribute('data-lang') === lang;
      btns[k].classList.toggle('i18n-active', on);
      btns[k].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    var cur = document.getElementById('i18nCurrent');
    if (cur) cur.textContent = LABELS[lang] || 'ES';
  }

  function bindSwitcher() {
    var sw = document.querySelector('.i18n-switcher');
    var trigger = document.getElementById('langTrigger');
    if (sw && trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = sw.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!sw.contains(e.target)) { sw.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
      });
    }
    var btns = document.querySelectorAll('.i18n-btn[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', function () {
          applyLang(btn.getAttribute('data-lang'));
          if (sw) sw.classList.remove('open');
        });
      })(btns[i]);
    }
  }

  function init() {
    collect();
    bindSwitcher();
    var stored = localStorage.getItem(STORE);
    applyLang((stored && VALID[stored]) ? stored : 'es');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
