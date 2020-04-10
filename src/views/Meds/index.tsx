import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MedsScreen from './MedsScreen';

const MedsScreens: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={MedsScreen}
        name="MedsScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default MedsScreens;
