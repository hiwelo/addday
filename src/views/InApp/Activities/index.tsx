import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ActivitiesScreen from './ActivitiesScreen';

const ActivitiesScreens: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={ActivitiesScreen}
        name="ActivitiesScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default ActivitiesScreens;
