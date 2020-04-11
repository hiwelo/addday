import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@ui-kitten/components';
import { isDevice } from 'expo-device';
import { authenticateAsync } from 'expo-local-authentication';
import React from 'react';
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

  // redirects to Wizard if initialization not done
  if (!isInitialized) navigate('WizardScreens');

  async function authenticate() {
    // early-termination in simulator
    if (!isDevice) return;

    try {
      const { success } = await authenticateAsync();

      setAuthentication(success);
    } catch (error) {
      throw new Error(`Error while using LocalAuthentication: ${error}`);
    }
  }

  if (!isAuthenticated)
    return (
      <ViewLayout>
        <Text>Locked</Text>
        <Button onPress={() => authenticate()}>Authenticate</Button>
      </ViewLayout>
    );

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
