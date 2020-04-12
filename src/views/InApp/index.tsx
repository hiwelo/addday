import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@ui-kitten/components';
import { isDevice } from 'expo-device';
import { authenticateAsync } from 'expo-local-authentication';
import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useStore } from 'react-redux';

import TabNavigation from '../../components/TabNavigation';
import ViewLayout from '../../components/ViewLayout';
import tabsConfig from '../../config/tabs';

const InApp: React.FC = () => {
  const tabs = Object.keys(tabsConfig);
  const { Navigator, Screen } = createBottomTabNavigator();
  const { navigate } = useNavigation();
  const { getState } = useStore();
  const { user } = getState();
  const { isInitialized } = user;
  const [isAuthenticated, setAuthentication] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);

  // redirects to Wizard if initialization not done
  if (!isInitialized) navigate('WizardScreens');

  /**
   * Triggers the local authentication API of the device, in order to make sure
   * that the user is the actual owner of the phone
   */
  async function authenticate() {
    // early-termination in simulator
    if (!isDevice) return setAuthentication(true);

    try {
      const { success } = await authenticateAsync();

      setAuthentication(success);
    } catch (error) {
      throw new Error(`Error while using LocalAuthentication: ${error}`);
    }
  }

  /**
   * This effect aims to trigger the local authentication each time the app is
   * brought back in the foreground after being in the background or inactive.
   */
  React.useEffect(() => {
    function onAppStateChange(nextAppState: AppStateStatus): void {
      switch (nextAppState) {
        case 'active':
          if (appState === 'background') setAuthentication(false);
          break;

        default:
          setAppState(nextAppState);
      }
    }

    AppState.addEventListener('change', onAppStateChange);

    return () => {
      AppState.removeEventListener('change', onAppStateChange);
    };
  }, [appState]);

  // Authetication screen displayed when the application is locked
  if (!isAuthenticated) {
    return (
      <ViewLayout>
        <Text>Locked</Text>
        <Button onPress={() => authenticate()}>Authenticate</Button>
      </ViewLayout>
    );
  }

  // Bottom tab navigator rendered when the application is unlocked
  return (
    <Navigator
      initialRouteName="DashboardScreens"
      tabBar={props => <TabNavigation {...props} />}
    >
      {tabs.map(tab => {
        const { component, name } = tabsConfig[tab];

        return <Screen component={component} key={name} name={name} />;
      })}
    </Navigator>
  );
};

export default InApp;
