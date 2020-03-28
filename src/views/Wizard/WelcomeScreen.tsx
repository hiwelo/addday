import React from 'react';

import Heading from '../../components/Heading';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <ViewLayout>
      <Heading>{__('welcome')}</Heading>
    </ViewLayout>
  );
};

export default WelcomeScreen;
