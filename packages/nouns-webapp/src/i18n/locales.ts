import en, { Locale as DaysJSLocale } from 'dayjs/locale/en';
import ko from 'dayjs/locale/ko';
import ja from 'dayjs/locale/ja';

export const SUPPORTED_LOCALES = [
  // order as they appear in the language dropdown
  'en-US',
  'ko-KR',
  'ja-JP',
];
export type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'pseudo';

export const DEFAULT_LOCALE: SupportedLocale = 'en-US';

export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  'en-US': 'English',
  'ko-KR': '한국어',
  'ja-JP': '日本語',
  pseudo: 'ƥƨèúδô',
};

export enum Locales {
  en_US = 'en-US',
  ko_KR = 'ko-KR',
  ja_JP = 'ja-JP',
}

// Map SupportedLocale string to DaysJS locale object (used for locale aware time formatting)
export const SUPPORTED_LOCALE_TO_DAYSJS_LOCALE: { [locale in SupportedLocale]: DaysJSLocale } = {
  'en-US': en,
  'ko-KR': ko,
  'ja-JP': ja,
  pseudo: en,
};
