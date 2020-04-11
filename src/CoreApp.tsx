import { mapping } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { locale } from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useStore } from 'react-redux';

import i18nConfig from './config/i18n';
import translations from './i18n/translations';
import LocalizationContext from './services/LocalizationProvider';
import customThemeMapping from './themes/customThemeMapping';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import InAppScreens from './views/InApp/Dashboard';
import WizardScreens from './views/Wizard';

const CoreApp: React.FC = () => {
  /** Initializes the theme */
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  /** Initializes the localization system */
  i18n.defaultLocale = i18nConfig.defaultLocale;
  i18n.fallbacks = i18nConfig.fallbacks;
  i18n.locale = locale;
  i18n.translations = translations;

  /** Initializes the root navigation stack */
  const { Navigator, Screen } = createStackNavigator();

  /** Fetches the current state of initialization */
  const { getState } = useStore();
  const { user } = getState();
  const { isInitialized } = user;

  return (
    <AppearanceProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        customMapping={customThemeMapping as any}
        mapping={mapping}
        theme={theme}
      >
        <SafeAreaProvider>
          <LocalizationContext>
            <NavigationContainer>
              <Navigator
                initialRouteName={
                  isInitialized ? 'InAppScreens' : 'WizardScreens'
                }
              >
                <Screen
                  component={InAppScreens}
                  name="InAppScreens"
                  options={{ headerShown: false }}
                />
                <Screen
                  component={WizardScreens}
                  name="WizardScreens"
                  options={{ headerShown: false }}
                />
              </Navigator>
            </NavigationContainer>
          </LocalizationContext>
        </SafeAreaProvider>
      </ApplicationProvider>
    </AppearanceProvider>
  );
};

export default CoreApp;
