import { Layout } from '@ui-kitten/components';
import React from 'react';

import Heading from '../../components/Heading';
import ScrollableContainer from '../../components/ScrollableContainer';
import Space from '../../components/Space';
import ViewLayout from '../../components/ViewLayout';
import { useI18n } from '../../services/LocalizationProvider';

const ProfileScreen: React.FC = () => {
  const { __ } = useI18n();

  return (
    <ViewLayout>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <ScrollableContainer>
          <Space>
            <Heading>{__('privacyScreen.title')}</Heading>
          </Space>
        </ScrollableContainer>
      </Layout>
    </ViewLayout>
  );
};

export default ProfileScreen;
