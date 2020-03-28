# ADDday

![ADDday CI](https://github.com/hiwelo/addday/workflows/ADDday%20CI/badge.svg)
![Publish ADDday](https://github.com/hiwelo/addday/workflows/Publish%20ADDday/badge.svg?branch=master)

_ADDday • Ad(h)d your day_ is a project of digital companion for people with
attention deficit with or without hyperactivity disorder.

The project aims to create a companion app that people with AD(H)D could use
every day to help them with their attention deficit.

This projects aims to provide:

- A pill reminder, to keep track of the current medication
  This pill reminder should keep track of medication observance and also offer
  a series of notifications either at a specific time indicated by the user or
  based on a specific timeframe to keep between two pills.

- A daily check-in system asking the user for
  - their average mood today
  - their average level of energy today
  - their sleep quality during the last night
  - their food intake so far
  - their anxiety levels
  - any issues they experienced with medication or life

## How to work with this project

- Before working with our application, it might be preferable to install the
  [Expo CLI] globally on your system using:

  ```bash
  $ yarn global add expo-cli
  ```

- First, you need to install the dependencies

  ```bash
  $ yarn
  ```

- You can start the Expo platform to build the project using the following
  command. Once started, please follow the instruction available in the
  interactive CLI.

  ```bash
  $ yarn start
  ```

- Directly run the project in an iOS or Android simulator without using the
  interactive CLI

  ```bash
  $ yarn ios # to run the project directly in the iOS simulator
  $ yarn android # to run the project directly in the Android simulator
  $ yarn web # to run the Web version in a browser
  ```

- You can run the ESLint and Prettier tools in this project by running

  ```bash
  $ yarn lint # to run ESLint and Prettier
  $ yarn lint --fix # to run ESLint and Prettier, and to fix automatically some issues
  ```

Please note that during the first run using the iOS and Android simulators, the
Expo CLI will help you installing the required tools by providing you all the
needed commands to run in your local environment.

In order to run any Android simulation, you will need to download and install
_[Android Studio] 3_.

## Tech stack

- **[expo]**, open source platform for making universal native app for Android,
  iOS, and the Web with JavaScript and React.

- **[react-native]**, framework for building this app as native app using React.

- **[styled-components]**, CSS-in-JS library for React and React Native

- **[ui-kitten]**, UI kit used as foundation for the our visual components

- **[react-navigation]**, library used to manage routing and navigation

- **[expo-local-authentication]**, library using to make use of the local
  authentication capabilities of the device OS.

- **[expo-localization]** and **[i18n-js]** libraries for internationalization

- **[redux]** and **[redux-persist]** libraries to provide an app-wide state
  container persisted in the **[AsyncStorage]**.

## Folder structure

```
./app.json          Expo development tools configuration

./app               Folder containing assets and code used by this app
  │
  ├ ./assets        Font files, icons and images
  │
  ├ ./components    UI components reusable across views
  │
  ├ ./config        Configuration files needed to run the app
  │
  ├ ./data          Actions and reducers
  │
  ├ ./i18n          Internationalization files, helpers and scripts
  │
  ├ ./modules       Pieces of code not involved in the visual rendering
  │                 (without TSX)
  │
  ├ ./services      Functions wrapping all API calls
  │
  ├ ./views         Components defining our app screens
```

[android studio]: https://developer.android.com/studio
[asyncstorage]: https://docs.expo.io/versions/latest/react-native/asyncstorage/
[expo]: https://expo.io/
[expo cli]: https://docs.expo.io/versions/latest/workflow/expo-cli/
[expo-localization]: https://docs.expo.io/versions/latest/sdk/localization/
[expo-local-authentication]: https://docs.expo.io/versions/latest/sdk/local-authentication/
[i18n-js]: https://github.com/fnando/i18n-js
[react-native]: https://reactnative.dev/
[react-navigation]: https://reactnavigation.org/
[redux]: https://redux.js.org/
[redux-persist]: https://github.com/rt2zz/redux-persist
[styled-components]: https://styled-components.com/
[ui-kitten]: https://akveo.github.io/react-native-ui-kitten/
