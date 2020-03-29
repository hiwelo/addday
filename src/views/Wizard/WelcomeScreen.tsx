import { useNavigation } from '@react-navigation/native';
import { Button, Layout } from '@ui-kitten/components';
import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Space from '../../components/Space';
import Subheading from '../../components/Subheading';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();
  const { navigate } = useNavigation();

  return (
    <ViewLayout>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <Space>
          <Heading>{__('welcomeScreen.title')}</Heading>
        </Space>
        <Space>
          <Subheading>{__('welcomeScreen.greeting')}</Subheading>
        </Space>
        <Paragraph>{__('welcomeScreen.whoAmI')}</Paragraph>
        <Paragraph>{__('welcomeScreen.ready')}</Paragraph>
      </Layout>
      <Layout style={{ marginTop: 'auto' }}>
        <Button onPress={() => navigate('PrivacyScreen')}>
          {__('welcomeScreen.cta')}
        </Button>
      </Layout>
    </ViewLayout>
  );
};

export default WelcomeScreen;
