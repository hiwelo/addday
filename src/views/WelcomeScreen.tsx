import React from 'react';

import Heading from '../components/Heading';
import { useI18n } from '../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();

  return <Heading>{__('welcome')}</Heading>;
};

export default WelcomeScreen;
