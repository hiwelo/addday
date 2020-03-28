import { dark as darkTheme, mapping } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider } from '@ui-kitten/components';
import { locale } from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from 'sentry-expo';

import i18nConfig from './src/config/i18n';
import sentryConfig from './src/config/sentry';
import { getPersistor, getStore } from './src/data/store';
import translations from './src/i18n/translations';
import WelcomeScreen from './src/views/WelcomeScreen';

const App: React.FC = () => {
  /** Fetches the persistor and the store */
  const persistor = getPersistor();
  const store = getStore();

  /** Initializes Sentry */
  Sentry.init(sentryConfig);

  /** Initializes the navigation and routing system */
  const { Navigator, Screen } = createStackNavigator();

  /** Initializes the localization system */
  i18n.defaultLocale = i18nConfig.defaultLocale;
  i18n.fallbacks = i18nConfig.fallbacks;
  i18n.locale = locale;
  i18n.translations = translations;

  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor as any}>
          <NavigationContainer>
            <Navigator>
              <Screen component={WelcomeScreen} name="Welcome" />
            </Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
