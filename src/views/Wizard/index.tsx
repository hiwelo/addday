import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import WelcomeScreen from './WelcomeScreen';

const WizardScreens: React.FC = () => {
  /** Initializes the navigation and routing system */
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={WelcomeScreen}
        name="WelcomeScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default WizardScreens;
