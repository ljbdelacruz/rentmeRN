/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage, navigationOptions: {header: null}, key: 'login'}, 
  Dashboard: {screen: DashboardPage, key:'dashboard', navigationOptions: {header: null}}
});
const App = createAppContainer(MainNavigator);
export default App


