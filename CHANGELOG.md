# [1.3.0](https://github.com/hiwelo/addday/compare/v1.2.0...v1.3.0) (2020-05-16)


### Bug Fixes

* **store:** migrate ScheduledIntakeStore to IntakesStore ([5c3b94e](https://github.com/hiwelo/addday/commit/5c3b94e176a3b5ee8c1d8060d20faebd60975b22))


### Features

* **components:** create WeeklyScheduleSelector component ([fcfcb18](https://github.com/hiwelo/addday/commit/fcfcb1847afabc6100a72a8d4c0e6d47fda0e900))
* **data:** create action to reset the store app-wide ([07f00d4](https://github.com/hiwelo/addday/commit/07f00d44db5b6afc6fb281bd1a1a04f9e71893d1))
* **data:** create actions & reducers for medications in ScheduledIntake ([78d1012](https://github.com/hiwelo/addday/commit/78d1012a89552e9b1f0cc9e9cac1da3add6c5e8c))
* **data:** create ScheduledIntake models, and related actions ([34ab279](https://github.com/hiwelo/addday/commit/34ab279a8454d7465b1f26423e860aed6b205022))
* **settingsscreen:** update resetUser action to reset the whole app ([e83a018](https://github.com/hiwelo/addday/commit/e83a018a31a5eb355f73de01cf17498a89bc3680))
* **views:** create basic view to make new ScheduledIntake ([2df0a2b](https://github.com/hiwelo/addday/commit/2df0a2b48340533174dd48982e06b470bebffe7c))
* **views:** create skeleton for SetScheduledIntakeScreen ([37a7ea5](https://github.com/hiwelo/addday/commit/37a7ea518655c2411f548b320db707531083ba0d))

# 1.0.0 (2020-05-02)


### Bug Fixes

* fix disappearance of the TabNavigation ([341a516](https://github.com/hiwelo/addday/commit/341a5165cf65288213ff554b20cd8ed46854dfa8))
* **navigation:** fix initial route & navigation issue when ending wizard ([4381ba4](https://github.com/hiwelo/addday/commit/4381ba42916025aeff5b0eb8fb0972c2cc19c80d))
* fix security issue with acorn ([afd4600](https://github.com/hiwelo/addday/commit/afd46000d6800691b2934fa443e3e342673b41ca))


### Features

* add enrolmment condition for Sentry initialization ([8f4f2b9](https://github.com/hiwelo/addday/commit/8f4f2b9b15f7b728c91c9c37725d430a2430a36e))
* add FaceID to the iOS configuration ([4a3d09c](https://github.com/hiwelo/addday/commit/4a3d09c4bd6ed93cd4e9b0de2da71172de06f292))
* add new right actions in ViewHeader ([3ff0769](https://github.com/hiwelo/addday/commit/3ff07697158cee25c171f2bcf88f12d5d6ce9ab5))
* add NewMedication screen to the application ([49feecd](https://github.com/hiwelo/addday/commit/49feecdcab8ee6784956d8c8cca62531d370ab8a))
* add Sentry monitoring consent screen ([68ef8ba](https://github.com/hiwelo/addday/commit/68ef8ba770e6c724d58eb7b1ff5055a002e9af29))
* add sentry state in settings ([12d2784](https://github.com/hiwelo/addday/commit/12d2784e85858a6b3bb3eb3ef9953c0d98d9494f))
* change order of navigation stacks ([db2dcc4](https://github.com/hiwelo/addday/commit/db2dcc476f35dc90aea3fa7cdc3a53ae43052846))
* create draft of store for encryption key ([dd18bd2](https://github.com/hiwelo/addday/commit/dd18bd28b8a7c59a6759b8932f308d5d6e2113a4))
* create foundations for custom mapping and theme for this app ([260feee](https://github.com/hiwelo/addday/commit/260feee51aad11a5b3cf6652fe12bd3bfbf95289))
* create Heading UI component and use it on WelcomeScreen ([636209b](https://github.com/hiwelo/addday/commit/636209b17023f018d4ed61fc297983753dea6699))
* create LocalizationProvider for translations ([0cbdaa4](https://github.com/hiwelo/addday/commit/0cbdaa48e7aca78ca544daef555e40d0a7c20e68))
* create Meds view with new ViewHeader component ([a2f017a](https://github.com/hiwelo/addday/commit/a2f017ae2cdd46c3f97c588796566ef75d314e55))
* create new typography UI components & update welcome screen layout ([7a4be2c](https://github.com/hiwelo/addday/commit/7a4be2c28d04f78353154b360722440df797c24c))
* create PrivacyScreen part of the wizard ([fdac373](https://github.com/hiwelo/addday/commit/fdac37371d0d1fc2a20dc96eed4788bf4baae897))
* first draft of profile setup screen and dashboard ([86c58a8](https://github.com/hiwelo/addday/commit/86c58a80a2403fbb4fd4a096aabb3b506c252c8f))
* implements safe view & light/dark theme ([b129e86](https://github.com/hiwelo/addday/commit/b129e86b8645ee9c6d0cf4a2c655bc013daf36c4))
* improve routing and navigation between wizard and inapp screens ([6f398aa](https://github.com/hiwelo/addday/commit/6f398aa26c638e973a788d268f03e9efeec13460))
* install and setup i18n-js in this project ([ed95cac](https://github.com/hiwelo/addday/commit/ed95cac7043ba2685b56f0d3c67adae23a831860))
* install and setup react-navigation with first test view ([9ee9b71](https://github.com/hiwelo/addday/commit/9ee9b71b5f4f27f5ad4eb0e10c1ba49838684def))
* loads the in-app views when user already initialized ([01f5da7](https://github.com/hiwelo/addday/commit/01f5da7066062602f17ab8590d40771fb88632fb))
* replace AsyncStorage with FileSystem ([ae55566](https://github.com/hiwelo/addday/commit/ae55566978c9167f856ca31b6bb475afd3619715))
* setup an encryption key generation for our store and persistor ([0945e07](https://github.com/hiwelo/addday/commit/0945e07566b6e135d9e37794642be027a9037af3))
* setup basic screen routing ([5412589](https://github.com/hiwelo/addday/commit/5412589b91cb93013d68c4527053096e0c9f188f))
* setup creation and edition of medications ([3e5e5e8](https://github.com/hiwelo/addday/commit/3e5e5e8c44a557a5b218293310fc8791d2acfb45))
* setup tabs in the application ([27fe2b4](https://github.com/hiwelo/addday/commit/27fe2b412a89ec9ea7d3e6def0a7d964824b7701))
* setup Welcome screen with copy & layout ([c62c1cd](https://github.com/hiwelo/addday/commit/c62c1cd66343122231252d0ba0388b24bfeec68a))
* split root app file to execute routing only once store is loaded ([2047e3c](https://github.com/hiwelo/addday/commit/2047e3cac5ee1f98064dca4f4aef8f9a3f9b5a01))
* trigger LocalAuthentication when app brought back from background ([a7d2667](https://github.com/hiwelo/addday/commit/a7d2667382770d54d34a4b93f03e050a4419fbeb))
* update app icon and splash screen ([55fe968](https://github.com/hiwelo/addday/commit/55fe968355d658033679c23ad920cde84a8e1ea6))
* use LocalAuthentication to protect the application ([026d2a4](https://github.com/hiwelo/addday/commit/026d2a4317338a97102653a8d5273bd18e06c493))
* **meds:** create actions and reducer for medications ([964cdf7](https://github.com/hiwelo/addday/commit/964cdf72bef5094a5458f25d44fe800b488d617b))
