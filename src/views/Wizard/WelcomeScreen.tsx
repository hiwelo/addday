import { Button, Layout } from '@ui-kitten/components';
import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Space from '../../components/Space';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const WelcomeScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <ViewLayout>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <Heading>{__('welcomeScreen.title')}</Heading>
        <Space>
          <Paragraph>{__('welcomeScreen.greeting')}</Paragraph>
        </Space>
        <Space>
          <Paragraph>{__('welcomeScreen.whoAmI')}</Paragraph>
        </Space>
        <Space>
          <Paragraph>{__('welcomeScreen.ready')}</Paragraph>
        </Space>
      </Layout>
      <Layout style={{ marginTop: 'auto' }}>
        <Button>{__('welcomeScreen.cta')}</Button>
      </Layout>
    </ViewLayout>
  );
};

export default WelcomeScreen;
