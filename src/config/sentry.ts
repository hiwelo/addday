import { SENTRY_APP_DSN } from 'react-native-dotenv';
import { ExpoOptions } from 'sentry-expo';

const sentryConfig: ExpoOptions = {
  dsn: SENTRY_APP_DSN,
  enableInExpoDevelopment: true,
};

export default sentryConfig;
