# Crypto Tracker React Native App

Cryto Tracker App is an application to view the market rates of cryptocurrencies

## Steps

1. Installation
2. Use
3. Test

## Installation

React Native Cli was used for this App

Nodejs 12 

[Nodejs](https://nodejs.org/es/)
or
[nvm](https://github.com/nvm-sh/nvm)

React native Cli

```bash
npm i -g react-native-cli
```

Java Development Kit:

[OpenJDK](http://openjdk.java.net/)
or
[Java Oracle](https://www.oracle.com/java/technologies/javase-downloads.html)

Android Studio, SDK: 

[Android Studio](https://developer.android.com/studio/index.html)

Export ANDROID_HOME

```bash
export ANDROID_HOME="$HOME/Android/Sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/tools/bin"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
```

React Developer Tools Debug

```bash
npm install -g react-devtools
```

### Use

### Android

Dev
```bash
npm run dev:android:start
```
Test
```bash
npm run test:android:start
```

Prod
```bash
npm run prod:android:start
```

### Ios

Android

Dev
```bash
npm run dev:ios:start
```

Test
```bash
npm run test:ios:start
```

Prod
```bash
npm run prod:ios:start
```

### Debug 

Debugging starts with: 

```bash
react-devtools
```

### Test

The tests can be run using the command `npm run test`. 
The tests must be inside the folder`__tests__` .