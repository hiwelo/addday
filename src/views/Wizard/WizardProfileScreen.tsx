import { useNavigation } from '@react-navigation/native';
import { Button, Input, Layout } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';

import Heading from '../../components/Heading';
import Space from '../../components/Space';
import ViewLayout from '../../components/ViewLayout';
import { setUser } from '../../data/User/actions';
import { useI18n } from '../../services/LocalizationProvider';

const WizardProfileScreen: React.FC = () => {
  const { __ } = useI18n();
  const [firstName, setFirstName] = React.useState('');
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const onSubmit = () => {
    dispatch(
      setUser({
        firstName,
        isInitialized: true,
      }),
    );

    navigate('InAppScreens');
  };

  return (
    <ViewLayout hideTabs>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <Space>
          <Heading>{__('wizardProfileScreen.title')}</Heading>
        </Space>
        <Space>
          <Input
            label={__('wizardProfileScreen.fullNameLabel')}
            onChangeText={setFirstName}
            value={firstName}
          />
        </Space>
      </Layout>
      <Layout style={{ marginTop: 'auto' }}>
        <Button disabled={!firstName} onPress={onSubmit}>
          {__('wizardProfileScreen.cta')}
        </Button>
      </Layout>
    </ViewLayout>
  );
};

export default WizardProfileScreen;
