import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';

import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import { setUser } from '../../../data/User/actions';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const resetAccount = () => {
    dispatch(
      setUser({
        firstName: '',
        isInitialized: false,
      }),
    );

    navigate('WelcomeScreen');
  };

  return (
    <ViewLayout headerTitle="Settings">
      <Space>
        <Button onPress={resetAccount}>Reset account</Button>
      </Space>
    </ViewLayout>
  );
};

export default SettingsScreen;
