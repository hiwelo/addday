import { useNavigation } from '@react-navigation/native';
import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import ScrollableContainer from '../../components/ScrollableContainer';
import Space from '../../components/Space';
import Toggle from '../../components/Toggle';
import ViewLayout from '../../components/ViewLayout';
import { setSentryEnrollment } from '../../data/Config/actions';
import { useI18n } from '../../services/LocalizationProvider';

const CrashDataAuthScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { __ } = useI18n();
  const [isEnrolled, setEnrollment] = React.useState(false);

  const onSubmit = () => {
    dispatch(setSentryEnrollment(isEnrolled));
    navigate('WizardProfileScreen');
  };

  return (
    <ViewLayout>
      <Layout style={{ marginBottom: 'auto', marginTop: 'auto' }}>
        <ScrollableContainer>
          <Space>
            <Heading>{__('crashDataAuthScreen.title')}</Heading>
          </Space>
          <Paragraph>{__('crashDataAuthScreen.statement')}</Paragraph>
          <Paragraph>{__('crashDataAuthScreen.helpMe')}</Paragraph>
          <Paragraph>{__('crashDataAuthScreen.service')}</Paragraph>
          <Paragraph>{__('crashDataAuthScreen.informationShared')}</Paragraph>
          <Space type="comfortable">
            <Toggle
              checked={isEnrolled}
              onChange={setEnrollment}
              text={__('crashDataAuthScreen.toggle')}
            />
          </Space>
        </ScrollableContainer>
      </Layout>
      <Layout>
        <Button onPress={onSubmit}>{__('crashDataAuthScreen.cta')}</Button>
      </Layout>
    </ViewLayout>
  );
};

export default CrashDataAuthScreen;
