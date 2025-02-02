import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginPage from './app/pages/login/login.page'
import DashboardPage from './app/pages/dashboard/dashboard.page'
import SettingsPage  from './app/pages/settings/settings.page'
import ManageAdsPage from './app/pages/manageAds/manageAds.page'
import ExperimentPage  from './app/pages/experiment/experiment.page'
import OpeningPage from './app/pages/opening/opening.page'
import SelectLanguagePage  from './app/pages/selectLanguage/selectLanguage.page'
import RegistrationPage from './app/pages/registration/registration.page'
import CreateAdsPage from './app/pages/createAds/createAds.page'
const MainNavigator = createStackNavigator({
  // Experiment:{screen: ExperimentPage, key:'experiment', navigationOptions: {header: null}},
  CreateAds:{screen: CreateAdsPage, key:'createAds', navigationOptions: {header: null}},
  SelectLanguage:{screen: SelectLanguagePage, key:'selectlanguage', navigationOptions: {header: null}},
  Registration:{screen: RegistrationPage, key:'registration', navigationOptions: {header: null}},
  Opening:{screen: OpeningPage, key:'opening', navigationOptions: {header: null}},
  Login: {screen: LoginPage, navigationOptions: {header: null}, key: 'login'}, 
  Dashboard: {screen: DashboardPage, key:'dashboard', navigationOptions: {header: null}},
  Settings: {screen: SettingsPage, key:'settings', navigationOptions: {header: null}},
  ManageAds: {screen: ManageAdsPage, key:'manageads', navigationOptions: {header: null}},
});
const App = createAppContainer(MainNavigator);
export default App


