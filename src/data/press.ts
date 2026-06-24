// Press & Media — coverage list + page chrome, all 6 locales (DC-474).
// Single source of truth: constant per-item meta (outlet/year/link/image stays the
// same across locales) merged with per-locale strings (heading/pull/alt). Page chrome
// (eyebrow, headings, CTA labels, meta) lives in PAGE below.
//
// NO uses the publications' real Norwegian headlines verbatim. EN is canonical; the
// other locales are first-draft translations that still need native sign-off via
// Simon's translation-review SOP (stockifi-agents/website-copy/translation-review-sop.md).
//
// Order is reverse-chronological (newest first).

export type Locale = 'en' | 'no' | 'da' | 'sv' | 'nl' | 'de';
const LOCALES: Locale[] = ['en', 'no', 'da', 'sv', 'nl', 'de'];

export interface PressMeta {
  id: string;
  outlet: string;
  year: string;
  href: string;
  /** Self-hosted thumbnail under /media/press. Undefined → component renders a placeholder. */
  image?: string;
}

// NOTE (V, Jun 24): Horecanytt has no distinct thumbnail — its og:image is the exact same
// founder photo Reiseliv1 (2025) uses. V confirmed the duplicate is fine, so it intentionally
// reuses that image. ADC Media uses Simon's press photo from the same shoot (V-supplied).
export const PRESS_META: PressMeta[] = [
  { id: 'adcmedia-2025', outlet: 'ADC Media', year: '2025', href: 'https://adcmedia.prenly.com/p/tema/2025-09-30/r/5/8-9/1779/2007121', image: '/media/press/adcmedia-2025.jpg' },
  { id: 'reiseliv1-2025', outlet: 'Reiseliv1', year: '2025', href: 'https://www.reiseliv1.no/restaurant/de-fleste-restauranter-taper-2030-av-fortjenesten/1345939', image: '/media/press/reiseliv1-2025.jpg' },
  { id: 'horecanytt-2025', outlet: 'Horecanytt', year: '2025', href: 'https://www.horecanytt.no/august-2025-produkter-restaurant/gir-restaurantbransjen-kontroll/1426332', image: '/media/press/reiseliv1-2025.jpg' },
  { id: 'reiseliv1-2023', outlet: 'Reiseliv1', year: '2023', href: 'https://reiseliv1.no/restaurant/2023/effektiv-lagerstyring-barer-og-restauranter', image: '/media/press/reiseliv1-2023.jpg' },
  { id: 'shifter-2023', outlet: 'Shifter', year: '2023', href: 'https://www.shifter.no/nyheter/i-2021-mikset-grnderne-aperol-spritz-til-finanseliten-na-skalerer-saas-startupen-i-europa/285416', image: '/media/press/shifter-2023.jpg' },
];

interface ItemStrings { heading: string; pull: string; alt: string }

const ITEM_STRINGS: Record<Locale, Record<string, ItemStrings>> = {
  en: {
    'adcmedia-2025': {
      heading: 'Stockifi in ADC Media',
      pull: 'ADC Media features Stockifi and its work helping hospitality operators take control of food cost and margins.',
      alt: 'Stockifi coverage in ADC Media',
    },
    'reiseliv1-2025': {
      heading: 'Most restaurants lose 20-30% of their profit',
      pull: 'Reiseliv1 reports on how Stockifi, now serving more than 350 venues, helps restaurants recover revenue lost to supplier price increases, overuse, and waste.',
      alt: 'Stockifi co-founders Sime Buzeca and Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'Giving the restaurant industry control',
      pull: 'Horecanytt features co-founders Sime Buzeca and Simon Burman on how Stockifi gives restaurants control over costs, waste, and supplier prices.',
      alt: 'Stockifi co-founders featured in Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Efficient inventory management for bars and restaurants',
      pull: 'Reiseliv1 looks at how Stockifi gives bars and restaurants control over commodity costs and correct pricing.',
      alt: 'Stockifi co-founders reviewing data on a laptop',
    },
    'shifter-2023': {
      heading: 'The bartenders scaling Stockifi across Europe',
      pull: 'Shifter profiles the two former bartenders behind Stockifi and how the company grew its revenue and expanded across the Nordics.',
      alt: 'An Aperol Spritz beside the Stockifi co-founders',
    },
  },
  no: {
    'adcmedia-2025': {
      heading: 'Stockifi i ADC Media',
      pull: 'ADC Media omtaler Stockifi og arbeidet med å hjelpe utelivsbransjen med å få kontroll på varekost og marginer.',
      alt: 'Omtale av Stockifi i ADC Media',
    },
    'reiseliv1-2025': {
      heading: '– De fleste restauranter taper 20–30 % av fortjenesten',
      pull: 'Reiseliv1 omtaler hvordan Stockifi, som nå betjener over 350 steder, hjelper restauranter med å hente tilbake inntekter tapt til prisøkninger, overforbruk og svinn.',
      alt: 'Gründerne av Stockifi, Sime Buzeca og Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'Gir restaurantbransjen kontroll',
      pull: 'Horecanytt møter gründerne Sime Buzeca og Simon Burman om hvordan Stockifi gir restauranter kontroll over kostnader, svinn og leverandørpriser.',
      alt: 'Gründerne av Stockifi omtalt i Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Effektiv lagerstyring for barer og restauranter',
      pull: 'Reiseliv1 ser på hvordan Stockifi gir barer og restauranter kontroll over varekostnader og riktig prissetting.',
      alt: 'Gründerne av Stockifi gjennomgår data på en laptop',
    },
    'shifter-2023': {
      heading: 'I 2021 mikset gründerne Aperol Spritz til finanseliten – nå skalerer SaaS-startupen i Europa',
      pull: 'Shifter forteller historien om de to tidligere bartenderne bak Stockifi, og hvordan selskapet økte omsetningen og vokste i Norden.',
      alt: 'En Aperol Spritz ved siden av gründerne av Stockifi',
    },
  },
  da: {
    'adcmedia-2025': {
      heading: 'Stockifi i ADC Media',
      pull: 'ADC Media omtaler Stockifi og arbejdet med at hjælpe restaurationsbranchen med at få styr på råvareomkostninger og marginer.',
      alt: 'Omtale af Stockifi i ADC Media',
    },
    'reiseliv1-2025': {
      heading: 'De fleste restauranter taber 20-30 % af fortjenesten',
      pull: 'Reiseliv1 fortæller, hvordan Stockifi, der nu betjener over 350 steder, hjælper restauranter med at hente indtægter tilbage, som tabes til prisstigninger, overforbrug og spild.',
      alt: 'Stockifis stiftere Sime Buzeca og Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'Giver restaurantbranchen kontrol',
      pull: 'Horecanytt møder stifterne Sime Buzeca og Simon Burman om, hvordan Stockifi giver restauranter kontrol over omkostninger, spild og leverandørpriser.',
      alt: 'Stockifis stiftere omtalt i Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Effektiv lagerstyring for barer og restauranter',
      pull: 'Reiseliv1 ser på, hvordan Stockifi giver barer og restauranter kontrol over råvareomkostninger og korrekt prissætning.',
      alt: 'Stockifis stiftere gennemgår data på en bærbar',
    },
    'shifter-2023': {
      heading: 'Bartenderne, der skalerer Stockifi i Europa',
      pull: 'Shifter fortæller historien om de to tidligere bartendere bag Stockifi, og hvordan virksomheden øgede omsætningen og voksede i Norden.',
      alt: 'En Aperol Spritz ved siden af Stockifis stiftere',
    },
  },
  sv: {
    'adcmedia-2025': {
      heading: 'Stockifi i ADC Media',
      pull: 'ADC Media uppmärksammar Stockifi och arbetet med att hjälpa besöksnäringen att få kontroll på råvarukostnader och marginaler.',
      alt: 'Stockifi uppmärksammat i ADC Media',
    },
    'reiseliv1-2025': {
      heading: 'De flesta restauranger förlorar 20-30 % av vinsten',
      pull: 'Reiseliv1 berättar hur Stockifi, som nu betjänar över 350 verksamheter, hjälper restauranger att återta intäkter som går förlorade till prishöjningar, överanvändning och svinn.',
      alt: 'Stockifis grundare Sime Buzeca och Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'Ger restaurangbranschen kontroll',
      pull: 'Horecanytt träffar grundarna Sime Buzeca och Simon Burman om hur Stockifi ger restauranger kontroll över kostnader, svinn och leverantörspriser.',
      alt: 'Stockifis grundare uppmärksammade i Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Effektiv lagerstyrning för barer och restauranger',
      pull: 'Reiseliv1 tittar på hur Stockifi ger barer och restauranger kontroll över råvarukostnader och rätt prissättning.',
      alt: 'Stockifis grundare går igenom data på en laptop',
    },
    'shifter-2023': {
      heading: 'Bartendrarna som skalar Stockifi i Europa',
      pull: 'Shifter porträtterar de två tidigare bartendrarna bakom Stockifi och hur bolaget ökade omsättningen och växte i Norden.',
      alt: 'En Aperol Spritz bredvid Stockifis grundare',
    },
  },
  nl: {
    'adcmedia-2025': {
      heading: 'Stockifi in ADC Media',
      pull: 'ADC Media belicht Stockifi en zijn werk om horecaondernemers grip te geven op inkoopkosten en marges.',
      alt: 'Stockifi belicht in ADC Media',
    },
    'reiseliv1-2025': {
      heading: 'De meeste restaurants verliezen 20-30% van hun winst',
      pull: 'Reiseliv1 bericht hoe Stockifi, dat inmiddels meer dan 350 zaken bedient, restaurants helpt omzet terug te winnen die verloren gaat aan prijsstijgingen, overgebruik en verspilling.',
      alt: 'Stockifi-oprichters Sime Buzeca en Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'De horeca controle geven',
      pull: 'Horecanytt spreekt met oprichters Sime Buzeca en Simon Burman over hoe Stockifi restaurants grip geeft op kosten, verspilling en leveranciersprijzen.',
      alt: 'Stockifi-oprichters belicht in Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Efficiënt voorraadbeheer voor bars en restaurants',
      pull: 'Reiseliv1 bekijkt hoe Stockifi bars en restaurants grip geeft op inkoopkosten en de juiste prijsstelling.',
      alt: 'Stockifi-oprichters bekijken data op een laptop',
    },
    'shifter-2023': {
      heading: 'De barmannen die Stockifi door Europa laten groeien',
      pull: 'Shifter portretteert de twee voormalige barmannen achter Stockifi en hoe het bedrijf zijn omzet liet groeien en uitbreidde in de Noordse landen.',
      alt: 'Een Aperol Spritz naast de Stockifi-oprichters',
    },
  },
  de: {
    'adcmedia-2025': {
      heading: 'Stockifi in ADC Media',
      pull: 'ADC Media stellt Stockifi und seine Arbeit vor, mit der Gastronomiebetriebe Warenkosten und Margen in den Griff bekommen.',
      alt: 'Stockifi in ADC Media',
    },
    'reiseliv1-2025': {
      heading: 'Die meisten Restaurants verlieren 20-30 % ihres Gewinns',
      pull: 'Reiseliv1 berichtet, wie Stockifi, das inzwischen über 350 Betriebe betreut, Restaurants hilft, Umsatzverluste durch Preiserhöhungen, Mehrverbrauch und Verschwendung zurückzugewinnen.',
      alt: 'Stockifi-Gründer Sime Buzeca und Simon Burman',
    },
    'horecanytt-2025': {
      heading: 'Der Gastronomie die Kontrolle geben',
      pull: 'Horecanytt spricht mit den Gründern Sime Buzeca und Simon Burman darüber, wie Stockifi Restaurants Kontrolle über Kosten, Verschwendung und Lieferantenpreise gibt.',
      alt: 'Stockifi-Gründer in Horecanytt',
    },
    'reiseliv1-2023': {
      heading: 'Effiziente Bestandsführung für Bars und Restaurants',
      pull: 'Reiseliv1 zeigt, wie Stockifi Bars und Restaurants Kontrolle über Warenkosten und die richtige Preisgestaltung gibt.',
      alt: 'Stockifi-Gründer prüfen Daten am Laptop',
    },
    'shifter-2023': {
      heading: 'Die Barkeeper, die Stockifi durch Europa skalieren',
      pull: 'Shifter porträtiert die beiden ehemaligen Barkeeper hinter Stockifi und wie das Unternehmen seinen Umsatz steigerte und in den nordischen Märkten wuchs.',
      alt: 'Ein Aperol Spritz neben den Stockifi-Gründern',
    },
  },
};

export interface PressItem extends PressMeta, ItemStrings {}

export function getPressItems(locale: string): PressItem[] {
  const l = (LOCALES.includes(locale as Locale) ? locale : 'en') as Locale;
  return PRESS_META.map((m) => ({ ...m, ...(ITEM_STRINGS[l][m.id] ?? ITEM_STRINGS.en[m.id]) }));
}

export interface PressPageStrings {
  eyebrow: string;
  heading: string;
  subhead: string;
  readArticle: string;
  inquiriesHeading: string;
  inquiriesBody: string;
  contactLabel: string;
  brandKitLabel: string;
  metaTitle: string;
  metaDescription: string;
}

const PAGE: Record<Locale, PressPageStrings> = {
  en: {
    eyebrow: 'Press & Media',
    heading: 'Stockifi in the press',
    subhead: 'Coverage of how Stockifi helps restaurants, bars, and hotels take control of their food cost.',
    readArticle: 'Read article',
    inquiriesHeading: 'Media & press inquiries',
    inquiriesBody: 'Writing about Stockifi or want to feature us? Get in touch, and download our brand assets below.',
    contactLabel: 'Email us',
    brandKitLabel: 'Download brand kit',
    metaTitle: 'Press & Media | Stockifi',
    metaDescription: 'Press coverage of Stockifi and resources for media. Read featured articles, reach us for inquiries, and download our brand assets.',
  },
  no: {
    eyebrow: 'Presse & Medier',
    heading: 'Stockifi i media',
    subhead: 'Omtale av hvordan Stockifi hjelper restauranter, barer og hoteller med å få kontroll på varekosten.',
    readArticle: 'Les artikkelen',
    inquiriesHeading: 'Presse- og mediehenvendelser',
    inquiriesBody: 'Skriver du om Stockifi eller vil omtale oss? Ta kontakt, og last ned merkevareelementene våre nedenfor.',
    contactLabel: 'Send oss en e-post',
    brandKitLabel: 'Last ned merkevarepakke',
    metaTitle: 'Presse & Medier | Stockifi',
    metaDescription: 'Medieomtale av Stockifi og ressurser for presse. Les utvalgte artikler, ta kontakt for henvendelser, og last ned merkevareelementene våre.',
  },
  da: {
    eyebrow: 'Presse & Medier',
    heading: 'Stockifi i pressen',
    subhead: 'Omtale af, hvordan Stockifi hjælper restauranter, barer og hoteller med at få styr på råvareomkostningerne.',
    readArticle: 'Læs artiklen',
    inquiriesHeading: 'Presse- og mediehenvendelser',
    inquiriesBody: 'Skriver du om Stockifi eller vil omtale os? Tag kontakt, og download vores brandelementer nedenfor.',
    contactLabel: 'Skriv til os',
    brandKitLabel: 'Download brand kit',
    metaTitle: 'Presse & Medier | Stockifi',
    metaDescription: 'Medieomtale af Stockifi og ressourcer til presse. Læs udvalgte artikler, tag kontakt for henvendelser, og download vores brandelementer.',
  },
  sv: {
    eyebrow: 'Press & Media',
    heading: 'Stockifi i pressen',
    subhead: 'Artiklar om hur Stockifi hjälper restauranger, barer och hotell att få kontroll på råvarukostnaden.',
    readArticle: 'Läs artikeln',
    inquiriesHeading: 'Press- och medieförfrågningar',
    inquiriesBody: 'Skriver du om Stockifi eller vill uppmärksamma oss? Hör av dig, och ladda ner vårt varumärkesmaterial nedan.',
    contactLabel: 'Mejla oss',
    brandKitLabel: 'Ladda ner brand kit',
    metaTitle: 'Press & Media | Stockifi',
    metaDescription: 'Medieomtal av Stockifi och resurser för press. Läs utvalda artiklar, hör av dig för förfrågningar, och ladda ner vårt varumärkesmaterial.',
  },
  nl: {
    eyebrow: 'Pers & Media',
    heading: 'Stockifi in de pers',
    subhead: 'Berichtgeving over hoe Stockifi restaurants, bars en hotels helpt grip te krijgen op hun inkoopkosten.',
    readArticle: 'Lees artikel',
    inquiriesHeading: 'Pers- en media-aanvragen',
    inquiriesBody: 'Schrijft u over Stockifi of wilt u ons uitlichten? Neem contact op, en download hieronder onze merkmaterialen.',
    contactLabel: 'Mail ons',
    brandKitLabel: 'Download merkpakket',
    metaTitle: 'Pers & Media | Stockifi',
    metaDescription: 'Persberichtgeving over Stockifi en bronnen voor media. Lees uitgelichte artikelen, neem contact op voor aanvragen, en download onze merkmaterialen.',
  },
  de: {
    eyebrow: 'Presse & Medien',
    heading: 'Stockifi in der Presse',
    subhead: 'Berichte darüber, wie Stockifi Restaurants, Bars und Hotels hilft, ihre Warenkosten in den Griff zu bekommen.',
    readArticle: 'Artikel lesen',
    inquiriesHeading: 'Presse- und Medienanfragen',
    inquiriesBody: 'Sie schreiben über Stockifi oder möchten uns vorstellen? Nehmen Sie Kontakt auf, und laden Sie unten unsere Markenelemente herunter.',
    contactLabel: 'Schreiben Sie uns',
    brandKitLabel: 'Brand-Kit herunterladen',
    metaTitle: 'Presse & Medien | Stockifi',
    metaDescription: 'Pressestimmen zu Stockifi und Ressourcen für Medien. Lesen Sie ausgewählte Artikel, nehmen Sie Kontakt auf, und laden Sie unsere Markenelemente herunter.',
  },
};

export function getPressPage(locale: string): PressPageStrings {
  const l = (LOCALES.includes(locale as Locale) ? locale : 'en') as Locale;
  return PAGE[l];
}
