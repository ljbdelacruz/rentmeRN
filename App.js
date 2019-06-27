import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginPage from './app/pages/login/login.page'
import DashboardPage from './app/pages/dashboard/dashboard.page'
import SettingsPage  from './app/pages/settings/settings.page'
import ManageAdsPage from './app/pages/settings/settings.page'

const MainNavigator = createStackNavigator({
  // Login: {screen: LoginPage, navigationOptions: {header: null}, key: 'login'}, 
  // Dashboard: {screen: DashboardPage, key:'dashboard', navigationOptions: {header: null}},
  // Settings: {screen: SettingsPage, key:'settings', navigationOptions: {header: null}},
  ManageAds: {screen: ManageAdsPage, key:'manageads', navigationOptions: {header: null}}
});
const App = createAppContainer(MainNavigator);
export default App


