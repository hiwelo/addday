import { useNavigation } from '@react-navigation/native';
import { Button, Toggle } from '@ui-kitten/components';
import React from 'react';
import { useDispatch, useStore } from 'react-redux';

import ScrollableContainer from '../../../components/ScrollableContainer';
import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import {
  setSentryEnrollment,
  resetApplication,
} from '../../../data/Config/actions';
import { AppState } from '../../../data/types';
import { useI18n } from '../../../services/LocalizationProvider';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const { getState } = useStore<AppState>();
  const { config } = getState();
  const [sentryEnrollment, updateSentryEnrollment] = React.useState(
    config.sentryEnrollment,
  );

  /** This effect aims to update the sentry enrollment in the store */
  React.useEffect(() => {
    dispatch(setSentryEnrollment(sentryEnrollment));
  }, [dispatch, sentryEnrollment]);

  /** This callback is fired to reset the account and loads again the wizard */
  const resetAccount = () => {
    dispatch(resetApplication());

    navigate('WizardScreens');
  };

  return (
    <ViewLayout headerTitle="Settings">
      <ScrollableContainer>
        <Space type="comfortable">
          <Toggle
            checked={sentryEnrollment}
            onChange={updateSentryEnrollment}
            text={__('crashDataAuthScreen.toggle')}
          />
        </Space>
        <Space>
          <Button onPress={() => console.log(getState())}>
            See current AppState in console
          </Button>
        </Space>
        <Space>
          <Button onPress={resetAccount}>Reset account</Button>
        </Space>
      </ScrollableContainer>
    </ViewLayout>
  );
};

export default SettingsScreen;
