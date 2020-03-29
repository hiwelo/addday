import { locale } from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';

import i18nConfig from '../../config/i18n';
import translations from '../../i18n/translations';
import LocalizationContext from './utilities/context';

const LocalizationProvider: React.FC = ({ children }) => {
  /** Initializes the i18n-js library */
  i18n.defaultLocale = i18nConfig.defaultLocale;
  i18n.fallbacks = i18nConfig.fallbacks;
  i18n.locale = locale;
  i18n.translations = translations;

  return (
    <LocalizationContext.Provider
      value={{
        __: i18n.t,
        locale,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
