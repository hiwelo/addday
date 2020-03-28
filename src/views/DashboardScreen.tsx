import React from 'react';

import Heading from '../components/Heading';
import ViewLayout from '../components/ViewLayout';
import { useI18n } from '../services/LocalizationProvider';

const DashboardScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <ViewLayout>
      <Heading>{__('dashboard')}</Heading>
    </ViewLayout>
  );
};

export default DashboardScreen;
