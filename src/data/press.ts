// Press & Media — coverage list + page chrome, all 6 locales (DC-474).
// Single source of truth: constant per-item meta (outlet/year/link/image/headline) merged
// with per-locale strings (pull/alt). Page chrome (eyebrow, headings, CTA labels, meta)
// lives in PAGE below.
//
// HEADLINES are the publications' real, verbatim article titles (Norwegian for the four
// NO outlets, Swedish for ADC Media). They stay in the source language on every locale —
// it's the actual title of the piece you click through to. Only the summary (pull) and
// image alt translate per locale.
//
// EN is canonical for the summaries; NO is confident; DA/SV/NL/DE are first-draft
// translations still needing native sign-off via Simon's translation-review SOP
// (stockifi-agents/website-copy/translation-review-sop.md).
//
// Order is reverse-chronological (newest first).

export type Locale = 'en' | 'no' | 'da' | 'sv' | 'nl' | 'de';
const LOCALES: Locale[] = ['en', 'no', 'da', 'sv', 'nl', 'de'];

export interface PressMeta {
  id: string;
  outlet: string;
  year: string;
  /** The publication's real article title, verbatim, in its original language. */
  heading: string;
  href: string;
  /** Self-hosted thumbnail under /media/press. Undefined → component renders a placeholder. */
  image?: string;
}

// NOTE (V, Jun 24): Horecanytt has no distinct thumbnail — its og:image is the exact same
// founder photo Reiseliv1 (2025) uses. V confirmed the duplicate is fine, so it intentionally
// reuses that image. ADC Media uses the print-spread feature clipping (V-supplied PDF).
export const PRESS_META: PressMeta[] = [
  {
    id: 'adcmedia-2025',
    outlet: 'ADC Media',
    year: '2025',
    heading: 'Snabbväxande techföretag med rötter i Sollefteå',
    href: 'https://adcmedia.prenly.com/p/tema/2025-09-30/r/5/8-9/1779/2007121',
    image: '/media/press/adcmedia-2025.jpg',
  },
  {
    id: 'reiseliv1-2025',
    outlet: 'Reiseliv1',
    year: '2025',
    heading: '– De fleste restauranter taper 20–30 % av fortjenesten',
    href: 'https://www.reiseliv1.no/restaurant/de-fleste-restauranter-taper-2030-av-fortjenesten/1345939',
    image: '/media/press/reiseliv1-2025.jpg',
  },
  {
    id: 'horecanytt-2025',
    outlet: 'Horecanytt',
    year: '2025',
    heading: 'Gir restaurantbransjen kontroll',
    href: 'https://www.horecanytt.no/august-2025-produkter-restaurant/gir-restaurantbransjen-kontroll/1426332',
    image: '/media/press/reiseliv1-2025.jpg',
  },
  {
    id: 'reiseliv1-2023',
    outlet: 'Reiseliv1',
    year: '2023',
    heading: 'Effektiv lagerstyring for barer og restauranter',
    href: 'https://reiseliv1.no/restaurant/2023/effektiv-lagerstyring-barer-og-restauranter',
    image: '/media/press/reiseliv1-2023.jpg',
  },
  {
    id: 'shifter-2023',
    outlet: 'Shifter',
    year: '2023',
    heading: 'I 2021 mikset gründerne Aperol Spritz til finanseliten – nå skalerer SaaS-startupen i Europa',
    href: 'https://www.shifter.no/nyheter/i-2021-mikset-grnderne-aperol-spritz-til-finanseliten-na-skalerer-saas-startupen-i-europa/285416',
    image: '/media/press/shifter-2023.jpg',
  },
];

interface ItemStrings { pull: string; alt: string }

const ITEM_STRINGS: Record<Locale, Record<string, ItemStrings>> = {
  en: {
    'adcmedia-2025': {
      pull: 'ADC Media profiles the fast-growing tech company with roots in Sollefteå, and how Stockifi helps hospitality operators take control of food cost and margins.',
      alt: 'The ADC Media feature on Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 reports on how Stockifi, now serving more than 350 venues, helps restaurants recover revenue lost to supplier price increases, overuse, and waste.',
      alt: 'Stockifi co-founders Sime Buzeca and Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt features co-founders Sime Buzeca and Simon Burman on how Stockifi gives restaurants control over costs, waste, and supplier prices.',
      alt: 'Stockifi co-founders featured in Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 looks at how Stockifi gives bars and restaurants control over commodity costs and correct pricing.',
      alt: 'Stockifi co-founders reviewing data on a laptop',
    },
    'shifter-2023': {
      pull: 'Shifter profiles the two former bartenders behind Stockifi and how the company grew its revenue and expanded across the Nordics.',
      alt: 'An Aperol Spritz beside the Stockifi co-founders',
    },
  },
  no: {
    'adcmedia-2025': {
      pull: 'ADC Media omtaler det raskt voksende teknologiselskapet med røtter i Sollefteå, og hvordan Stockifi hjelper utelivsbransjen med å få kontroll på varekost og marginer.',
      alt: 'ADC Media-omtalen av Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 omtaler hvordan Stockifi, som nå betjener over 350 steder, hjelper restauranter med å hente tilbake inntekter tapt til prisøkninger, overforbruk og svinn.',
      alt: 'Gründerne av Stockifi, Sime Buzeca og Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt møter gründerne Sime Buzeca og Simon Burman om hvordan Stockifi gir restauranter kontroll over kostnader, svinn og leverandørpriser.',
      alt: 'Gründerne av Stockifi omtalt i Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 ser på hvordan Stockifi gir barer og restauranter kontroll over varekostnader og riktig prissetting.',
      alt: 'Gründerne av Stockifi gjennomgår data på en laptop',
    },
    'shifter-2023': {
      pull: 'Shifter forteller historien om de to tidligere bartenderne bak Stockifi, og hvordan selskapet økte omsetningen og vokste i Norden.',
      alt: 'En Aperol Spritz ved siden av gründerne av Stockifi',
    },
  },
  da: {
    'adcmedia-2025': {
      pull: 'ADC Media omtaler den hurtigt voksende teknologivirksomhed med rødder i Sollefteå, og hvordan Stockifi hjælper restaurationsbranchen med at få styr på råvareomkostninger og marginer.',
      alt: 'ADC Media-omtalen af Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 fortæller, hvordan Stockifi, der nu betjener over 350 steder, hjælper restauranter med at hente indtægter tilbage, som tabes til prisstigninger, overforbrug og spild.',
      alt: 'Stockifis stiftere Sime Buzeca og Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt møder stifterne Sime Buzeca og Simon Burman om, hvordan Stockifi giver restauranter kontrol over omkostninger, spild og leverandørpriser.',
      alt: 'Stockifis stiftere omtalt i Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 ser på, hvordan Stockifi giver barer og restauranter kontrol over råvareomkostninger og korrekt prissætning.',
      alt: 'Stockifis stiftere gennemgår data på en bærbar',
    },
    'shifter-2023': {
      pull: 'Shifter fortæller historien om de to tidligere bartendere bag Stockifi, og hvordan virksomheden øgede omsætningen og voksede i Norden.',
      alt: 'En Aperol Spritz ved siden af Stockifis stiftere',
    },
  },
  sv: {
    'adcmedia-2025': {
      pull: 'ADC Media porträtterar det snabbväxande teknikföretaget med rötter i Sollefteå, och hur Stockifi hjälper besöksnäringen att få kontroll på råvarukostnader och marginaler.',
      alt: 'ADC Media-reportaget om Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 berättar hur Stockifi, som nu betjänar över 350 verksamheter, hjälper restauranger att återta intäkter som går förlorade till prishöjningar, överanvändning och svinn.',
      alt: 'Stockifis grundare Sime Buzeca och Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt träffar grundarna Sime Buzeca och Simon Burman om hur Stockifi ger restauranger kontroll över kostnader, svinn och leverantörspriser.',
      alt: 'Stockifis grundare uppmärksammade i Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 tittar på hur Stockifi ger barer och restauranger kontroll över råvarukostnader och rätt prissättning.',
      alt: 'Stockifis grundare går igenom data på en laptop',
    },
    'shifter-2023': {
      pull: 'Shifter porträtterar de två tidigare bartendrarna bakom Stockifi och hur bolaget ökade omsättningen och växte i Norden.',
      alt: 'En Aperol Spritz bredvid Stockifis grundare',
    },
  },
  nl: {
    'adcmedia-2025': {
      pull: 'ADC Media portretteert het snelgroeiende techbedrijf met wortels in Sollefteå, en hoe Stockifi horecaondernemers grip geeft op inkoopkosten en marges.',
      alt: 'Het ADC Media-artikel over Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 bericht hoe Stockifi, dat inmiddels meer dan 350 zaken bedient, restaurants helpt omzet terug te winnen die verloren gaat aan prijsstijgingen, overgebruik en verspilling.',
      alt: 'Stockifi-oprichters Sime Buzeca en Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt spreekt met oprichters Sime Buzeca en Simon Burman over hoe Stockifi restaurants grip geeft op kosten, verspilling en leveranciersprijzen.',
      alt: 'Stockifi-oprichters belicht in Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 bekijkt hoe Stockifi bars en restaurants grip geeft op inkoopkosten en de juiste prijsstelling.',
      alt: 'Stockifi-oprichters bekijken data op een laptop',
    },
    'shifter-2023': {
      pull: 'Shifter portretteert de twee voormalige barmannen achter Stockifi en hoe het bedrijf zijn omzet liet groeien en uitbreidde in de Noordse landen.',
      alt: 'Een Aperol Spritz naast de Stockifi-oprichters',
    },
  },
  de: {
    'adcmedia-2025': {
      pull: 'ADC Media porträtiert das schnell wachsende Tech-Unternehmen mit Wurzeln in Sollefteå und wie Stockifi Gastronomiebetrieben hilft, Warenkosten und Margen in den Griff zu bekommen.',
      alt: 'Der ADC-Media-Beitrag über Stockifi',
    },
    'reiseliv1-2025': {
      pull: 'Reiseliv1 berichtet, wie Stockifi, das inzwischen über 350 Betriebe betreut, Restaurants hilft, Umsatzverluste durch Preiserhöhungen, Mehrverbrauch und Verschwendung zurückzugewinnen.',
      alt: 'Stockifi-Gründer Sime Buzeca und Simon Burman',
    },
    'horecanytt-2025': {
      pull: 'Horecanytt spricht mit den Gründern Sime Buzeca und Simon Burman darüber, wie Stockifi Restaurants Kontrolle über Kosten, Verschwendung und Lieferantenpreise gibt.',
      alt: 'Stockifi-Gründer in Horecanytt',
    },
    'reiseliv1-2023': {
      pull: 'Reiseliv1 zeigt, wie Stockifi Bars und Restaurants Kontrolle über Warenkosten und die richtige Preisgestaltung gibt.',
      alt: 'Stockifi-Gründer prüfen Daten am Laptop',
    },
    'shifter-2023': {
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
    subhead: 'Food cost rarely makes headlines. We managed a few anyway. See where Stockifi has been featured across hospitality and tech media.',
    readArticle: 'Read article',
    inquiriesHeading: 'Media & press inquiries',
    inquiriesBody: 'Writing about Stockifi or want to feature us? Get in touch.',
    contactLabel: 'Email us',
    brandKitLabel: 'Download brand kit',
    metaTitle: 'Press & Media | Stockifi',
    metaDescription: 'Press coverage of Stockifi and resources for media. Read featured articles, reach us for inquiries, and download our brand assets.',
  },
  no: {
    eyebrow: 'Presse & Medier',
    heading: 'Stockifi i media',
    subhead: 'Varekost lager sjelden overskrifter. Vi klarte noen likevel. Se hvor Stockifi har vært omtalt i bransje- og teknologimedier.',
    readArticle: 'Les artikkelen',
    inquiriesHeading: 'Presse- og mediehenvendelser',
    inquiriesBody: 'Skriver du om Stockifi eller vil omtale oss? Ta kontakt.',
    contactLabel: 'Send oss en e-post',
    brandKitLabel: 'Last ned merkevarepakke',
    metaTitle: 'Presse & Medier | Stockifi',
    metaDescription: 'Medieomtale av Stockifi og ressurser for presse. Les utvalgte artikler, ta kontakt for henvendelser, og last ned merkevareelementene våre.',
  },
  da: {
    eyebrow: 'Presse & Medier',
    heading: 'Stockifi i pressen',
    subhead: 'Råvareomkostninger laver sjældent overskrifter. Vi fik skabt et par stykker alligevel. Se, hvor Stockifi har været omtalt i branche- og teknologimedier.',
    readArticle: 'Læs artiklen',
    inquiriesHeading: 'Presse- og mediehenvendelser',
    inquiriesBody: 'Skriver du om Stockifi eller vil omtale os? Tag kontakt.',
    contactLabel: 'Skriv til os',
    brandKitLabel: 'Download brand kit',
    metaTitle: 'Presse & Medier | Stockifi',
    metaDescription: 'Medieomtale af Stockifi og ressourcer til presse. Læs udvalgte artikler, tag kontakt for henvendelser, og download vores brandelementer.',
  },
  sv: {
    eyebrow: 'Press & Media',
    heading: 'Stockifi i pressen',
    subhead: 'Råvarukostnader skapar sällan rubriker. Vi lyckades med några ändå. Se var Stockifi har uppmärksammats i bransch- och teknikmedier.',
    readArticle: 'Läs artikeln',
    inquiriesHeading: 'Press- och medieförfrågningar',
    inquiriesBody: 'Skriver du om Stockifi eller vill uppmärksamma oss? Hör av dig.',
    contactLabel: 'Mejla oss',
    brandKitLabel: 'Ladda ner brand kit',
    metaTitle: 'Press & Media | Stockifi',
    metaDescription: 'Medieomtal av Stockifi och resurser för press. Läs utvalda artiklar, hör av dig för förfrågningar, och ladda ner vårt varumärkesmaterial.',
  },
  nl: {
    eyebrow: 'Pers & Media',
    heading: 'Stockifi in de pers',
    subhead: 'Inkoopkosten halen zelden het nieuws. Toch zorgden we voor een paar koppen. Zie waar Stockifi is uitgelicht in horeca- en techmedia.',
    readArticle: 'Lees artikel',
    inquiriesHeading: 'Pers- en media-aanvragen',
    inquiriesBody: 'Schrijft u over Stockifi of wilt u ons uitlichten? Neem contact op.',
    contactLabel: 'Mail ons',
    brandKitLabel: 'Download merkpakket',
    metaTitle: 'Pers & Media | Stockifi',
    metaDescription: 'Persberichtgeving over Stockifi en bronnen voor media. Lees uitgelichte artikelen, neem contact op voor aanvragen, en download onze merkmaterialen.',
  },
  de: {
    eyebrow: 'Presse & Medien',
    heading: 'Stockifi in der Presse',
    subhead: 'Warenkosten machen selten Schlagzeilen. Ein paar haben wir trotzdem geschafft. Sehen Sie, wo Stockifi in Branchen- und Tech-Medien vorgestellt wurde.',
    readArticle: 'Artikel lesen',
    inquiriesHeading: 'Presse- und Medienanfragen',
    inquiriesBody: 'Sie schreiben über Stockifi oder möchten uns vorstellen? Nehmen Sie Kontakt auf.',
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
