export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'meta.title': 'MG AlHabiba — Authorized MG Service Center | Madinaty, New Cairo',
    'meta.description':
      'Authorized MG service center in Madinaty, New Cairo. Genuine parts, certified technicians, full maintenance and repair for your MG vehicle.',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.book': 'Book Service',
    'hero.eyebrow': 'Authorized MG Service Center',
    'hero.title': 'Expert care for your MG.',
    'hero.titleAccent': 'In the heart of Madinaty.',
    'hero.subtitle':
      'Certified technicians. Genuine MG parts. Full diagnostics, maintenance, and bodywork — all under one roof.',
    'hero.ctaBook': 'Book a Service',
    'hero.ctaCall': 'Call Now',
    'hero.stat1.num': '10+',
    'hero.stat1.label': 'Years serving MG owners',
    'hero.stat2.num': '100%',
    'hero.stat2.label': 'Genuine MG parts',
    'hero.stat3.num': '24h',
    'hero.stat3.label': 'Service turnaround',
    'services.eyebrow': 'What we do',
    'services.title': 'Complete MG care, end to end.',
    'services.subtitle':
      'From routine maintenance to complex repairs, we handle every MG model with manufacturer-grade standards.',
    'services.item1.title': 'Periodic Maintenance',
    'services.item1.desc':
      'Scheduled servicing per MG factory specs. Oil, filters, fluids, brakes, full inspection.',
    'services.item2.title': 'Computer Diagnostics',
    'services.item2.desc':
      'OEM diagnostic equipment for accurate fault detection across all MG systems.',
    'services.item3.title': 'Engine & Transmission',
    'services.item3.desc':
      'Major and minor repairs by MG-certified technicians using genuine components.',
    'services.item4.title': 'Bodywork & Paint',
    'services.item4.desc':
      'Color-matched paint booths, dent repair, full collision restoration.',
    'services.item5.title': 'Electrical Systems',
    'services.item5.desc':
      'Wiring, batteries, ECU programming, infotainment, ADAS calibration.',
    'services.item6.title': 'Genuine Spare Parts',
    'services.item6.desc':
      'Original MG parts in stock. Warranty-backed. Fast delivery for rare items.',
    'about.eyebrow': 'About us',
    'about.title': 'Trusted by MG owners across Cairo.',
    'about.p1':
      'AlHabiba Auto is an authorized MG service partner serving Egypt for over a decade. Our Madinaty facility brings showroom-grade service closer to drivers in New Cairo and the eastern Cairo corridor.',
    'about.p2':
      'Every technician is MG-certified. Every part is original. Every job comes with a written warranty.',
    'about.point1': 'MG-certified master technicians',
    'about.point2': 'OEM diagnostic tools & equipment',
    'about.point3': 'Written warranty on every repair',
    'about.point4': 'Transparent pricing, no surprises',
    'gallery.eyebrow': 'Our facility',
    'gallery.title': 'Modern workshop. Manufacturer standards.',
    'gallery.subtitle':
      'Equipped to the same specification as MG dealer service centers worldwide.',
    'location.eyebrow': 'Find us',
    'location.title': 'Craft Zone, Madinaty.',
    'location.subtitle': 'Easy access from New Cairo, El Shorouk, and Cairo–Suez Road.',
    'location.address.label': 'Address',
    'location.address.value': 'Craft Zone, Madinaty, New Cairo, Egypt',
    'location.phone.label': 'Phone',
    'location.hours.label': 'Working hours',
    'location.hours.value': 'Sat – Thu: 9:00 AM – 7:00 PM',
    'location.directions': 'Get Directions',
    'booking.eyebrow': 'Book a service',
    'booking.title': 'Reserve your slot.',
    'booking.subtitle':
      'Tell us about your MG and what you need. We confirm by phone within one business hour.',
    'booking.name': 'Full name',
    'booking.phone': 'Phone number',
    'booking.model': 'MG model',
    'booking.modelPlaceholder': 'e.g. ZS, HS, RX5, 5, 6',
    'booking.year': 'Year',
    'booking.service': 'Service needed',
    'booking.serviceOptions.maintenance': 'Periodic maintenance',
    'booking.serviceOptions.diagnostics': 'Diagnostics',
    'booking.serviceOptions.repair': 'Repair',
    'booking.serviceOptions.body': 'Bodywork & paint',
    'booking.serviceOptions.other': 'Other',
    'booking.notes': 'Additional notes',
    'booking.submit': 'Send via WhatsApp',
    'booking.submitAlt': 'Or call us directly',
    'booking.waMessageTitle': 'New service request — MG AlHabiba',
    'footer.tagline': 'Authorized MG service center in Madinaty, New Cairo.',
    'footer.quickLinks': 'Quick links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'lang.toggle': 'العربية',
  },
  ar: {
    'meta.title': 'إم جي الحبيبة — مركز خدمة معتمد لسيارات MG | مدينتي، القاهرة الجديدة',
    'meta.description':
      'مركز خدمة معتمد لسيارات MG في مدينتي، القاهرة الجديدة. قطع غيار أصلية، فنيون معتمدون، صيانة وإصلاح كامل لسيارتك.',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.gallery': 'المعرض',
    'nav.location': 'الموقع',
    'nav.book': 'احجز خدمة',
    'hero.eyebrow': 'مركز خدمة MG المعتمد',
    'hero.title': 'عناية احترافية لسيارتك MG.',
    'hero.titleAccent': 'في قلب مدينتي.',
    'hero.subtitle':
      'فنيون معتمدون. قطع غيار MG أصلية. تشخيص شامل، صيانة، وإصلاح هيكل — كل ذلك تحت سقف واحد.',
    'hero.ctaBook': 'احجز خدمة',
    'hero.ctaCall': 'اتصل الآن',
    'hero.stat1.num': '+10',
    'hero.stat1.label': 'سنوات في خدمة ملاك MG',
    'hero.stat2.num': '100٪',
    'hero.stat2.label': 'قطع غيار MG أصلية',
    'hero.stat3.num': '24 س',
    'hero.stat3.label': 'وقت إنجاز الخدمة',
    'services.eyebrow': 'ماذا نقدم',
    'services.title': 'عناية كاملة لسيارتك MG.',
    'services.subtitle':
      'من الصيانة الدورية إلى الإصلاحات المعقدة، نتعامل مع كل طرازات MG وفق معايير المصنع.',
    'services.item1.title': 'الصيانة الدورية',
    'services.item1.desc':
      'صيانة حسب مواصفات مصنع MG. زيوت، فلاتر، سوائل، فرامل، فحص شامل.',
    'services.item2.title': 'التشخيص بالكمبيوتر',
    'services.item2.desc':
      'أجهزة تشخيص أصلية للكشف الدقيق عن أعطال جميع أنظمة MG.',
    'services.item3.title': 'المحرك وناقل الحركة',
    'services.item3.desc':
      'إصلاحات كبيرة وصغيرة بأيدي فنيين معتمدين باستخدام قطع أصلية.',
    'services.item4.title': 'السمكرة والدهان',
    'services.item4.desc':
      'كبائن دهان بمطابقة الألوان، إصلاح الخدوش، ترميم كامل بعد الحوادث.',
    'services.item5.title': 'الأنظمة الكهربائية',
    'services.item5.desc':
      'الأسلاك، البطاريات، برمجة ECU، أنظمة الترفيه، معايرة ADAS.',
    'services.item6.title': 'قطع غيار أصلية',
    'services.item6.desc':
      'قطع غيار MG أصلية متوفرة. مدعومة بضمان. توصيل سريع للقطع النادرة.',
    'about.eyebrow': 'من نحن',
    'about.title': 'موثوقون لدى ملاك MG في القاهرة.',
    'about.p1':
      'الحبيبة أوتو شريك خدمة MG معتمد في مصر منذ أكثر من عقد. فرع مدينتي يقرب الخدمة بمعايير الوكيل لسائقي القاهرة الجديدة وشرق القاهرة.',
    'about.p2':
      'كل فني معتمد من MG. كل قطعة أصلية. كل عمل مدعوم بضمان مكتوب.',
    'about.point1': 'فنيون معتمدون من MG',
    'about.point2': 'أدوات وأجهزة تشخيص أصلية',
    'about.point3': 'ضمان مكتوب على كل إصلاح',
    'about.point4': 'أسعار شفافة بدون مفاجآت',
    'gallery.eyebrow': 'منشأتنا',
    'gallery.title': 'ورشة حديثة. معايير المصنع.',
    'gallery.subtitle':
      'مجهزة بنفس مواصفات مراكز خدمة وكلاء MG حول العالم.',
    'location.eyebrow': 'موقعنا',
    'location.title': 'كرافت زون، مدينتي.',
    'location.subtitle': 'وصول سهل من القاهرة الجديدة، الشروق، وطريق القاهرة–السويس.',
    'location.address.label': 'العنوان',
    'location.address.value': 'كرافت زون، مدينتي، القاهرة الجديدة، مصر',
    'location.phone.label': 'الهاتف',
    'location.hours.label': 'مواعيد العمل',
    'location.hours.value': 'السبت – الخميس: 9:00 ص – 7:00 م',
    'location.directions': 'احصل على الاتجاهات',
    'booking.eyebrow': 'احجز خدمة',
    'booking.title': 'احجز موعدك.',
    'booking.subtitle':
      'أخبرنا عن سيارتك واحتياجك. سنتصل بك للتأكيد خلال ساعة عمل واحدة.',
    'booking.name': 'الاسم الكامل',
    'booking.phone': 'رقم الهاتف',
    'booking.model': 'طراز MG',
    'booking.modelPlaceholder': 'مثال: ZS، HS، RX5، 5، 6',
    'booking.year': 'سنة الصنع',
    'booking.service': 'الخدمة المطلوبة',
    'booking.serviceOptions.maintenance': 'صيانة دورية',
    'booking.serviceOptions.diagnostics': 'تشخيص',
    'booking.serviceOptions.repair': 'إصلاح',
    'booking.serviceOptions.body': 'سمكرة ودهان',
    'booking.serviceOptions.other': 'أخرى',
    'booking.notes': 'ملاحظات إضافية',
    'booking.submit': 'إرسال عبر واتساب',
    'booking.submitAlt': 'أو اتصل بنا مباشرة',
    'booking.waMessageTitle': 'طلب خدمة جديد — إم جي الحبيبة',
    'footer.tagline': 'مركز خدمة MG معتمد في مدينتي، القاهرة الجديدة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'تواصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'lang.toggle': 'English',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

export function getDir(lang: Lang): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return '/' + clean;
  return `/${lang}/${clean}`;
}
