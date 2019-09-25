import React, {Component} from 'react';
import {Dimensions,StyleSheet, Text, View} from 'react-native';

export default class GameScreen extends Component{
  static navigationOptions ={
    title: 'Game page'
    
  };
  render () {
    return (
      <View style={styles.container}>
      	<Text> GameScreen </Text>
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
