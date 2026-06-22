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

/** The locale's Intl tag + ISO currency code — for client-side formatting of values
 *  computed in the browser (e.g. a running total accumulated in random order). */
export function currencyMeta(locale: string | undefined): { tag: string; cur: string } {
  const c = CUR[locale ?? 'en'] ?? CUR.en;
  return { tag: c.tag, cur: c.cur };
}

/** Convert a EUR base to the locale's currency and round to its display precision,
 *  returning the NUMBER. Use when amounts must stay self-consistent (e.g. rows that
 *  sum to a total), so the maths is done on the same rounded figures that are shown. */
export function convertAmount(baseEur: number, locale: string | undefined, opts?: { whole?: boolean }): number {
  const c = CUR[locale ?? 'en'] ?? CUR.en;
  const frac = opts?.whole ? 0 : c.frac;
  const f = Math.pow(10, frac);
  return Math.round(baseEur * c.rate * f) / f;
}

/** Format an amount already in the locale's currency (no conversion). */
export function formatAmount(amount: number, locale: string | undefined, opts?: { whole?: boolean }): string {
  const c = CUR[locale ?? 'en'] ?? CUR.en;
  const frac = opts?.whole ? 0 : c.frac;
  return new Intl.NumberFormat(c.tag, {
    style: 'currency',
    currency: c.cur,
    minimumFractionDigits: frac,
    maximumFractionDigits: frac,
  }).format(amount);
}

/** Format a EUR base amount into the given locale's currency (converted + localised).
 *  Pass `{ whole: true }` to drop decimals (e.g. round menu prices). */
export function formatPrice(baseEur: number, locale: string | undefined, opts?: { whole?: boolean }): string {
  return formatAmount(convertAmount(baseEur, locale, opts), locale, opts);
}
