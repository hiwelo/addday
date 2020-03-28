import React from 'react';
import { Text } from 'react-native';

import { useI18n } from '../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();

  return <Text>{__('welcome')}</Text>;
};

export default WelcomeScreen;
