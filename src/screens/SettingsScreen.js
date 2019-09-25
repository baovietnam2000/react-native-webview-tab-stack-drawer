import React, {Component} from 'react';
import {Dimensions,StyleSheet, Text, View} from 'react-native';

export default class SettingsScreen extends Component{
  static navigationOptions ={
    title: 'Setting page'
    
  };
  render () {
    return (
      <View style={styles.container}>
      	<Text> SettingsScreen </Text>
      </View>
      );
  }
  
}

const styles = StyleSheet.create({
 container: {
  flex:1,
  backgroundColor: 'white',
 },
 
});
