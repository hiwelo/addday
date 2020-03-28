import { useContext } from 'react';

import { Translations } from '../types';
import LocalizationContext from './context';

const useI18n = (): Translations => {
  const context = useContext(LocalizationContext);

  if (!context) throw new Error('A Localization context must be initialized.');

  return context;
};

export default useI18n;
