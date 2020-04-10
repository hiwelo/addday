import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabNavigation from '../../components/TabNavigation';
import tabsConfig from '../../config/tabs';

const InApp: React.FC = () => {
  const tabs = Object.keys(tabsConfig);
  const { Navigator, Screen } = createBottomTabNavigator();

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
