react-native version 0.60.5

npm install --save react-navigation (version 4.0.8) <br/>
npm install -g npm (update npm 6.11.3) <br/>
npm install --save react-native-gesture-handler <br/>
react-native link react-native-gesture-handler <br/>
--> react-native unlink react-native-gesture-handler <br/>

npm install -save react-navigation-stack <br/>
npm install --save react-navigation-tabs <br/>
npm install --save react-native-reanimated <br/>
react-native link react-native-reanimated <br/>
--> react-native unlink react-native-reanimated <br/>


--------------------
npm install --save react-navigation-drawer <br/>
--------------------
npm install --save react-native-vector-icons <br/>
npm install --save react-native-webview <br/>

react-native link <br/>
restart terminal <br/>

error#1: Invariant Violation: requireNativeComponent: "RNCWebView" was not found in the UIManager. #140 <br/>
--> cd ios --> pod install --> cd .. --> react-native run-ios again <br/>
