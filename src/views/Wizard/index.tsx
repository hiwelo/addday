import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import PrivacyScreen from './PrivacyScreen';
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
      <Screen
        component={PrivacyScreen}
        name="PrivacyScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default WizardScreens;
