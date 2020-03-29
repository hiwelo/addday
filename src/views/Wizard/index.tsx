import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CrashDataAuthScreen from './CrashDataAuthScreen';
import PrivacyScreen from './PrivacyScreen';
import WelcomeScreen from './WelcomeScreen';
import WizardProfileScreen from './WizardProfileScreen';

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
      <Screen
        component={CrashDataAuthScreen}
        name="CrashDataAuthScreen"
        options={{ headerShown: false }}
      />
      <Screen
        component={WizardProfileScreen}
        name="WizardProfileScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default WizardScreens;
