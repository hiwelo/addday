import { useNavigation } from '@react-navigation/native';
import { Button, Layout } from '@ui-kitten/components';
import React from 'react';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import ScrollableContainer from '../../components/ScrollableContainer';
import Space from '../../components/Space';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const PrivacyScreen: React.FC = () => {
  const { __ } = useI18n();
  const { navigate } = useNavigation();

  return (
    <ViewLayout>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <ScrollableContainer>
          <Space>
            <Heading>{__('privacyScreen.title')}</Heading>
          </Space>
          <Paragraph>{__('privacyScreen.statement')}</Paragraph>
          <Paragraph>{__('privacyScreen.context')}</Paragraph>
          <Paragraph>{__('privacyScreen.localOnly')}</Paragraph>
          <Paragraph>{__('privacyScreen.noCloud')}</Paragraph>
          <Paragraph>{__('privacyScreen.signature')}</Paragraph>
        </ScrollableContainer>
      </Layout>
      <Layout>
        <Button onPress={() => navigate('CrashDataAuthScreen')}>
          {__('privacyScreen.cta')}
        </Button>
      </Layout>
    </ViewLayout>
  );
};

export default PrivacyScreen;
