export type Language = 'ru' | 'en' | 'uz';

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      portfolio: 'Портфолио',
      contact: 'Контакты',
      orderCall: 'Позвонить',
      market: 'Маркет'
    },
    hero: {
      tagline: 'EXTREME CONSTRUCTION OVERDRIVE',
      title: 'Создаем Бизнес.',
      desc: 'Полный цикл: от проектирования до установки. Мы создаем уникальные развлекательные пространства мирового уровня.',
      projects: 'Назначить встречу',
      about: 'Позвонить',
      scrollDown: 'Листайте вниз'
    },
    stats: {
      years: 'лет на рынке',
      types: 'Видов развлечений',
      projects: 'Успешных проектов',
      coverage: 'По всему Узбекистану'
    },
    about: {
      tagline: 'Ценность наших проектов',
      title: 'Влияние на развитие.',
      desc: 'Мы создаем не просто аттракционы, а комплексные решения, которые приносят пользу на всех уровнях.',
      reasons: [
        { 
          title: "Зиплайн и высотные аттракционы", 
          desc: "Скорость, высота и адреналин — зиплайн дарит ощущение полёта и свободы. Это один из самых привлекательных аттракционов для гостей, который формирует яркие эмоции и запоминающийся опыт." 
        },
        { 
          title: "Верёвочные парки", 
          desc: "Многоуровневые трассы разной сложности создают идеальное пространство для активного отдыха. Они подходят как для детей, так и для взрослых, развивая ловкость, координацию и уверенность в себе." 
        },
        { 
          title: "Скалодромы", 
          desc: "Современные скалодромы объединяют спорт и развлечение. Это безопасная среда для тренировки силы, выносливости и преодоления себя — как для новичков, так и для опытных участников." 
        }
      ],
      button: 'ПОЗВОНИТЬ СЕЙЧАС',
      partners: ["Чертежи прошлых работ", "Гигантские качели", "Стена для скалолазания", "Стеклянный мост", "Ice City", "Tashkent City"]
    },
    portfolio: {
      title: 'Реализуем Масштабные Идеи.',
      desc: '',
      more: 'Подробнее'
    },
    cableCar: {
      title: 'Канатные Дороги нового поколения.',
      desc: 'Мы проектируем и строим современные канатные системы, которые объединяют города и горы. Экологичность, безопасность и футуристичный дизайн.',
      features: [
        { title: "Экстремальные маршруты", desc: "Зиплайн и высотные трассы дарят ощущение скорости и свободы, создавая яркие эмоции и незабываемый опыт для каждого посетителя." },
        { title: "Многоуровневые трассы", desc: "Верёвочные парки с различной сложностью подходят для всех возрастов, развивая координацию, ловкость и уверенность." },
        { title: "Активный отдых", desc: "Скалодромы и спортивные зоны объединяют физическую активность и развлечения, позволяя гостям испытать себя и получить новые впечатления." }
      ]
    },
    cta: {
      title: 'Начните свой',
      titleAccent: 'Успешный Проект.',
      desc: 'Мы помогаем городам, бизнесу и людям расти, создавая уникальные точки притяжения.',
      button: 'ПОЗВОНИТЬ СЕЙЧАС'
    },
    footer: {
      desc: 'Международная компания, специализирующаяся на экстремальных аттракционах. Мы обеспечиваем проектирование парков развлечений, производство и монтаж аттракционов под ключ. Лидеры в сфере создания тематических парков и девелопмента индустрии развлечений.',
      navTitle: 'НАВИГАЦИЯ',
      contactTitle: 'Как нас найти',
      address: 'г. Ташкент, ул. Лабзак, 12/1, ор-р парк Анхор',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Лицензионное соглашение',
      advantagesTitle: 'Наши преимущества',
      advantages: [
        "Официальная гарантия на все оборудование",
        "Сертифицированное производство",
        "Техническая поддержка 24/7",
        "UzamuseECO сертифицированный",
        "Инженерные расчёты"
      ]
    },
    auth: {
      title: 'Вход в систему',
      desc: 'Войдите через Google, чтобы получить полный доступ к нашим материалам.',
      googleBtn: 'Войти через Google',
      guestBtn: 'Продолжить как гость'
    },
    contactModal: {
      title: 'ПОДАТЬ ЗАЯВКУ',
      subtitle: 'Заполните форму и наш специалист свяжется с вами в ближайшее время для подробного обсуждения вашего проекта',
      nameLabel: 'Имя *',
      namePlaceholder: 'Ваше имя',
      phoneLabel: 'Телефон *',
      emailLabel: 'Email',
      companyLabel: 'Компания',
      companyPlaceholder: 'Название компании',
      serviceLabel: 'Интересующая услуга',
      servicePlaceholder: 'Выберите услугу',
      services: [
        "Аттракционы",
        "Проектирование",
        "Сервисное обслуживание"
      ],
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Расскажите подробнее о вашем проекте...',
      submit: 'ОТПРАВИТЬ ЗАЯВКУ',
      success: 'Спасибо за доверие к нам! Мы свяжемся с вами в ближайшее время.',
      close: 'Закрыть',
      thankYouLetter: {
        title: 'БЛАГОДАРСТВЕННОЕ ПИСЬМО',
        greeting: 'Уважаемый клиент,',
        body: 'Мы искренне благодарим вас за выбор Uzamuse Eco. Ваша заявка принята и уже находится в обработке. Мы ценим ваше доверие и гарантируем высокое качество исполнения вашего проекта.',
        closing: 'С уважением, команда Uzamuse Eco',
        signature: 'Дирекция Uzamuse Eco'
      }
    },
    categories: {
      all: 'Все',
      'Full Body Harness': 'Полная страховка',
      'Half Body Harness': 'Поясная страховка',
      'Children Harness': 'Детская страховка',
      Helmet: 'Каски',
      Carabiner: 'Карабины',
      Pulley: 'Блоки и ролики',
      Ascender: 'Зажимы и спусковые',
      Rope: 'Веревки',
      Bags: 'Сумки и чехлы',
      Anchors: 'Анкеры и питоны',
      Shoes: 'Обувь',
      Accessories: 'Аксессуары',
      'Ice Gear': 'Ледовое снаряжение'
    },
    projects: [
      {
        id: 1,
        name: "Чертежи прошлых работ",
        category: "Проектирование",
        image: "https://lh3.googleusercontent.com/d/1Z6YuD7jvI-KTcSIxi1mz1-jtTYg-A01b",
        description: "Детальные инженерные схемы и архитектурные решения реализованных объектов.",
        moreText: "Чертежи прошлых работ"
      },
      {
        id: 2,
        name: "Гигантские качели",
        category: "Аттракционы",
        image: "https://lh3.googleusercontent.com/d/14Z9b3X8Wb8ExRLd-Aq8GVXLRv4pnZudR",
        description: "Экстремальные высотные качели, обеспечивающие незабываемые ощущения и полную безопасность.",
        moreText: "Гигантские качели"
      },
      {
        id: 3,
        name: "Стена для скалолазания",
        category: "Активный отдых",
        image: "https://lh3.googleusercontent.com/d/1lN-eeyjzx1m2GJqQeb3JqgMY7Mp4HLdL",
        description: "Профессиональные скалодромы различной сложности для тренировок и развлечений.",
        moreText: "Стена для скалолазания"
      },
      {
        id: 4,
        name: "Стеклянный мост",
        category: "Инженерные сооружения",
        image: "https://lh3.googleusercontent.com/d/1nILprq0nErIS2xnLSKqRsb0VrVI5HcOz",
        description: "Прозрачные пешеходные конструкции на большой высоте с использованием сверхпрочного стекла.",
        moreText: "Стеклянный мост"
      }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      orderCall: 'Call Now',
      market: 'Market'
    },
    hero: {
      tagline: 'EXTREME CONSTRUCTION OVERDRIVE',
      title: 'Creating Business.',
      desc: 'Full cycle: from design to installation. We create unique world-class entertainment spaces.',
      projects: 'Schedule a Meeting',
      about: 'Call Now',
      scrollDown: 'Scroll Down'
    },
    stats: {
      years: 'Years in Market',
      types: 'Types of Entertainment',
      projects: 'Successful Projects',
      coverage: 'Across Uzbekistan'
    },
    about: {
      tagline: 'Value of Our Projects',
      title: 'Impact on Development.',
      desc: 'We create more than just attractions; we create comprehensive solutions that benefit all levels.',
      reasons: [
        { 
          title: "Ziplines and High-Altitude Attractions", 
          desc: "Speed, height, and adrenaline — ziplines give the feeling of flight and freedom. This is one of the most attractive attractions for guests, forming vivid emotions and a memorable experience." 
        },
        { 
          title: "Rope Parks", 
          desc: "Multilevel tracks of varying difficulty create an ideal space for active recreation. They are suitable for both children and adults, developing agility, coordination, and self-confidence." 
        },
        { 
          title: "Climbing Walls", 
          desc: "Modern climbing walls combine sport and entertainment. It is a safe environment for training strength, endurance, and overcoming oneself — for both beginners and experienced participants." 
        }
      ],
      button: 'CALL NOW',
      partners: ["Past Work Drawings", "Giant Swings", "Climbing Wall", "Glass Bridge", "Ice City", "Tashkent City"]
    },
    portfolio: {
      title: 'Realizing Large-Scale Ideas.',
      desc: '',
      more: 'Learn More'
    },
    cableCar: {
      title: 'Next-Generation Cable Cars.',
      desc: 'We design and build modern cable systems that connect cities and mountains. Eco-friendliness, safety, and futuristic design.',
      features: [
        { title: "Extreme Routes", desc: "Ziplines and high-altitude tracks give a sense of speed and freedom, creating vivid emotions and an unforgettable experience for every visitor." },
        { title: "Multilevel Tracks", desc: "Rope parks with varying difficulty are suitable for all ages, developing coordination, agility, and confidence." },
        { title: "Active Recreation", desc: "Climbing walls and sports zones combine physical activity and entertainment, allowing guests to test themselves and get new impressions." }
      ]
    },
    cta: {
      title: 'Start Your',
      titleAccent: 'Successful Project.',
      desc: 'We help cities, businesses, and people grow by creating unique points of attraction.',
      button: 'CALL NOW'
    },
    footer: {
      desc: 'International company specializing in extreme attractions. We provide amusement park design, manufacturing, and turnkey attraction installation. Leaders in theme park creation and entertainment industry development.',
      navTitle: 'NAVIGATION',
      contactTitle: 'How to find us',
      address: 'Tashkent city, Labzak str., 12/1, landmark: Anhor Park',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'License Agreement',
      advantagesTitle: 'Our Advantages',
      advantages: [
        "Official warranty on all equipment",
        "Certified production",
        "Technical support 24/7",
        "UzamuseECO certified",
        "Engineering calculations"
      ]
    },
    auth: {
      title: 'Sign In',
      desc: 'Sign in with Google to get full access to our materials.',
      googleBtn: 'Sign in with Google',
      guestBtn: 'Continue as guest'
    },
    contactModal: {
      title: 'SUBMIT APPLICATION',
      subtitle: 'Fill out the form and our specialist will contact you shortly for a detailed discussion of your project',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone *',
      emailLabel: 'Email',
      companyLabel: 'Company',
      companyPlaceholder: 'Company name',
      serviceLabel: 'Interested service',
      servicePlaceholder: 'Select service',
      services: [
        "Attractions",
        "Design",
        "Service maintenance"
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us more about your project...',
      submit: 'SEND REQUEST',
      success: 'Thank you for your trust! We will contact you shortly.',
      close: 'Close',
      thankYouLetter: {
        title: 'THANK YOU LETTER',
        greeting: 'Dear client,',
        body: 'We sincerely thank you for choosing Uzamuse Eco. Your request has been received and is already being processed. We value your trust and guarantee high quality of your project execution.',
        closing: 'Best regards, Uzamuse Eco team',
        signature: 'Uzamuse Eco Management'
      }
    },
    categories: {
      all: 'All',
      'Full Body Harness': 'Full Body Harness',
      'Half Body Harness': 'Half Body Harness',
      'Children Harness': 'Children Harness',
      Helmet: 'Helmets',
      Carabiner: 'Carabiners',
      Pulley: 'Pulleys',
      Ascender: 'Ascenders',
      Rope: 'Ropes',
      Bags: 'Bags',
      Anchors: 'Anchors',
      Shoes: 'Shoes',
      Accessories: 'Accessories',
      'Ice Gear': 'Ice Gear'
    },
    projects: [
      {
        id: 1,
        name: "Past Work Drawings",
        category: "Engineering",
        image: "https://lh3.googleusercontent.com/d/1Z6YuD7jvI-KTcSIxi1mz1-jtTYg-A01b",
        description: "Detailed engineering schemes and architectural solutions of completed objects.",
        moreText: "Drawings"
      },
      {
        id: 2,
        name: "Giant Swings",
        category: "Attractions",
        image: "https://lh3.googleusercontent.com/d/14Z9b3X8Wb8ExRLd-Aq8GVXLRv4pnZudR",
        description: "Extreme high-altitude swings providing unforgettable sensations and full safety.",
        moreText: "Giant Swings"
      },
      {
        id: 3,
        name: "Climbing Wall",
        category: "Active Recreation",
        image: "https://lh3.googleusercontent.com/d/1lN-eeyjzx1m2GJqQeb3JqgMY7Mp4HLdL",
        description: "Professional climbing walls of varying difficulty for training and entertainment.",
        moreText: "Climbing Wall"
      },
      {
        id: 4,
        name: "Glass Bridge",
        category: "Engineering Structures",
        image: "https://lh3.googleusercontent.com/d/1nILprq0nErIS2xnLSKqRsb0VrVI5HcOz",
        description: "Transparent pedestrian structures at high altitudes using ultra-strong glass.",
        moreText: "Glass Bridge"
      }
    ]
  },
  uz: {
    nav: {
      home: 'Asosiy',
      about: 'Kompaniya haqida',
      portfolio: 'Portfolio',
      contact: 'Kontaktlar',
      orderCall: 'Qo\'ng\'iroq qilish',
      market: 'Market'
    },
    hero: {
      tagline: 'EXTREME CONSTRUCTION OVERDRIVE',
      title: 'Biznes Yaratamiz.',
      desc: 'To\'liq tsikl: loyihalashdan o\'rnatishgacha. Biz jahon darajasidagi noyob ko\'ngilochar maydonlarni yaratamiz.',
      projects: 'Uchrashuv tayinlash',
      about: 'Qo\'ng\'iroq qilish',
      scrollDown: 'Pastga tushiring'
    },
    stats: {
      years: 'Bozordagi yillar',
      types: 'Ko\'ngilochar turlari',
      projects: 'Muvaffaqiyatli loyihalar',
      coverage: 'Butun O\'zbekiston bo\'ylab'
    },
    about: {
      tagline: 'Loyihalarimiz qiymati',
      title: 'Rivojlanishga ta\'siri.',
      desc: 'Biz shunchaki attraksionlar emas, balki barcha darajalarda foyda keltiradigan kompleks yechimlarni yaratamiz.',
      reasons: [
        { 
          title: "Zipline va balandlik attraksionlari", 
          desc: "Tezlik, balandlik va adrenalin — ziplayn parvoz va erkinlik hissini beradi. Bu mehmonlar uchun eng jozibali attraksionlardan biri bo'lib, yorqin his-tuyg'ular va unutilmas tajriba shakllantiradi." 
        },
        { 
          title: "Arqonli parklar", 
          desc: "Turli qiyinchilikdagi ko'p darajali trassalar faol dam olish uchun ideal maydon yaratadi. Ular bolalar va kattalar uchun mos keladi, chaqqonlik, muvofiqlashtirish va o'ziga bo'lgan ishonchni rivojlantiradi." 
        },
        { 
          title: "Skalodromlar", 
          desc: "Zamonaviy skalodromlar sport va ko'ngilochar tadbirlarni birlashtiradi. Bu kuch, chidamlilikni mashq qilish va o'zini engish uchun xavfsiz muhit — ham yangi boshlanuvchilar, ham tajribali ishtirokchilar uchun." 
        }
      ],
      button: 'HOZIR QO\'NG\'IROQ QILISH',
      partners: ["O'tgan ishlarning chizmalari", "Gigant kachali", "Qoyaga chiqish devori", "Shisha ko'prik", "Ice City", "Tashkent City"]
    },
    portfolio: {
      title: 'Yirik g\'oyalarni amalga oshiramiz.',
      desc: '',
      more: 'Batafsil'
    },
    cableCar: {
      title: 'Yangi avlod kanat yo\'llari.',
      desc: 'Biz shaharlar va tog\'larni birlashtiradigan zamonaviy kanat tizimlarini loyihalashtiramiz va quramiz. Ekologik tozalik, xavfsizlik va futuristik dizayn.',
      features: [
        { title: "Ekstremal yo'nalishlar", desc: "Ziplayn va balandlik trassalari tezlik va erkinlik hissini beradi, har bir tashrif buyuruvchi uchun yorqin his-tuyg'ular va unutilmas tajriba yaratadi." },
        { title: "Ko'p darajali trassalar", desc: "Turli murakkablikdagi arqonli parklar barcha yoshdagilar uchun mos keladi, muvofiqlashtirish, chaqqonlik va ishonchni rivojlantiradi." },
        { title: "Faol dam olish", desc: "Skalodromlar va sport zonalari jismoniy faollik va o'yin-kulgini birlashtiradi, mehmonlarga o'zlarini sinab ko'rish va yangi taassurotlar olish imkonini beradi." }
      ]
    },
    cta: {
      title: 'O\'z',
      titleAccent: 'Muvaffaqiyatli Loyihangizni Boshlang.',
      desc: 'Biz noyob diqqatga sazovor joylarni yaratish orqali shaharlar, biznes va odamlarning o\'sishiga yordam beramiz.',
      button: 'HOZIR QO\'NG\'IROQ QILISH'
    },
    footer: {
      desc: 'Ekstremal attraksionlarga ixtisoslashgan xalqaro kompaniya. Biz ko\'ngilochar bog\'larni loyihalash, attraksionlarni ishlab chiqarish va tayyor holda o\'rnatishni ta\'minlaymiz. Tematik bog\'lar yaratish va ko\'ngilochar sanoat develiomenti sohasida yetakchimiz.',
      navTitle: 'NAVIGATSIYA',
      contactTitle: 'Bizni qanday topish mumkin',
      address: 'Toshkent sh., Labzak ko\'ch., 12/1, mo\'ljal: Anhor bog\'i',
      rights: 'Barcha huquqlar himoyalangan.',
      privacy: 'Maxfiylik siyosati',
      terms: 'Litsenziya shartnomasi',
      advantagesTitle: 'Bizning afzalliklarimiz',
      advantages: [
        "Barcha uskunalarga rasmiy kafolat",
        "Sertifikatlangan ishlab chiqarish",
        "24/7 texnik yordam",
        "UzamuseECO sertifikatlangan",
        "Muhandislik hisob-kitoblari"
      ]
    },
    auth: {
      title: 'Tizimga kirish',
      desc: 'Materiallarimizga to\'liq kirish uchun Google orqali kiring.',
      googleBtn: 'Google orqali kirish',
      guestBtn: 'Mehmon sifatida davom etish'
    },
    contactModal: {
      title: 'SO\'ROV YUBORISH',
      subtitle: 'Shaklni to\'ldiring va mutaxassisimiz loyihangizni batafsil muhokama qilish uchun tez orada siz bilan bog\'lanadi',
      nameLabel: 'Ism *',
      namePlaceholder: 'Ismingiz',
      phoneLabel: 'Telefon *',
      emailLabel: 'Email',
      companyLabel: 'Kompaniya',
      companyPlaceholder: 'Kompaniya nomi',
      serviceLabel: 'Qiziqtirgan xizmat',
      servicePlaceholder: 'Xizmatni tanlang',
      services: [
        "Attraksionlar",
        "Loyihalash",
        "Servis xizmati"
      ],
      messageLabel: 'Xabar',
      messagePlaceholder: 'Loyihangiz haqida batafsil gapirib bering...',
      submit: 'SO\'ROV YUBORISH',
      success: 'Bizga bo\'lgan ishonchingiz uchun rahmat! Tez orada siz bilan bog\'lanamiz.',
      close: 'Yopish',
      thankYouLetter: {
        title: 'MINNATDORCHILIK XATI',
        greeting: 'Hurmatli mijoz,',
        body: 'Uzamuse Eco-ni tanlaganingiz uchun sizga chin dildan minnatdorchilik bildiramiz. Sizning so\'rovingiz qabul qilindi va allaqachon qayta ishlanmoqda. Biz sizning ishonchingizni qadrlaymiz va loyihangiz yuqori sifatda bajarilishini kafolatlaymiz.',
        closing: 'Hurmat bilan, Uzamuse Eco jamoasi',
        signature: 'Uzamuse Eco rahbariyati'
      }
    },
    categories: {
      all: 'Barchasi',
      'Full Body Harness': 'To\'liq tana sug\'urtasi',
      'Half Body Harness': 'Yarim tana sug\'urtasi',
      'Children Harness': 'Bolalar sug\'urtasi',
      Helmet: 'Kaskalar',
      Carabiner: 'Karabinlar',
      Pulley: 'Bloklar va roliklar',
      Ascender: 'Qisqichlar va tushish moslamalari',
      Rope: 'Arqonlar',
      Bags: 'Sumkalar va g\'iloflar',
      Anchors: 'Ankerlar va pitonlar',
      Shoes: 'Oyoq kiyimlar',
      Accessories: 'Aksessuarlar',
      'Ice Gear': 'Muz uskunalari'
    },
    projects: [
      {
        id: 1,
        name: "O'tgan ishlarning chizmalari",
        category: "Muhandislik",
        image: "https://lh3.googleusercontent.com/d/1Z6YuD7jvI-KTcSIxi1mz1-jtTYg-A01b",
        description: "Amalga oshirilgan ob'ektlarning batafsil muhandislik sxemalari va me'moriy yechimlari.",
        moreText: "Chizmalar"
      },
      {
        id: 2,
        name: "Gigant kachali",
        category: "Attraksionlar",
        image: "https://lh3.googleusercontent.com/d/14Z9b3X8Wb8ExRLd-Aq8GVXLRv4pnZudR",
        description: "Unutilmas tuyg'ular va to'liq xavfsizlikni ta'minlaydigan ekstremal balandlikdagi arg'imchoqlar.",
        moreText: "Gigant kachali"
      },
      {
        id: 3,
        name: "Qoyaga chiqish devori",
        category: "Faol dam olish",
        image: "https://lh3.googleusercontent.com/d/1lN-eeyjzx1m2GJqQeb3JqgMY7Mp4HLdL",
        description: "Mashg'ulotlar va o'yin-kulgi uchun har xil qiyinchilikdagi professional skalerodromlar.",
        moreText: "Qoyaga chiqish devori"
      },
      {
        id: 4,
        name: "Shisha ko'prik",
        category: "Muhandislik inshootlari",
        image: "https://lh3.googleusercontent.com/d/1nILprq0nErIS2xnLSKqRsb0VrVI5HcOz",
        description: "O'ta bardoshli shishadan foydalangan holda katta balandlikdagi shaffof piyodalar konstruktsiyalari.",
        moreText: "Shisha ko'prik"
      }
    ]
  }
};
