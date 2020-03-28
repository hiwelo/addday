import { SENTRY_APP_DSN, SENTRY_DEBUG } from 'react-native-dotenv';
import { ExpoOptions } from 'sentry-expo';

const sentryConfig: ExpoOptions = {
  debug: SENTRY_DEBUG,
  dsn: SENTRY_APP_DSN,
  enableInExpoDevelopment: true,
};

export default sentryConfig;
