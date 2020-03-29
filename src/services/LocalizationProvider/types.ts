import i18n from 'i18n-js';

type translatorType = typeof i18n.t;

export interface Translations {
  /** Returns the translated string for the requested key */
  __: translatorType;
  /** Current locale on this environment */
  locale: string;
}
