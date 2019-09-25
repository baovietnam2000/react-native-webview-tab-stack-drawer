import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//import {WebView} from 'react-native-webview';
//import WebViewScreen from './src/screens/WebViewScreen';
import AppMixNav from './src/navigations/MixNav';

console.disableYellowBox =true;

export default class AppQA extends Component{
  render () {
    return (
      <AppMixNav />
      );
  }
  
}

