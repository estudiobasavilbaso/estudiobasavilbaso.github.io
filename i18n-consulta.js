/* ================================================================
   Estudio Jurídico Basavilbaso — Sistema de traducción
   Página: consulta-divorcio.html
   Idiomas: Español · English · Português · Deutsch · Русский

   INSTALACIÓN — agregar ANTES del </body> en consulta-divorcio.html:
   <script src="i18n-consulta.js"></script>
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
  var T = {};
  function t(es, en, pt, de, ru) { T[es] = { es: es, en: en, pt: pt, de: de, ru: ru }; }

  /* Encabezado / navegación */
  t('← Volver al sitio','← Back to site','← Voltar ao site','← Zurück zur Website','← На сайт');

  /* Indicadores de paso (Paso 1 de 7 … Paso 7 de 7) */
  t('Paso 1 de 7','Step 1 of 7','Passo 1 de 7','Schritt 1 von 7','Шаг 1 из 7');
  t('Paso 2 de 7','Step 2 of 7','Passo 2 de 7','Schritt 2 von 7','Шаг 2 из 7');
  t('Paso 3 de 7','Step 3 of 7','Passo 3 de 7','Schritt 3 von 7','Шаг 3 из 7');
  t('Paso 4 de 7','Step 4 of 7','Passo 4 de 7','Schritt 4 von 7','Шаг 4 из 7');
  t('Paso 5 de 7','Step 5 of 7','Passo 5 de 7','Schritt 5 von 7','Шаг 5 из 7');
  t('Paso 6 de 7','Step 6 of 7','Passo 6 de 7','Schritt 6 von 7','Шаг 6 из 7');
  t('Paso 7 de 7','Step 7 of 7','Passo 7 de 7','Schritt 7 von 7','Шаг 7 из 7');

  /* Botones generales */
  t('Continuar →',        'Continue →',        'Continuar →',       'Weiter →',           'Далее →');
  t('← Atrás',           '← Back',            '← Voltar',          '← Zurück',           '← Назад');
  t('Finalizar →',        'Finish →',          'Finalizar →',       'Abschließen →',      'Завершить →');
  t('← Revisar',         '← Review',          '← Revisar',         '← Überprüfen',       '← Проверить');
  t('Seleccioná...',      'Select...',         'Selecione...',      'Auswählen...',       'Выберите...');

  /* ─── PASO 1 ─────────────────────────────────────────────────── */
  t('¿Qué tipo de divorcio necesitás?',
    'What type of divorce do you need?',
    'Que tipo de divórcio você precisa?',
    'Welche Art von Scheidung benötigen Sie?',
    'Какой тип развода вам нужен?');
  t('Esta primera respuesta nos ayuda a entender tu situación. No te preocupes si no estás seguro: lo vemos juntos.',
    "This first answer helps us understand your situation. Don't worry if you're not sure — we'll work it out together.",
    'Esta primeira resposta nos ajuda a entender sua situação. Não se preocupe se não tiver certeza: vemos juntos.',
    'Diese erste Antwort hilft uns, Ihre Situation zu verstehen. Keine Sorge, wenn Sie unsicher sind – wir klären das gemeinsam.',
    'Этот первый ответ поможет нам понять вашу ситуацию. Не беспокойтесь, если не уверены — разберёмся вместе.');
  t('Tranquilo/a: esto no inicia ningún trámite ni reemplaza una consulta. Es una evaluación preliminar gratuita para entender tu caso y darte una orientación. Toda la info es confidencial.',
    "Don't worry: this doesn't start any process or replace a consultation. It's a free preliminary evaluation to understand your case and give you guidance. All information is confidential.",
    'Fique tranquilo/a: isso não inicia nenhum processo nem substitui uma consulta. É uma avaliação preliminar gratuita para entender seu caso e orientá-lo/a. Toda a informação é confidencial.',
    'Keine Sorge: Dies startet kein Verfahren und ersetzt keine Beratung. Es ist eine kostenlose Vorabeinschätzung, um Ihren Fall zu verstehen. Alle Angaben sind vertraulich.',
    'Не переживайте: это не запускает никакой процедуры и не заменяет консультацию. Это бесплатная предварительная оценка вашего дела. Вся информация конфиденциальна.');

  /* Opciones paso 1 */
  t('De común acuerdo',   'By mutual agreement','Por mútuo acordo',  'Im gegenseitigen Einvernehmen','По взаимному согласию');
  t('Los dos están de acuerdo en divorciarse y quieren resolverlo juntos.',
    'Both parties agree to divorce and want to resolve it together.',
    'Os dois concordam em se divorciar e querem resolver juntos.',
    'Beide sind mit der Scheidung einverstanden und möchten es gemeinsam lösen.',
    'Оба согласны на развод и хотят решить всё вместе.');
  t('Solo yo quiero divorciarme',
    'Only I want a divorce',
    'Só eu quero me divorciar',
    'Nur ich möchte mich scheiden lassen',
    'Только я хочу развода');
  t('Querés iniciarlo aunque la otra persona no esté de acuerdo o no participe.',
    "You want to start the process even if the other person doesn't agree or doesn't participate.",
    'Você quer iniciar o processo mesmo que a outra pessoa não concorde ou não participe.',
    'Sie möchten das Verfahren einleiten, auch wenn die andere Person nicht einverstanden ist oder nicht teilnimmt.',
    'Вы хотите начать процедуру, даже если другая сторона не согласна или не участвует.');
  t('No estoy seguro/a',  'I\'m not sure',      'Não tenho certeza', 'Ich bin nicht sicher','Я не уверен/а');
  t('No sé bien cómo encarar la situación. Necesito orientación.',
    "I'm not sure how to approach the situation. I need guidance.",
    'Não sei bem como enfrentar a situação. Preciso de orientação.',
    'Ich weiß nicht genau, wie ich die Situation angehen soll. Ich brauche Beratung.',
    'Я не знаю, как подступиться к ситуации. Мне нужна помощь.');

  /* ─── PASO 2 ─────────────────────────────────────────────────── */
  t('¿Tienen hijos en común?',
    'Do you have children together?',
    'Vocês têm filhos em comum?',
    'Haben Sie gemeinsame Kinder?',
    'У вас есть общие дети?');
  t('Cuando hay hijos menores o con discapacidad, hay que definir su cuidado y alimentos. Es uno de los puntos más importantes.',
    'When there are minor or disabled children, their care and support must be defined. This is one of the most important points.',
    'Quando há filhos menores ou com deficiência, é necessário definir seus cuidados e alimentos. É um dos pontos mais importantes.',
    'Wenn minderjährige oder behinderte Kinder vorhanden sind, müssen Sorgerecht und Unterhalt geregelt werden. Das ist einer der wichtigsten Punkte.',
    'Когда есть несовершеннолетние или дети-инвалиды, необходимо определить уход и алименты. Это один из важнейших вопросов.');

  /* Opciones hijos */
  t('Sí, hijos menores o con discapacidad',
    'Yes, minor or disabled children',
    'Sim, filhos menores ou com deficiência',
    'Ja, minderjährige oder behinderte Kinder',
    'Да, несовершеннолетние или дети с инвалидностью');
  t('Habrá que acordar cuidado, comunicación y cuota alimentaria.',
    'Care, communication, and child support will need to be agreed upon.',
    'Será necessário acordar cuidados, comunicação e pensão alimentícia.',
    'Sorgerecht, Umgangsrecht und Unterhalt müssen vereinbart werden.',
    'Необходимо будет согласовать уход, общение и алименты.');
  t('No',                 'No',                'Não',               'Nein',               'Нет');
  t('No hay hijos menores ni con discapacidad involucrados.',
    'There are no minor or disabled children involved.',
    'Não há filhos menores ou com deficiência envolvidos.',
    'Es sind keine minderjährigen oder behinderten Kinder beteiligt.',
    'Несовершеннолетних или детей с инвалидностью нет.');

  t('Cuando hay hijos, conviene tener una idea de cómo querés organizar el cuidado. No hace falta que sea perfecto: lo ajustamos en la consulta.',
    "When there are children, it's helpful to have an idea of how you'd like to organize care. It doesn't have to be perfect — we adjust it in the consultation.",
    'Quando há filhos, é útil ter uma ideia de como você deseja organizar os cuidados. Não precisa ser perfeito: ajustamos na consulta.',
    'Wenn Kinder vorhanden sind, ist es hilfreich, eine Vorstellung von der Betreuungsorganisation zu haben. Es muss nicht perfekt sein – wir passen es in der Beratung an.',
    'Когда есть дети, полезно иметь представление о том, как вы хотите организовать уход. Не обязательно идеально — скорректируем на консультации.');

  t('¿Cómo te imaginás el cuidado?',
    'How do you envision custody?',
    'Como você imagina a guarda?',
    'Wie stellen Sie sich das Sorgerecht vor?',
    'Как вы представляете себе уход?');
  t('Modelo de cuidado',  'Custody model',     'Modelo de guarda',  'Sorgerechtsmodell',  'Модель опеки');

  /* Opciones modelo de cuidado */
  t('Compartido, los chicos viven principalmente conmigo',
    'Shared, children live mainly with me',
    'Compartilhada, os filhos moram principalmente comigo',
    'Geteilt, Kinder leben hauptsächlich bei mir',
    'Совместная, дети живут преимущественно со мной');
  t('Compartido, los chicos viven principalmente con el otro progenitor',
    'Shared, children live mainly with the other parent',
    'Compartilhada, os filhos moram principalmente com o outro genitor',
    'Geteilt, Kinder leben hauptsächlich beim anderen Elternteil',
    'Совместная, дети живут преимущественно с другим родителем');
  t('Alternado (tiempos parecidos con cada uno)',
    'Alternating (similar time with each parent)',
    'Alternada (tempo semelhante com cada um)',
    'Wechselmodell (ähnliche Zeit bei jedem Elternteil)',
    'Поочерёдная (примерно равное время с каждым)');
  t('Quiero el cuidado principal yo',
    'I want primary custody',
    'Quero a guarda principal',
    'Ich möchte das Hauptsorgerecht',
    'Я хочу основную опеку');
  t('Todavía no lo definimos',
    "We haven't decided yet",
    'Ainda não definimos',
    'Haben wir noch nicht entschieden',
    'Ещё не определились');

  t('¿Cómo está hoy el tema de la cuota alimentaria?',
    'What is the current situation regarding child support?',
    'Como está hoje a questão da pensão alimentícia?',
    'Wie ist die aktuelle Situation beim Unterhalt?',
    'Каков текущий статус алиментов?');

  /* Opciones cuota alimentaria */
  t('Ya pasa/paso una cuota y queremos formalizarla',
    'A support amount is already being paid and we want to formalize it',
    'Já passa/passou uma pensão e queremos formalizá-la',
    'Es wird bereits Unterhalt gezahlt und wir möchten ihn formalisieren',
    'Алименты уже выплачиваются, хотим их оформить официально');
  t('Hay que establecerla desde cero',
    'It needs to be established from scratch',
    'É necessário estabelecê-la do zero',
    'Sie muss von Grund auf festgelegt werden',
    'Нужно установить с нуля');
  t('Hay conflicto con la cuota',
    'There is a conflict regarding support',
    'Há conflito sobre a pensão',
    'Es gibt Streit über den Unterhalt',
    'Есть конфликт по поводу алиментов');
  t('No estoy seguro/a',  "I'm not sure",      'Não tenho certeza', 'Ich bin nicht sicher','Я не уверен/а');
  t('(opcional)', '(optional)', '(opcional)', '(optional)', '(необязательно)');
  t('Edades de los hijos (opcional)',
    'Ages of children (optional)',
    'Idades dos filhos (opcional)',
    'Alter der Kinder (optional)',
    'Возраст детей (необязательно)');

  /* ─── PASO 3 ─────────────────────────────────────────────────── */
  t('¿Hay bienes en común?',
    'Do you have shared assets?',
    'Vocês têm bens em comum?',
    'Haben Sie gemeinsames Vermögen?',
    'Есть ли у вас общее имущество?');
  t('Marcá lo que tengan. Esto nos ayuda a saber si hay que incluir división de bienes en el divorcio.',
    'Check what applies. This helps us determine whether asset division needs to be included in the divorce.',
    'Marque o que se aplica. Isso nos ajuda a saber se é necessário incluir divisão de bens no divórcio.',
    'Markieren Sie, was zutrifft. Das hilft uns festzustellen, ob eine Vermögensaufteilung in die Scheidung einbezogen werden muss.',
    'Отметьте, что есть. Это поможет нам понять, нужно ли включить раздел имущества в процедуру развода.');

  /* Tipos de bienes */
  t('Vivienda familiar propia',
    'Owned family home',
    'Imóvel familiar próprio',
    'Eigenes Familienhaus',
    'Собственное семейное жильё');
  t('La casa o departamento donde vivían (o viven).',
    'The house or apartment where you lived (or live).',
    'A casa ou apartamento onde moravam (ou moram).',
    'Das Haus oder die Wohnung, in der Sie lebten (oder leben).',
    'Дом или квартира, где вы жили (или живёте).');
  t('Vehículos',          'Vehicles',          'Veículos',          'Fahrzeuge',          'Транспортные средства');
  t('Autos, motos, camionetas.',
    'Cars, motorcycles, trucks.',
    'Carros, motos, caminhonetes.',
    'Autos, Motorräder, Transporter.',
    'Автомобили, мотоциклы, грузовики.');
  t('+ Agregar otro vehículo',
    '+ Add another vehicle',
    '+ Adicionar outro veículo',
    '+ Weiteres Fahrzeug hinzufügen',
    '+ Добавить транспортное средство');
  t('Otros inmuebles',    'Other real estate',  'Outros imóveis',    'Andere Immobilien',  'Другая недвижимость');
  t('Terrenos, otra propiedad, local, etc.',
    'Land, other property, commercial premises, etc.',
    'Terrenos, outra propriedade, estabelecimento, etc.',
    'Grundstücke, andere Immobilien, Gewerberäume usw.',
    'Земельные участки, другая собственность, помещения и т.д.');
  t('+ Agregar otro inmueble',
    '+ Add another property',
    '+ Adicionar outro imóvel',
    '+ Weitere Immobilie hinzufügen',
    '+ Добавить недвижимость');
  t('Empresas, sociedades o inversiones',
    'Companies, partnerships or investments',
    'Empresas, sociedades ou investimentos',
    'Unternehmen, Gesellschaften oder Investitionen',
    'Компании, партнёрства или инвестиции');
  t('SRL, SA, acciones, cuentas de inversión, cripto.',
    'SRL, SA, shares, investment accounts, crypto.',
    'SRL, SA, ações, contas de investimento, cripto.',
    'GmbH, AG, Aktien, Investmentkonten, Krypto.',
    'ООО, АО, акции, инвестиционные счета, криптовалюта.');
  t('+ Agregar otra empresa/inversión',
    '+ Add another company/investment',
    '+ Adicionar outra empresa/investimento',
    '+ Weiteres Unternehmen/Investment hinzufügen',
    '+ Добавить компанию/инвестицию');

  t('¿Querés resolver la división de bienes ahora?',
    'Do you want to resolve asset division now?',
    'Você quer resolver a divisão de bens agora?',
    'Möchten Sie die Vermögensaufteilung jetzt regeln?',
    'Хотите решить раздел имущества сейчас?');

  /* Opciones división de bienes */
  t('Sí, quiero incluirlo en el divorcio',
    'Yes, I want to include it in the divorce',
    'Sim, quero incluí-la no divórcio',
    'Ja, ich möchte es in die Scheidung einbeziehen',
    'Да, хочу включить в развод');
  t('No, solo el divorcio por ahora',
    'No, just the divorce for now',
    'Não, apenas o divórcio por enquanto',
    'Nein, vorerst nur die Scheidung',
    'Нет, пока только развод');
  t('No lo tengo decidido',
    "I haven't decided yet",
    'Ainda não decidi',
    'Ich habe mich noch nicht entschieden',
    'Ещё не решил/а');

  /* ─── PASO 4 ─────────────────────────────────────────────────── */
  t('Algunas situaciones especiales',
    'Some special situations',
    'Algumas situações especiais',
    'Einige besondere Situationen',
    'Некоторые особые обстоятельства');
  t('Estas preguntas son importantes. Si marcás "Sí" en alguna, tu caso necesita atención prioritaria — y eso está perfectamente bien.',
    'These questions are important. If you answer "Yes" to any of them, your case needs priority attention — and that\'s perfectly fine.',
    'Estas perguntas são importantes. Se você marcar "Sim" em alguma, seu caso precisa de atenção prioritária — e isso está perfeitamente bem.',
    'Diese Fragen sind wichtig. Wenn Sie bei einer „Ja" antworten, benötigt Ihr Fall vorrangige Aufmerksamkeit – das ist völlig in Ordnung.',
    'Эти вопросы важны. Если вы ответите «Да» на любой из них, ваше дело требует приоритетного внимания — и это совершенно нормально.');

  /* Preguntas situaciones especiales */
  t('¿Hay situaciones de violencia, denuncias o restricciones?',
    'Are there situations of violence, complaints, or restraining orders?',
    'Há situações de violência, denúncias ou restrições?',
    'Gibt es Situationen von Gewalt, Anzeigen oder Auflagen?',
    'Есть ли случаи насилия, жалобы или ограничительные меры?');
  t('Sí',                 'Yes',               'Sim',               'Ja',                 'Да');
  t('Prefiero no responder ahora',
    "I'd rather not answer now",
    'Prefiro não responder agora',
    'Ich möchte das jetzt nicht beantworten',
    'Предпочитаю не отвечать сейчас');
  t('¿Te preocupa que se vendan u oculten bienes?',
    'Are you concerned that assets might be sold or hidden?',
    'Você está preocupado/a que bens sejam vendidos ou ocultados?',
    'Befürchten Sie, dass Vermögenswerte verkauft oder versteckt werden?',
    'Вас беспокоит, что имущество может быть продано или скрыто?');
  t('No estoy seguro/a',  "I'm not sure",      'Não tenho certeza', 'Ich bin nicht sicher','Я не уверен/а');
  t('¿Necesitás resolver la cuota alimentaria con urgencia?',
    'Do you urgently need to resolve child support?',
    'Você precisa resolver a pensão alimentícia com urgência?',
    'Müssen Sie den Unterhalt dringend klären?',
    'Вам срочно нужно решить вопрос алиментов?');
  t('¿Necesitás definir con urgencia quién se queda en la casa?',
    'Do you urgently need to define who stays in the house?',
    'Você precisa definir com urgência quem fica na casa?',
    'Müssen Sie dringend klären, wer in der Wohnung bleibt?',
    'Вам срочно нужно определить, кто остаётся в жилье?');
  t('¿Querés contarnos algo más de tu situación? (opcional)',
    'Would you like to tell us anything else about your situation? (optional)',
    'Gostaria de nos contar algo mais sobre sua situação? (opcional)',
    'Möchten Sie uns noch etwas über Ihre Situation mitteilen? (optional)',
    'Хотите рассказать нам что-то ещё о вашей ситуации? (необязательно)');

  /* ─── PASO 5 ─────────────────────────────────────────────────── */
  t('Tus datos de contacto',
    'Your contact details',
    'Seus dados de contato',
    'Ihre Kontaktdaten',
    'Ваши контактные данные');
  t('Para poder responderte y enviarte tu evaluación. Solo te pedimos lo esencial.',
    "So we can respond to you and send your evaluation. We only ask for the essentials.",
    'Para responder e enviar sua avaliação. Pedimos apenas o essencial.',
    'Damit wir Ihnen antworten und Ihre Einschätzung zusenden können. Wir fragen nur das Wesentliche.',
    'Чтобы ответить вам и отправить оценку. Мы запрашиваем только самое необходимое.');

  /* Etiquetas de campos */
  t('Nombre y apellido *',  'Full name *',        'Nome e sobrenome *', 'Vor- und Nachname *', 'Имя и фамилия *');
  t('DNI *',                'ID number *',        'CPF / RG *',         'Ausweisnummer *',     'Номер удостоверения *');
  t('WhatsApp *',           'WhatsApp *',         'WhatsApp *',         'WhatsApp *',          'WhatsApp *');
  t('Email *',              'Email *',            'E-mail *',           'E-Mail *',            'Email *');
  t('¿Dónde vivís?',        'Where do you live?', 'Onde você mora?',    'Wo wohnen Sie?',      'Где вы живёте?');
  t('¿Cómo preferís que te atendamos?',
    'How would you prefer we serve you?',
    'Como você prefere ser atendido/a?',
    'Wie möchten Sie beraten werden?',
    'Как вы предпочитаете получать консультацию?');

  /* Opciones modalidad */
  t('Virtual (videollamada)','Virtual (video call)','Virtual (videochamada)','Online (Videoanruf)','Онлайн (видеозвонок)');
  t('Presencial',            'In person',           'Presencial',            'Persönlich',         'Очно');
  t('Me da igual',           "Doesn't matter to me",'Tanto faz',             'Ist mir egal',       'Мне всё равно');
  t('Ver mi evaluación →',   'See my evaluation →', 'Ver minha avaliação →', 'Meine Einschätzung sehen →','Посмотреть оценку →');

  /* ─── PASO 6 ─────────────────────────────────────────────────── */
  t('Tu evaluación preliminar',
    'Your preliminary evaluation',
    'Sua avaliação preliminar',
    'Ihre Vorabeinschätzung',
    'Ваша предварительная оценка');
  t('Según lo que nos contaste, esto es lo que vemos. Recordá: es una orientación, el detalle lo definimos en la consulta.',
    "Based on what you've told us, this is what we see. Remember: this is guidance only — the details are defined in the consultation.",
    'Com base no que você nos contou, é isso que vemos. Lembre-se: é uma orientação, os detalhes definimos na consulta.',
    'Basierend auf Ihren Angaben sehen wir folgendes. Denken Sie daran: Das ist eine Orientierung – die Details klären wir in der Beratung.',
    'На основе того, что вы нам рассказали, вот что мы видим. Помните: это ориентировочно — детали определяем на консультации.');
  t('Lo que vemos de tu caso',
    'What we see in your case',
    'O que vemos do seu caso',
    'Was wir in Ihrem Fall sehen',
    'Что мы видим в вашем деле');
  t('El próximo paso es conversarlo',
    'The next step is to discuss it',
    'O próximo passo é conversar sobre isso',
    'Der nächste Schritt ist, es zu besprechen',
    'Следующий шаг — обсудить это');
  t('En una consulta personalizada analizamos tu situación en detalle, te explicamos las opciones y te damos un presupuesto claro y a tu medida. La primera orientación no tiene compromiso.',
    'In a personalized consultation we analyze your situation in detail, explain the options, and give you a clear, tailored quote. The first session has no commitment.',
    'Em uma consulta personalizada analisamos sua situação em detalhes, explicamos as opções e apresentamos um orçamento claro e personalizado. A primeira orientação não tem compromisso.',
    'In einer persönlichen Beratung analysieren wir Ihre Situation im Detail, erklären die Optionen und geben Ihnen ein klares, maßgeschneidertes Angebot. Die erste Orientierung ist unverbindlich.',
    'На персональной консультации мы детально анализируем вашу ситуацию, объясняем варианты и даём чёткую смету. Первая беседа ни к чему не обязывает.');

  /* ─── PASO 7 ─────────────────────────────────────────────────── */
  t('Enviá tu consulta',
    'Send your inquiry',
    'Envie sua consulta',
    'Senden Sie Ihre Anfrage',
    'Отправьте запрос');
  t('Al enviar, se abre WhatsApp con tu evaluación lista para que la mandes al estudio. Te respondemos en menos de 24 horas.',
    'When you send, WhatsApp opens with your evaluation ready to send to the firm. We respond in less than 24 hours.',
    'Ao enviar, o WhatsApp abre com sua avaliação pronta para enviar ao escritório. Respondemos em menos de 24 horas.',
    'Beim Absenden öffnet sich WhatsApp mit Ihrer Einschätzung, bereit zum Senden an die Kanzlei. Wir antworten innerhalb von 24 Stunden.',
    'При отправке откроется WhatsApp с вашей оценкой, готовой к отправке в фирму. Мы ответим в течение 24 часов.');
  t('Tu información es confidencial y se trata conforme a nuestra política de privacidad. Enviar este resumen no inicia ningún trámite automático ni te obliga a nada.',
    'Your information is confidential and handled in accordance with our privacy policy. Sending this summary does not start any automatic process or commit you to anything.',
    'Sua informação é confidencial e tratada conforme nossa política de privacidade. Enviar este resumo não inicia nenhum processo automático nem te obriga a nada.',
    'Ihre Daten sind vertraulich und werden gemäß unserer Datenschutzrichtlinie behandelt. Das Absenden dieser Zusammenfassung startet kein automatisches Verfahren und verpflichtet Sie zu nichts.',
    'Ваша информация конфиденциальна и обрабатывается в соответствии с нашей политикой конфиденциальности. Отправка этого резюме не запускает никакой процедуры и ни к чему вас не обязывает.');
  t('Acepto la política de privacidad y el tratamiento de mis datos',
    'I accept the privacy policy and the processing of my data',
    'Aceito a política de privacidade e o tratamento dos meus dados',
    'Ich akzeptiere die Datenschutzrichtlinie und die Verarbeitung meiner Daten',
    'Я принимаю политику конфиденциальности и обработку моих данных');
  t('Autorizo al Estudio Jurídico Basavilbaso a analizar esta información para evaluar mi consulta, elaborar un análisis interno de mi caso y contactarme. Mi información se trata con confidencialidad profesional y puedo pedir acceso, rectificación o eliminación cuando quiera.',
    'I authorize Basavilbaso Law Firm to analyze this information to evaluate my inquiry, prepare an internal analysis of my case, and contact me. My information is treated with professional confidentiality and I can request access, correction, or deletion at any time.',
    'Autorizo o Estúdio Jurídico Basavilbaso a analisar esta informação para avaliar minha consulta, elaborar uma análise interna do meu caso e entrar em contato comigo. Minha informação é tratada com confidencialidade profissional e posso pedir acesso, retificação ou exclusão a qualquer momento.',
    'Ich ermächtige die Anwaltskanzlei Basavilbaso, diese Informationen zu analysieren, um meine Anfrage zu bewerten, eine interne Analyse meines Falles zu erstellen und mich zu kontaktieren. Meine Daten werden professionell vertraulich behandelt und ich kann jederzeit Auskunft, Berichtigung oder Löschung verlangen.',
    'Я разрешаю юридической фирме Basavilbaso анализировать эту информацию для оценки моего запроса, подготовки внутреннего анализа и связи со мной. Моя информация обрабатывается с профессиональной конфиденциальностью, и я могу в любой момент запросить доступ, исправление или удаление.');
  t('💬 Enviar mi consulta por WhatsApp',
    '💬 Send my inquiry via WhatsApp',
    '💬 Enviar minha consulta pelo WhatsApp',
    '💬 Anfrage per WhatsApp senden',
    '💬 Отправить запрос через WhatsApp');
  t('o agendá directamente:',
    'or book directly:',
    'ou agende diretamente:',
    'oder direkt buchen:',
    'или запишитесь напрямую:');
  t('elegí día y horario →',
    'choose a day and time →',
    'escolha um dia e horário →',
    'Tag und Uhrzeit wählen →',
    'выберите день и время →');

  /* ─── CONFIRMACIÓN FINAL ─────────────────────────────────────── */
  t('¡Listo!',             'Done!',             'Pronto!',           'Fertig!',            'Готово!');
  t('Se abrió WhatsApp con tu consulta. Si no se abrió, tocá el botón de abajo. Te respondemos a la brevedad.',
    "WhatsApp opened with your inquiry. If it didn't open, tap the button below. We'll respond shortly.",
    'O WhatsApp foi aberto com sua consulta. Se não abriu, toque no botão abaixo. Respondemos em breve.',
    'WhatsApp wurde mit Ihrer Anfrage geöffnet. Wenn es sich nicht geöffnet hat, tippen Sie auf die Schaltfläche unten. Wir antworten in Kürze.',
    'WhatsApp открылся с вашим запросом. Если не открылся, нажмите кнопку ниже. Ответим в ближайшее время.');
  t('💬 Abrir WhatsApp de nuevo',
    '💬 Open WhatsApp again',
    '💬 Abrir WhatsApp novamente',
    '💬 WhatsApp erneut öffnen',
    '💬 Открыть WhatsApp снова');

  /* ─── MERCADO PAGO BOX ───────────────────────────────────────── */
  t('💳 Pago de la consulta','💳 Consultation payment','💳 Pagamento da consulta','💳 Beratungszahlung','💳 Оплата консультации');
  t('💳 Pago de la consulta — $50.000',
    '💳 Consultation payment — $50,000 ARS',
    '💳 Pagamento da consulta — $50.000',
    '💳 Beratungszahlung — $50.000 ARS',
    '💳 Оплата консультации — $50,000');
  t('Podés abonar por Mercado Pago al alias:',
    'You can pay via Mercado Pago to the alias:',
    'Você pode pagar pelo Mercado Pago no alias:',
    'Sie können über Mercado Pago an den Alias zahlen:',
    'Вы можете оплатить через Mercado Pago по алиасу:');
  t('💸 Pagar $50.000 con Mercado Pago',
    '💸 Pay $50,000 ARS with Mercado Pago',
    '💸 Pagar $50.000 com Mercado Pago',
    '💸 $50.000 ARS mit Mercado Pago zahlen',
    '💸 Оплатить $50,000 через Mercado Pago');
  t('💸 Pagar con Mercado Pago',
    '💸 Pay with Mercado Pago',
    '💸 Pagar com Mercado Pago',
    '💸 Mit Mercado Pago zahlen',
    '💸 Оплатить через Mercado Pago');

  /* ── Título de página ────────────────────────────────────────── */
  var PAGE_TITLES = {
    es: 'Evaluá tu divorcio — Estudio Jurídico Basavilbaso',
    en: 'Evaluate your divorce — Basavilbaso Law Firm',
    pt: 'Avalie seu divórcio — Estúdio Jurídico Basavilbaso',
    de: 'Scheidung bewerten — Anwaltskanzlei Basavilbaso',
    ru: 'Оцените ваш развод — Юридическая фирма Basavilbaso'
  };

  /* ── Estado ──────────────────────────────────────────────────── */
  /* Compartimos la clave de localStorage con i18n.js del sitio principal */
  var currentLang = localStorage.getItem('basavilbaso_lang') || 'es';
  var nodeCache   = [];  /* { node, key, originalFull } */

  /* ── Cachear nodos de texto ──────────────────────────────────── */
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, IFRAME: 1, SVG: 1 };

  function cacheSubtree(root) {
    if (!root) return;
    if (root.nodeType === 3) { /* TEXT_NODE */
      var key = root.textContent.trim();
      if (key && T[key]) {
        /* Evitar duplicados (mismo nodo indexado dos veces) */
        for (var i = 0; i < nodeCache.length; i++) {
          if (nodeCache[i].node === root) return;
        }
        nodeCache.push({ node: root, key: key, originalFull: root.textContent });
      }
    } else if (root.nodeType === 1 && !SKIP_TAGS[root.tagName]) {
      for (var c = 0; c < root.childNodes.length; c++) cacheSubtree(root.childNodes[c]);
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
      var leading  = item.originalFull.match(/^(\s*)/)[1];
      var trailing = item.originalFull.match(/(\s*)$/)[1];
      item.node.textContent = leading + translated + trailing;
    }

    /* 2. Atributo lang del documento y título */
    document.documentElement.lang = lang;
    if (PAGE_TITLES[lang]) document.title = PAGE_TITLES[lang];

    /* 3. Actualizar botones del selector */
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

  /* ── MutationObserver — para contenido generado dinámicamente ── */
  /* (ej: el texto de evaluación en el paso 6 que aparece al avanzar) */
  function setupObserver() {
    if (!window.MutationObserver) return;
    var observer = new MutationObserver(function (mutations) {
      if (currentLang === 'es') return;
      var hasNew = false;
      for (var m = 0; m < mutations.length; m++) {
        var added = mutations[m].addedNodes;
        for (var n = 0; n < added.length; n++) {
          var prevLen = nodeCache.length;
          cacheSubtree(added[n]);
          if (nodeCache.length > prevLen) hasNew = true;
        }
      }
      if (hasNew) applyLang(currentLang);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* ── Inyectar selector de idioma ─────────────────────────────── */
  function injectSwitcher() {
    var style = document.createElement('style');
    style.textContent = [
      '.i18n-switcher{display:inline-flex;align-items:center;gap:3px;margin-left:10px;vertical-align:middle;flex-shrink:0}',
      '.i18n-btn{font:600 11px/1 inherit;letter-spacing:.06em;padding:4px 7px;border-radius:4px;',
        'border:1.5px solid rgba(128,128,128,.4);background:transparent;color:inherit;',
        'cursor:pointer;opacity:.6;transition:opacity .15s,background .15s,border-color .15s;white-space:nowrap}',
      '.i18n-btn:hover{opacity:1;border-color:rgba(128,128,128,.7)}',
      '.i18n-active{opacity:1!important;background:rgba(128,128,128,.18);border-color:rgba(128,128,128,.7)}',
      '@media(max-width:600px){',
        '.i18n-switcher{gap:2px;margin-left:6px}',
        '.i18n-btn{font-size:10px;padding:3px 5px}',
      '}'
    ].join('');
    document.head.appendChild(style);

    var switcher = document.createElement('div');
    switcher.className = 'i18n-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Seleccionar idioma / Select language');

    for (var i = 0; i < LANGS.length; i++) {
      (function (lang) {
        var btn = document.createElement('button');
        btn.className = 'i18n-btn' + (lang.code === currentLang ? ' i18n-active' : '');
        btn.setAttribute('data-lang', lang.code);
        btn.setAttribute('title', lang.name);
        btn.setAttribute('aria-label', lang.name);
        btn.setAttribute('aria-pressed', lang.code === currentLang ? 'true' : 'false');
        btn.setAttribute('type', 'button');
        btn.textContent = lang.label;
        btn.addEventListener('click', function () { applyLang(lang.code); });
        switcher.appendChild(btn);
      })(LANGS[i]);
    }

    /* Insertar al final del topbar (o junto al header como fallback) */
    var topbar = document.querySelector('.topbar');
    if (topbar) {
      topbar.appendChild(switcher);
    } else {
      var header = document.querySelector('header') || document.body;
      header.insertBefore(switcher, header.firstChild);
    }
  }

  /* ── Inicialización ──────────────────────────────────────────── */
  function init() {
    cacheSubtree(document.body);
    injectSwitcher();
    setupObserver();
    if (currentLang !== 'es') applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
