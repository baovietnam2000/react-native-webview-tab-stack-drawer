import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';


export default class WebViewScreen extends Component{
  static navigationOptions ={
    title: 'Home page'
    
  };
  render (){
    return (
            <WebView
            source={{uri: 'http://mariamother.com'}}
           
            //source={require('../external/resources/MDB-Pro_4.8.8/index.html')}
            
            /> 
    );
  }
}

const styles = StyleSheet.create({
 container: {
  flex:1,
  backgroundColor: 'white',
  marginVertical: 30,
 },
 
});


