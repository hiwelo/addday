import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useStore } from 'react-redux';

import TabNavigation from '../../components/TabNavigation';
import tabsConfig from '../../config/tabs';
import AuthenticationScreen from './AuthenticationScreen';

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
    return <AuthenticationScreen onAuthentication={setAuthentication} />;
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
