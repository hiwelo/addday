import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CalendarScreen from './CalendarScreen';

const CalendarScreens: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={CalendarScreen}
        name="CalendarScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default CalendarScreens;
