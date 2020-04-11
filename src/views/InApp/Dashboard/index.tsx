import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import DashboardScreen from './DashboardScreen';

const DashboardScreens: React.FC = () => {
  /** Initializes the navigation and routing system */
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={DashboardScreen}
        name="DashboardScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default DashboardScreens;
