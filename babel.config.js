module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};

//a plugin was added to the babel config file to support react-native-reanimated library


// npm install \
// react-native-gesture-handler \
// react-native-reanimated \
// react-native-worklets


// rm -rf node_modules package-lock.json
// npm install
// cd android
// ./gradlew clean
// cd ..
// adb uninstall com.bm
// npx react-native run-android
// import 'react-native-gesture-handler';

