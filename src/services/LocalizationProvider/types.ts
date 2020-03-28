export interface Translations {
  /** Returns the translated string for the requested key */
  __(key: string): string;
  /** Current locale on this environment */
  locale: string;
}
