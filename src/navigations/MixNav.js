import React, {Component} from 'react';
import {Dimensions,StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator,DrawerOpen} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import WebViewScreen from '../screens/WebViewScreen';
import GameScreen from '../screens/GameScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: WebViewScreen
  },

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-home" color={tintColor} size={24}/>
    )
};

const GameStack = createStackNavigator({
  Game: {
    screen: GameScreen
  },

});

GameStack.navigationOptions = {
  tabBarLabel: 'Game',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-heart" color={tintColor} size={24}/>
    )
};
const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen
  },

});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-search" color={tintColor} size={24}/>
    )
};
const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen
  },

});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-settings" color={tintColor} size={24}/>
    )
};

const AppTabNavigator = createBottomTabNavigator(
{
  HomeStack,
  GameStack,
  SearchStack,
  SettingsStack
},
{
  initialRouteName: 'HomeStack',
  activeColor: '#fff',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#fff' },
  shifting: true
}
);
export default AppMixNav = createAppContainer(AppTabNavigator);
/*
export default class MixNav extends Component{
  render () {
    return (
      <WebViewScreen />
      );
  }
  
}
*/
