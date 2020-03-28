import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { useI18n } from '../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <Layout>
      <Heading>{__('welcome')}</Heading>
    </Layout>
  );
};

export default WelcomeScreen;
