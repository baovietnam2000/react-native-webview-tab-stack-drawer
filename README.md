react-native version 0.60.5

npm install --save react-navigation (version 4.0.8)
npm install -g npm (update npm 6.11.3)
npm install --save react-native-gesture-handler
react-native link react-native-gesture-handler
--> react-native unlink react-native-gesture-handler

npm install -save react-navigation-stack
npm install --save react-navigation-tabs
npm install --save react-native-reanimated
react-native link react-native-reanimated
--> react-native unlink react-native-reanimated


--------------------
npm install --save react-navigation-drawer
--------------------
npm install --save react-native-vector-icons
npm install --save react-native-webview

react-native link
restart terminal

error#1: Invariant Violation: requireNativeComponent: "RNCWebView" was not found in the UIManager. #140
--> cd ios --> pod install --> cd .. --> react-native run-ios again
