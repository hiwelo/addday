import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useStore } from 'react-redux';

import TabNavigation from '../../components/TabNavigation';
import tabsConfig from '../../config/tabs';

const InApp: React.FC = () => {
  const tabs = Object.keys(tabsConfig);
  const { Navigator, Screen } = createBottomTabNavigator();
  const { navigate } = useNavigation();
  const { getState } = useStore();
  const { user } = getState();
  const { isInitialized } = user;

  // redirects to Wizard if initialization not done
  if (!isInitialized) navigate('WizardScreens');

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
