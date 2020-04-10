import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { useStore } from 'react-redux';

import Heading from '../../components/Heading';
import Space from '../../components/Space';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const DashboardScreen: React.FC = () => {
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const { getState } = useStore();
  const { user } = getState();
  const { firstName } = user;

  return (
    <ViewLayout>
      <Heading>{__('dashboardScreen.title')}</Heading>
      <Space type="comfortable">
        <Text category="h4">
          {__('dashboardScreen.subtitle', { firstName })}
        </Text>
        <Button onPress={() => navigate('MedsScreens')}>
          {__('meds.title')}
        </Button>
      </Space>
    </ViewLayout>
  );
};

export default DashboardScreen;
