import { createContext } from 'react';

import { Translations } from '../types';

const LocalizationContext = createContext<Translations | null>(null);

export default LocalizationContext;
