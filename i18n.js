/* ================================================================
   Estudio Jurídico Basavilbaso — Sistema de traducción multilingüe
   Idiomas: Español · English · Português · Deutsch · Русский

   INSTALACIÓN — agregar ANTES del </body> en tu HTML:
   <script src="i18n.js"></script>
   ================================================================ */

(function () {
  'use strict';

  /* ── Idiomas disponibles ─────────────────────────────────────── */
  var LANGS = [
    { code: 'es', label: 'ES', name: 'Español'    },
    { code: 'en', label: 'EN', name: 'English'     },
    { code: 'pt', label: 'PT', name: 'Português'   },
    { code: 'de', label: 'DE', name: 'Deutsch'     },
    { code: 'ru', label: 'RU', name: 'Русский'     }
  ];

  /* ── Diccionario de texto plano ──────────────────────────────── */
  /* Clave = texto original en español (sin espacios sobrantes).   */
  /* Valores: traducción por código de idioma.                     */
  var T = {};
  function t(es, en, pt, de, ru) { T[es] = { es: es, en: en, pt: pt, de: de, ru: ru }; }

  /* Navegación */
  t('Servicios',          'Services',          'Serviços',         'Leistungen',         'Услуги');
  t('Proceso',            'Process',           'Processo',         'Ablauf',             'Процесс');
  t('FAQ',                'FAQ',               'FAQ',              'FAQ',                'ЧаВо');
  t('Preguntas Frecuentes','FAQ',              'Perguntas Frequentes','Häufige Fragen',  'Частые вопросы');
  t('Turnos',             'Appointments',      'Consultas',        'Termine',            'Запись');
  t('Agendá tu consulta', 'Book a consultation','Agende sua consulta','Termin buchen',   'Записаться');

  /* Hero */
  t('Divorcios y Sucesiones','Divorces & Successions','Divórcios e Sucessões','Scheidungen & Erbschaften','Разводы и наследство');
  t('Asesoramiento jurídico profesional, claro y sin vueltas. Atención virtual y presencial en Buenos Aires.',
    'Professional, clear legal advice — no complications. Virtual and in-person service in Buenos Aires.',
    'Assessoria jurídica profissional, clara e direta. Atendimento virtual e presencial em Buenos Aires.',
    'Professionelle, klare Rechtsberatung – ohne Umwege. Virtuelle und persönliche Betreuung in Buenos Aires.',
    'Профессиональная, чёткая юридическая помощь без лишних слов. Онлайн и очный приём в Буэнос-Айресе.');
  t('Agendá una consulta','Book a consultation','Agende uma consulta','Termin buchen','Записаться');
  t('↓ Explorar',         '↓ Explore',         '↓ Explorar',       '↓ Erkunden',         '↓ Листать');

  /* Estadísticas */
  t('Seguidores',         'Followers',         'Seguidores',       'Follower',           'Подписчики');
  t('Personalizado',      'Personalized',       'Personalizado',    'Personalisiert',     'Персональный');
  t('Virtual',            'Virtual',           'Virtual',          'Online',             'Онлайн');
  t('y presencial',       'and in-person',     'e presencial',     'und persönlich',     'и очно');
  t('WhatsApp directo',   'Direct WhatsApp',   'WhatsApp direto',  'WhatsApp direkt',    'WhatsApp напрямую');
  t('Respuesta',          'Response',          'Resposta',         'Antwort',            'Ответ');
  t('Años de práctica',   'Years in practice', 'Anos de prática',  'Jahre Praxis',       'Лет практики');
  t('Idiomas',            'Languages',         'Idiomas',          'Sprachen',           'Языки');
  t('Abrir el calendario','Open the calendar', 'Abrir o calendário','Kalender öffnen',   'Открыть календарь');

  /* Testimonios */
  t('Lo que dicen',       'What they say',     'O que dizem',      'Was sie sagen',      'Отзывы');
  t('Clientes que ya confiaron','Clients who already trusted us','Clientes que já confiaram','Mandanten, die uns vertrauten','Клиенты, которые нам доверились');

  /* Accesos rápidos */
  t('Accesos rápidos',    'Quick access',      'Acesso rápido',    'Schnellzugriff',     'Быстрый доступ');
  t('Agendá tu consulta','Book your consultation','Agende sua consulta','Termin buchen','Записаться');
  t('Evaluá tu divorcio gratis','Evaluate your divorce for free','Avalie seu divórcio grátis','Scheidung kostenlos bewerten','Оцените ваш развод бесплатно');
  t('Consultanos por WhatsApp','Contact us on WhatsApp','Fale conosco pelo WhatsApp','WhatsApp-Anfrage','Написать нам в WhatsApp');
  t('Nuestros servicios','Our services','Nossos serviços','Unsere Leistungen','Наши услуги');
  t('Seguinos en Instagram','Follow us on Instagram','Siga-nos no Instagram','Instagram folgen','Подписаться в Instagram');

  /* Ubicación */
  t('Buenos Aires · Argentina','Buenos Aires · Argentina','Buenos Aires · Argentina','Buenos Aires · Argentinien','Буэнос-Айрес · Аргентина');

  /* Quiénes somos */
  t('Quiénes somos',      'About us',          'Quem somos',       'Über uns',           'О нас');
  t('Estudio Jurídico Basavilbaso','Basavilbaso Law Firm','Estúdio Jurídico Basavilbaso','Anwaltskanzlei Basavilbaso','Юридическая фирма Basavilbaso');

  /* Servicios — encabezados */
  t('Áreas de práctica',  'Practice areas',    'Áreas de atuação', 'Rechtsgebiete',      'Области практики');
  t('Nuestros servicios', 'Our services',      'Nossos serviços',  'Unsere Leistungen',  'Наши услуги');

  /* Servicios — títulos */
  t('Divorcios',          'Divorces',          'Divórcios',        'Scheidungen',        'Разводы');
  t('División de bienes', 'Asset division',    'Divisão de bens',  'Vermögensaufteilung','Раздел имущества');
  t('Cuota alimentaria',  'Child / spousal support','Pensão alimentícia','Unterhalt',    'Алименты');
  t('Sucesiones',         'Successions',       'Sucessões',        'Erbschaftsrecht',    'Наследство');
  t('Inmuebles hereditarios','Inherited real estate','Imóveis hereditários','Erbimmobilien','Наследуемая недвижимость');
  t('Declaratoria de herederos','Declaration of heirs','Declaratória de herdeiros','Erbenfeststellung','Объявление наследников');

  /* Servicios — descripciones */
  t('Tramitamos tu divorcio de manera ágil, tanto unilateral como de mutuo acuerdo. Sin peleas, sin demoras.',
    'We handle your divorce quickly — unilateral or by mutual agreement. No conflict, no delays.',
    'Tramitamos seu divórcio de forma ágil, unilateral ou consensual. Sem brigas, sem demoras.',
    'Wir bearbeiten Ihre Scheidung schnell – einseitig oder einvernehmlich. Ohne Streit, ohne Verzögerungen.',
    'Оформляем ваш развод быстро — в одностороннем порядке или по взаимному согласию. Без конфликтов и задержек.');
  t('Asesoramiento sobre el régimen patrimonial y cómo dividir los bienes de forma justa y legal.',
    'Advice on the property regime and how to divide assets fairly and legally.',
    'Assessoria sobre o regime patrimonial e como dividir os bens de forma justa e legal.',
    'Beratung zum Güterrecht und zur gerechten und rechtmäßigen Aufteilung des Vermögens.',
    'Консультируем по имущественным режимам и справедливому законному разделу активов.');
  t('Determinamos y reclamamos la cuota alimentaria para hijos o cónyuge, protegiendo los derechos de todos.',
    'We establish and claim child or spousal support, protecting the rights of all parties.',
    'Determinamos e reivindicamos a pensão alimentícia para filhos ou cônjuge, protegendo os direitos de todos.',
    'Wir legen den Unterhalt für Kinder oder Ehepartner fest und fordern ihn ein – zum Schutz aller Beteiligten.',
    'Устанавливаем и взыскиваем алименты на детей или супруга, защищая права всех сторон.');
  t('Gestionamos la sucesión testamentaria e intestada de forma completa, acompañándote en cada paso.',
    'We fully manage testate and intestate successions, guiding you at every step.',
    'Gerenciamos a sucessão testamentária e intestada de forma completa, acompanhando você em cada etapa.',
    'Wir verwalten die testamentarische und gesetzliche Erbfolge vollständig und begleiten Sie bei jedem Schritt.',
    'Полностью ведём наследственные дела — по завещанию и без него — сопровождая вас на каждом этапе.');
  t('Regularizamos inmuebles en herencia: escrituras, inscripciones registrales y transferencias.',
    'We regularize inherited properties: deeds, registry registrations, and transfers.',
    'Regularizamos imóveis em herança: escrituras, registros e transferências.',
    'Wir regularisieren Erbimmobilien: Urkunden, Grundbucheinträge und Übertragungen.',
    'Приводим в порядок наследуемую недвижимость: документы, регистрация, переоформление.');
  t('Tramitamos la declaratoria de herederos para que accedas legalmente a los bienes sin complicaciones.',
    'We process the declaration of heirs so you can legally access the estate without complications.',
    'Tramitamos a declaratória de herdeiros para que você acesse legalmente os bens sem complicações.',
    'Wir bearbeiten die Erbenfeststellung, damit Sie rechtmäßig und unkompliziert auf den Nachlass zugreifen können.',
    'Оформляем объявление наследников, чтобы вы могли законно получить доступ к имуществу без лишних сложностей.');
  t('Consultar →',        'Contact →',         'Consultar →',      'Anfragen →',         'Связаться →');

  /* Proceso */
  t('Paso a paso',        'Step by step',      'Passo a passo',    'Schritt für Schritt','Шаг за шагом');
  t('¿Cómo trabajamos?',  'How do we work?',   'Como trabalhamos?','Wie arbeiten wir?',  'Как мы работаем?');
  t('Consulta gratuita',  'Free consultation', 'Consulta gratuita','Kostenlose Beratung','Бесплатная консультация');
  t('Nos contactás por WhatsApp o agendás un turno online. Sin costo ni compromiso inicial.',
    'Contact us via WhatsApp or book online. No cost or initial commitment.',
    'Fale conosco pelo WhatsApp ou agende um horário online. Sem custo ou compromisso inicial.',
    'Kontaktieren Sie uns per WhatsApp oder buchen Sie online einen Termin. Kostenlos und unverbindlich.',
    'Свяжитесь с нами в WhatsApp или запишитесь онлайн. Без оплаты и обязательств.');
  t('Análisis del caso',  'Case analysis',     'Análise do caso',  'Fallanalyse',        'Анализ дела');
  t('Estudiamos tu situación, explicamos todas las opciones y te damos un presupuesto claro.',
    'We study your situation, explain all options, and give you a clear quote.',
    'Estudamos sua situação, explicamos todas as opções e apresentamos um orçamento claro.',
    'Wir analysieren Ihre Lage, erklären alle Optionen und nennen Ihnen einen klaren Kostenvoranschlag.',
    'Изучаем ситуацию, объясняем все варианты и даём чёткую смету расходов.');
  t('Inicio del trámite', 'Start of process',  'Início do processo','Verfahrensbeginn',  'Начало процедуры');
  t('Reunimos documentación y presentamos todo ante el juzgado de manera ágil y ordenada.',
    'We gather documentation and file everything with the court efficiently and in an orderly manner.',
    'Reunimos a documentação e apresentamos tudo ao tribunal de forma ágil e organizada.',
    'Wir sammeln die Unterlagen und reichen alles effizient und geordnet beim Gericht ein.',
    'Собираем документы и подаём всё в суд оперативно и в надлежащем порядке.');
  t('Resolución',         'Resolution',        'Resolução',        'Abschluss',          'Завершение');
  t('Seguimos tu caso hasta el final, manteniéndote informado en cada etapa del proceso.',
    'We follow your case to the end, keeping you informed at every stage.',
    'Acompanhamos seu caso até o fim, mantendo você informado em cada etapa do processo.',
    'Wir begleiten Ihren Fall bis zum Ende und halten Sie in jeder Prozessphase auf dem Laufenden.',
    'Ведём ваше дело до конца, информируя вас на каждом этапе процесса.');

  /* FAQ */
  t('Dudas frecuentes',   'Frequently asked questions','Dúvidas frequentes','Häufige Fragen','Частые вопросы');
  t('Lo que todos preguntan','What everyone asks','O que todos perguntam','Was alle fragen','Что все спрашивают');
  t('Si tu pregunta no está acá, escribinos directamente. Respondemos en menos de 24 horas.',
    "If your question isn't here, write to us directly. We respond in less than 24 hours.",
    'Se sua dúvida não está aqui, escreva-nos diretamente. Respondemos em menos de 24 horas.',
    'Wenn Ihre Frage nicht aufgeführt ist, schreiben Sie uns direkt. Wir antworten innerhalb von 24 Stunden.',
    'Если вашего вопроса здесь нет, напишите нам напрямую. Отвечаем в течение 24 часов.');
  t('💬 Escribinos ahora','💬 Write to us now','💬 Escreva-nos agora','💬 Jetzt schreiben','💬 Написать нам сейчас');

  t('¿Hay que demostrar culpa para divorciarse?',
    'Is it necessary to prove fault for a divorce?',
    'É necessário provar culpa para se divorciar?',
    'Muss für eine Scheidung Schuld nachgewiesen werden?',
    'Нужно ли доказывать вину для развода?');
  t('No. Desde la reforma del Código Civil y Comercial, en Argentina no es necesario demostrar culpa, infidelidad ni abandono. Basta con la voluntad de uno de los cónyuges. El divorcio es un derecho.',
    'No. Since the reform of the Civil and Commercial Code, in Argentina it is not necessary to prove fault, infidelity, or abandonment. The will of one spouse is sufficient. Divorce is a right.',
    'Não. Desde a reforma do Código Civil e Comercial, na Argentina não é necessário comprovar culpa, infidelidade ou abandono. Basta a vontade de um dos cônjuges. O divórcio é um direito.',
    'Nein. Seit der Reform des Zivil- und Handelsgesetzbuchs ist kein Schuldnachweis in Argentinien erforderlich. Der Wille eines Ehepartners genügt. Scheidung ist ein Recht.',
    'Нет. После реформы Гражданского и торгового кодекса в Аргентине не нужно доказывать вину, неверность или оставление. Достаточно желания одного из супругов. Развод — это право.');
  t('¿Estamos separados pero seguimos casados legalmente?',
    'Are we separated but still legally married?',
    'Estamos separados, mas ainda casados legalmente?',
    'Sind wir getrennt, aber rechtlich noch verheiratet?',
    'Мы разлучены, но всё ещё состоим в браке юридически?');
  t('Exacto. La separación de hecho no produce efectos jurídicos automáticos. El matrimonio continúa vigente hasta la sentencia de divorcio y eso puede afectar bienes, herencias y derechos futuros. Regularizá tu situación a tiempo.',
    'Exactly. Separation in fact does not produce automatic legal effects. The marriage remains in force until the divorce ruling and can affect assets, inheritances, and future rights. Regularize your situation in time.',
    'Exatamente. A separação de fato não produz efeitos jurídicos automáticos. O casamento permanece vigente até a sentença de divórcio e isso pode afetar bens, heranças e direitos futuros. Regularize sua situação a tempo.',
    'Genau. Die faktische Trennung hat keine automatischen Rechtswirkungen. Die Ehe besteht bis zum Scheidungsurteil und kann Vermögen, Erbschaft und zukünftige Rechte beeinflussen. Klären Sie Ihre Situation rechtzeitig.',
    'Именно. Фактическое раздельное проживание не влечёт автоматических правовых последствий. Брак остаётся в силе до решения суда о разводе и может затронуть имущество, наследство и будущие права. Урегулируйте ситуацию своевременно.');
  t('¿Qué pasa con la casa en el divorcio?',
    'What happens to the house in a divorce?',
    'O que acontece com a casa no divórcio?',
    'Was passiert mit dem Haus bei der Scheidung?',
    'Что происходит с жильём при разводе?');
  t('Depende del régimen patrimonial y de si el inmueble es ganancial o propio. Las opciones van desde la adjudicación a uno de los cónyuges hasta la venta y división de lo obtenido. Lo analizamos en detalle en tu consulta.',
    'It depends on the property regime and whether the asset is marital or personal. Options range from awarding it to one spouse to selling and dividing the proceeds. We analyze this in detail during your consultation.',
    'Depende do regime de bens e se o imóvel é conjugal ou pessoal. As opções vão desde a adjudicação a um dos cônjuges até a venda e divisão do valor obtido. Analisamos em detalhes na sua consulta.',
    'Es hängt vom Güterrecht ab und davon, ob die Immobilie eheliches oder privates Eigentum ist. Die Optionen reichen von der Zuweisung an einen Ehegatten bis zum Verkauf. Wir analysieren dies in Ihrer Beratung.',
    'Зависит от имущественного режима и от того, является ли недвижимость совместной или личной собственностью. Варианты — от передачи одному супругу до продажи и раздела. Детально разбираем на консультации.');
  t('¿Cuánto demora un divorcio?',
    'How long does a divorce take?',
    'Quanto tempo dura um divórcio?',
    'Wie lange dauert eine Scheidung?',
    'Сколько времени занимает развод?');
  t('Un divorcio de mutuo acuerdo puede resolverse en semanas. Un divorcio unilateral puede llevar algunos meses según la carga del juzgado. En todos los casos minimizamos los tiempos con una gestión eficiente.',
    'A mutual agreement divorce can be resolved in weeks. A unilateral divorce may take a few months depending on court workload. In all cases, we minimize timelines with efficient management.',
    'Um divórcio consensual pode ser resolvido em semanas. Um divórcio unilateral pode levar alguns meses dependendo da carga do tribunal. Em todos os casos, minimizamos os prazos com gestão eficiente.',
    'Eine einvernehmliche Scheidung kann in Wochen abgeschlossen werden. Eine einseitige kann je nach Auslastung einige Monate dauern. In allen Fällen minimieren wir die Dauer durch effizientes Management.',
    'Развод по взаимному согласию может быть завершён за несколько недель. Односторонний — за несколько месяцев. В любом случае мы сокращаем сроки за счёт эффективного ведения дела.');
  t('¿Atienden de forma virtual?',
    'Do you offer virtual consultations?',
    'Vocês atendem de forma virtual?',
    'Bieten Sie virtuelle Beratung an?',
    'Принимаете ли онлайн?');
  t('Sí. Atendemos 100% de manera virtual en toda Argentina, y también de forma presencial. Podés agendar tu consulta directamente desde esta página eligiendo el horario que más te convenga.',
    'Yes. We serve 100% virtually throughout Argentina, and also in person. You can book directly on this page by choosing the time that works best for you.',
    'Sim. Atendemos 100% de forma virtual em toda a Argentina, e também presencialmente. Você pode agendar diretamente nesta página, escolhendo o horário mais conveniente.',
    'Ja. Wir beraten 100% virtuell in ganz Argentinien und auch persönlich. Sie können Ihren Termin direkt auf dieser Seite buchen.',
    'Да. Работаем 100% онлайн по всей Аргентине, а также очно. Вы можете записаться прямо на этой странице, выбрав удобное время.');
  t('¿Cuánto cuesta la consulta inicial?',
    'How much does the initial consultation cost?',
    'Quanto custa a consulta inicial?',
    'Was kostet die Erstberatung?',
    'Сколько стоит первая консультация?');
  t('La primera consulta tiene un costo accesible que se informa al momento de agendar. Al confirmar el turno se solicita el envío del comprobante de pago por WhatsApp para asegurar la reserva.',
    'The first consultation has an accessible cost shared at booking. When confirming the appointment, a payment receipt is requested via WhatsApp to secure the reservation.',
    'A primeira consulta tem um custo acessível informado no agendamento. Ao confirmar, solicita-se o comprovante de pagamento pelo WhatsApp para garantir a reserva.',
    'Die Erstberatung hat einen erschwinglichen Preis, der bei der Buchung mitgeteilt wird. Zur Bestätigung wird ein Zahlungsnachweis per WhatsApp angefordert.',
    'Стоимость первой консультации доступна и сообщается при записи. При подтверждении запрашивается квитанция об оплате через WhatsApp для закрепления брони.');

  /* Herramienta */
  t('Herramienta gratuita','Free tool',         'Ferramenta gratuita','Kostenloses Tool', 'Бесплатный инструмент');
  t('¿No sabés por dónde empezar tu divorcio?',
    "Don't know where to start with your divorce?",
    'Não sabe por onde começar o seu divórcio?',
    'Wissen Sie nicht, wie Sie Ihre Scheidung angehen sollen?',
    'Не знаете, с чего начать развод?');
  t('Respondé unas preguntas simples y obtené al instante una evaluación preliminar de tu caso, con orientación de honorarios. Confidencial y sin compromiso.',
    'Answer a few simple questions and instantly get a preliminary evaluation of your case, with fee guidance. Confidential and no commitment.',
    'Responda algumas perguntas simples e obtenha instantaneamente uma avaliação preliminar do seu caso, com orientação sobre honorários. Confidencial e sem compromisso.',
    'Beantworten Sie ein paar Fragen und erhalten Sie sofort eine vorläufige Einschätzung Ihres Falls mit Honorarhinweisen. Vertraulich und unverbindlich.',
    'Ответьте на несколько простых вопросов и получите предварительную оценку вашего дела с ориентировочными гонорарами. Конфиденциально и без обязательств.');
  t('📋 Evaluá tu caso ahora','📋 Evaluate your case now','📋 Avalie seu caso agora','📋 Jetzt Fall bewerten','📋 Оценить дело сейчас');

  /* Turnos */
  t('Reservá tu turno',   'Book your appointment','Reserve seu horário','Termin reservieren','Забронировать запись');
  t('Agendá tu consulta online','Schedule your consultation online','Agende sua consulta online','Online-Beratung buchen','Записаться онлайн');
  t('Elegí el día y horario que más te convenga. Respondemos con la confirmación por WhatsApp.',
    'Choose the day and time that suits you best. We confirm via WhatsApp.',
    'Escolha o dia e horário mais conveniente para você. Confirmamos pelo WhatsApp.',
    'Wählen Sie Tag und Uhrzeit. Wir bestätigen per WhatsApp.',
    'Выберите удобный день и время. Подтверждение придёт в WhatsApp.');
  t('Duración',           'Duration',          'Duração',          'Dauer',              'Продолжительность');
  t('60 minutos por consulta','60 minutes per consultation','60 minutos por consulta','60 Minuten pro Beratung','60 минут на консультацию');
  t('Modalidad',          'Format',            'Modalidade',       'Format',             'Формат');
  t('Virtual o presencial — vos elegís','Virtual or in-person — your choice','Virtual ou presencial — você escolhe','Online oder persönlich – Ihre Wahl','Онлайн или очно — ваш выбор');
  t('Horarios',           'Hours',             'Horários',         'Öffnungszeiten',     'Часы работы');
  t('Lunes a viernes, 10:00 – 18:00 hs','Monday–Friday, 10:00 AM – 6:00 PM','Segunda a sexta, 10:00 – 18:00 h','Mo.–Fr., 10:00 – 18:00 Uhr','Пн.–Пт., 10:00 – 18:00');
  t('Confirmación',       'Confirmation',      'Confirmação',      'Bestätigung',        'Подтверждение');
  t('El turno se confirma con el pago previo','Appointment confirmed upon prior payment','A consulta é confirmada com pagamento antecipado','Der Termin wird nach Vorzahlung bestätigt','Запись подтверждается после предоплаты');
  t('Respondemos en menos de 24 hs','We respond within 24h','Respondemos em menos de 24h','Antwort innerhalb von 24 Std.','Ответим в течение 24 ч');
  t('Horario',            'Hours',             'Horário',          'Öffnungszeiten',     'Часы работы');
  t('Lunes a viernes',    'Monday to Friday',  'Segunda a sexta',  'Montag bis Freitag', 'Пн – Пт');
  t('10:00 – 18:00 hs',   '10:00 AM – 6:00 PM','10:00 – 18:00 h',  '10:00 – 18:00 Uhr',  '10:00 – 18:00');

  /* Footer */
  t('Especialistas en Divorcios y Sucesiones en Buenos Aires. Asesoramiento profesional, claro y personalizado. Virtual y presencial.',
    'Specialists in Divorces and Successions in Buenos Aires. Professional, clear, and personalized advice. Virtual and in-person.',
    'Especialistas em Divórcios e Sucessões em Buenos Aires. Assessoria profissional, clara e personalizada. Virtual e presencial.',
    'Spezialisten für Scheidungen und Erbschaften in Buenos Aires. Professionelle, klare und persönliche Beratung. Online und persönlich.',
    'Специалисты по разводам и наследству в Буэнос-Айресе. Профессиональная, чёткая и персональная консультация. Онлайн и очно.');
  t('Contacto',           'Contact',           'Contato',          'Kontakt',            'Контакты');
  t('Agendar consulta',   'Book consultation', 'Agendar consulta', 'Termin buchen',      'Записаться');
  t('Política de privacidad','Privacy policy', 'Política de privacidade','Datenschutzrichtlinie','Политика конфиденциальности');
  t('© 2025 Estudio Jurídico Basavilbaso — Divorcios y Sucesiones',
    '© 2025 Basavilbaso Law Firm — Divorces & Successions',
    '© 2025 Estúdio Jurídico Basavilbaso — Divórcios e Sucessões',
    '© 2025 Anwaltskanzlei Basavilbaso — Scheidungen & Erbschaften',
    '© 2025 Юридическая фирма Basavilbaso — Разводы и наследство');

  /* ── Traducciones con HTML (negritas / cursivas) ─────────────── */
  var H = {
    h1: {
      es: 'Hacemos simple <em>tu divorcio.</em>',
      en: 'We make <em>your divorce</em> simple.',
      pt: 'Simplificamos <em>o seu divórcio.</em>',
      de: 'Wir machen <em>Ihre Scheidung</em> einfacher.',
      ru: 'Мы упрощаем <em>ваш развод.</em>'
    },
    aboutP1: {
      es: 'Somos un estudio especializado en <strong>Derecho de Familia y Sucesiones</strong>, con foco en divorcios y herencias. Trabajamos para que cada proceso sea lo más simple, rápido y claro posible para vos.',
      en: 'We are a firm specializing in <strong>Family and Succession Law</strong>, focused on divorces and inheritances. We work to make every process as simple, fast, and clear as possible for you.',
      pt: 'Somos um estúdio especializado em <strong>Direito de Família e Sucessões</strong>, com foco em divórcios e heranças. Trabalhamos para que cada processo seja o mais simples, rápido e claro possível para você.',
      de: 'Wir sind eine Kanzlei mit Spezialisierung auf <strong>Familien- und Erbrecht</strong>, mit Schwerpunkt auf Scheidungen und Erbschaften. Wir sorgen dafür, dass jeder Prozess so einfach, schnell und klar wie möglich abläuft.',
      ru: 'Мы — юридическая фирма, специализирующаяся в области <strong>семейного и наследственного права</strong>, с акцентом на разводы и наследственные дела. Делаем каждый процесс максимально простым, быстрым и понятным.'
    },
    aboutP2: {
      es: 'Creemos que el asesoramiento jurídico tiene que ser <strong>accesible, humano y efectivo</strong>. Por eso atendemos de manera virtual y presencial, con comunicación directa y personalizada.',
      en: 'We believe legal advice must be <strong>accessible, human, and effective</strong>. That\'s why we offer virtual and in-person service with direct, personalized communication.',
      pt: 'Acreditamos que a assessoria jurídica deve ser <strong>acessível, humana e eficaz</strong>. Por isso atendemos de forma virtual e presencial, com comunicação direta e personalizada.',
      de: 'Wir glauben, dass Rechtsberatung <strong>zugänglich, menschlich und effektiv</strong> sein muss. Deshalb bieten wir virtuelle und persönliche Betreuung mit direkter, individueller Kommunikation.',
      ru: 'Мы убеждены, что юридическая помощь должна быть <strong>доступной, человечной и эффективной</strong>. Поэтому работаем онлайн и очно с прямым персональным общением.'
    },
    aboutP3: {
      es: 'Con más de <strong>21.000 personas</strong> que ya confían en nosotros en redes, sabemos lo que la gente necesita entender del sistema legal. Sin tecnicismos innecesarios, con resultados reales.',
      en: 'With over <strong>21,000 people</strong> already trusting us on social media, we know what people need to understand about the legal system. No unnecessary jargon, real results.',
      pt: 'Com mais de <strong>21.000 pessoas</strong> que já confiam em nós nas redes sociais, sabemos o que as pessoas precisam entender do sistema jurídico. Sem tecnicismos desnecessários, com resultados reais.',
      de: 'Mit über <strong>21.000 Personen</strong>, die uns in sozialen Medien vertrauen, wissen wir, was Menschen über das Rechtssystem verstehen müssen. Keine unnötigen Fachbegriffe, echte Ergebnisse.',
      ru: 'Более <strong>21 000 человек</strong> уже доверяют нам в социальных сетях. Мы знаем, что людям нужно понять в правовой системе. Без лишних терминов — только реальные результаты.'
    }
  };

  /* Títulos de página por idioma */
  var PAGE_TITLES = {
    es: 'Estudio Jurídico Basavilbaso — Divorcios y Sucesiones',
    en: 'Basavilbaso Law Firm — Divorces & Successions',
    pt: 'Estúdio Jurídico Basavilbaso — Divórcios e Sucessões',
    de: 'Anwaltskanzlei Basavilbaso — Scheidungen & Erbschaften',
    ru: 'Юридическая фирма Basavilbaso — Разводы и наследство'
  };

  /* ── Estado ──────────────────────────────────────────────────── */
  var VALID = { es:1, en:1, pt:1, de:1, ru:1 };
  var stored = localStorage.getItem('basavilbaso_lang');
  var currentLang = (stored && VALID[stored]) ? stored : 'es';
  var nodeCache = [];   /* { node, key, originalFull } */
  var htmlCache = [];   /* { el, hKey } */

  /* ── Cachear nodos de texto ──────────────────────────────────── */
  function buildNodeCache() {
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, IFRAME: 1, SVG: 1 };
    function walk(node) {
      if (node.nodeType === 3) { /* TEXT_NODE */
        var key = node.textContent.trim();
        if (key && T[key]) {
          nodeCache.push({ node: node, key: key, originalFull: node.textContent });
        }
      } else if (node.nodeType === 1 && !skip[node.tagName]) {
        for (var i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
      }
    }
    walk(document.body);
  }

  /* ── Cachear elementos con HTML rico ─────────────────────────── */
  function buildHTMLCache() {
    /* H1 principal */
    var h1 = document.querySelector('h1');
    if (h1) htmlCache.push({ el: h1, hKey: 'h1' });

    /* Párrafos del "Quiénes somos" — identificados por contenido */
    var paragraphs = document.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
      var txt = (paragraphs[i].innerText || paragraphs[i].textContent || '');
      if (txt.indexOf('Somos un estudio especializado') !== -1) {
        htmlCache.push({ el: paragraphs[i], hKey: 'aboutP1' });
      } else if (txt.indexOf('Creemos que el asesoramiento') !== -1) {
        htmlCache.push({ el: paragraphs[i], hKey: 'aboutP2' });
      } else if (txt.indexOf('21.000') !== -1 && txt.indexOf('confían') !== -1) {
        htmlCache.push({ el: paragraphs[i], hKey: 'aboutP3' });
      }
    }
  }

  /* ── Aplicar un idioma ───────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('basavilbaso_lang', lang);

    /* 1. Nodos de texto */
    for (var i = 0; i < nodeCache.length; i++) {
      var item    = nodeCache[i];
      var entry   = T[item.key];
      if (!entry) continue;
      var translated = entry[lang];
      if (translated == null) continue;
      /* Conservar espacios del original */
      var leading  = item.originalFull.match(/^(\s*)/)[1];
      var trailing = item.originalFull.match(/(\s*)$/)[1];
      item.node.textContent = leading + translated + trailing;
    }

    /* 2. Elementos con HTML rico */
    for (var j = 0; j < htmlCache.length; j++) {
      var hItem  = htmlCache[j];
      var hEntry = H[hItem.hKey];
      if (hEntry && hEntry[lang]) hItem.el.innerHTML = hEntry[lang];
    }

    /* 3. Atributo lang del documento y título */
    document.documentElement.lang = lang;
    if (PAGE_TITLES[lang]) document.title = PAGE_TITLES[lang];

    /* 4. Actualizar botones del selector */
    var btns = document.querySelectorAll('.i18n-btn');
    for (var k = 0; k < btns.length; k++) {
      var active = btns[k].getAttribute('data-lang') === lang;
      if (active) {
        btns[k].classList.add('i18n-active');
        btns[k].setAttribute('aria-pressed', 'true');
      } else {
        btns[k].classList.remove('i18n-active');
        btns[k].setAttribute('aria-pressed', 'false');
      }
    }
  }

  /* ── Conectar los selectores de idioma del HTML ──────────────────
     Los botones (.i18n-btn con data-lang) ya están en el HTML, tanto
     en el nav de escritorio como en el menú móvil. Acá solo les
     agregamos el comportamiento. NO se inyecta ningún selector para
     evitar duplicados.                                                */
  function bindSwitchers() {
    var btns = document.querySelectorAll('.i18n-btn[data-lang]');
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', function () {
          applyLang(btn.getAttribute('data-lang'));
        });
      })(btns[i]);
    }
  }

  /* ── Inicialización ──────────────────────────────────────────── */
  function init() {
    buildNodeCache();
    buildHTMLCache();
    bindSwitchers();
    applyLang(currentLang); /* traduce (si no es 'es') y marca el botón activo */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
