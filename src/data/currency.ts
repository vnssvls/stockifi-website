// Per-locale currency for demo figures: formats an amount given in EUR into the
// region's currency (€ for EN/DE/NL, kr for NO/SV/DA) with an approximate conversion
// so the numbers read realistically per region. Rates are illustrative, not live.
const CUR: Record<string, { tag: string; cur: string; rate: number; frac: number }> = {
  en: { tag: 'en-IE', cur: 'EUR', rate: 1,    frac: 2 },
  de: { tag: 'de-DE', cur: 'EUR', rate: 1,    frac: 2 },
  nl: { tag: 'nl-NL', cur: 'EUR', rate: 1,    frac: 2 },
  no: { tag: 'nb-NO', cur: 'NOK', rate: 11.5, frac: 0 },
  sv: { tag: 'sv-SE', cur: 'SEK', rate: 11.4, frac: 0 },
  da: { tag: 'da-DK', cur: 'DKK', rate: 7.46, frac: 0 },
};

/** Format a EUR base amount into the given locale's currency (converted + localised). */
export function formatPrice(baseEur: number, locale: string | undefined): string {
  const c = CUR[locale ?? 'en'] ?? CUR.en;
  return new Intl.NumberFormat(c.tag, {
    style: 'currency',
    currency: c.cur,
    minimumFractionDigits: c.frac,
    maximumFractionDigits: c.frac,
  }).format(baseEur * c.rate);
}
