import i18n from 'i18n-js';
import React from 'react';
import { Text } from 'react-native';

const WelcomeScreen: React.FC = () => {
  return <Text>{i18n.t('welcome')}</Text>;
};

export default WelcomeScreen;
