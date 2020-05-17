import { isDevice } from 'expo-device';
import { authenticateAsync } from 'expo-local-authentication';
import React from 'react';
import { useStore } from 'react-redux';

import AuthScreen from '../../components/AuthScreen';
import ViewLayout from '../../components/ViewLayout';
import { AppState } from '../../data/types';

const AuthenticationScreen: React.FC<AuthenticationScreenProps> = ({
  onAuthentication,
}) => {
  const { getState } = useStore<AppState>();
  const {
    user: { firstName },
  } = getState();

  /**
   * Triggers the local authentication API of the device, in order to make sure
   * that the user is the actual owner of the phone
   */
  async function authenticate() {
    // early-termination in simulator
    if (!isDevice) return onAuthentication(true);

    try {
      const { success } = await authenticateAsync();

      onAuthentication(success);
    } catch (error) {
      throw new Error(`Error while using LocalAuthentication: ${error}`);
    }
  }

  return (
    <ViewLayout pastelBackground>
      <AuthScreen cta={authenticate} username={firstName} />
    </ViewLayout>
  );
};

interface AuthenticationScreenProps {
  onAuthentication(success: boolean): void;
}

export default AuthenticationScreen;
