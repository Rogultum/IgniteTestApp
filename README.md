### To practice TypeScript and learn to work with a boilerplate, I'll try to do common things with best practices here like fetching data, doing TODO's etc...

This is the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test bleeding-edge changes to our React Native stack.

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Section: TODO

<img src="https://user-images.githubusercontent.com/48841840/198905149-15f05df8-6d44-45ec-b85e-80f0c44fc4f5.jpg" width="300" /> <img src="https://user-images.githubusercontent.com/48841840/198905154-56cb095d-d3e6-4b21-b924-43b65096977f.jpg" width="300" />
<img src="https://user-images.githubusercontent.com/48841840/198905497-6fc8f309-683f-4fb4-a8be-3314e61e2f78.jpg" width="300" />



## Quick Start

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

<!--
### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find templates you can customize to help you get started with React Native.


### ./test directory

This directory will hold your Jest configs and mocks.

## Running Detox end-to-end tests

Read [Detox setup instructions](./detox/README.md).

## Previous Boilerplates

- [2018 aka Bowser](https://github.com/infinitered/ignite-bowser)
- [2017 aka Andross](https://github.com/infinitered/ignite-andross)
- [2016 aka Ignite 1.0](https://github.com/infinitered/ignite-ir-boilerplate-2016)
-->
