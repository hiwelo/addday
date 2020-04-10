import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SettingsScreen from './SettingsScreen';

const SettingsScreens: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={SettingsScreen}
        name="SettingsScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default SettingsScreens;
