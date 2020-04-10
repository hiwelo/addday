import { Text } from '@ui-kitten/components';
import React from 'react';

import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import { useI18n } from '../../../services/LocalizationProvider';

const DashboardScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <ViewLayout headerTitle={__('meds.title')}>
      <Space type="comfortable">
        <Text category="h4">Test</Text>
      </Space>
    </ViewLayout>
  );
};

export default DashboardScreen;
