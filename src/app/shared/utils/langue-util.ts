export const getLangue = (lang: string): string => {
  return languages[lang]?.name || '';
}

export const isRTL = (lang: string): boolean => {
  return !!languages[lang]?.rtl;
}

const languages: { [key: string]: Language } = {
  ar: { name: 'العربية', rtl: true },
  fr: { name: 'Français' },
};

interface Language {
  name: string;
  rtl?: boolean;
}
