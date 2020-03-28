declare module 'react-native-dotenv' {
  interface Env {
    SENTRY_DEBUG: boolean;
    SENTRY_APP_DSN: string;
  }

  declare const env: Env;
  export = env;
}
