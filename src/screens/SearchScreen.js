import React, {Component} from 'react';
import {Dimensions,StyleSheet, Text, View} from 'react-native';

export default class SearchScreen extends Component{
  static navigationOptions ={
    title: 'Search page'
    
  };
  render () {
    return (
      <View style={styles.container}>
      	<Text> SearchScreen </Text>
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
