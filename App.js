import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginPage from './app/pages/login/login.ui'
import DashboardPage from './app/pages/dashboard/dashboard.page'

const MainNavigator = createStackNavigator({
  // Login: {screen: LoginPage, navigationOptions: {header: null}, key: 'login'}, 
  Dashboard: {screen: DashboardPage, key:'dashboard', navigationOptions: {header: null}}
});
const App = createAppContainer(MainNavigator);
export default App


