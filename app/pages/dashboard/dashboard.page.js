import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {AdsDisplay1} from '../../components/container/ads/adsDisplay1/adsDisplay1.ui'
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'

class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={this.styles.container}>              
              <DashboardHeader1></DashboardHeader1>
              {/* <View style={this.styles.dashboardDisplay}>
                <ScrollView>
                  <AdsDisplay1></AdsDisplay1>
                  <AdsDisplay1></AdsDisplay1>
                </ScrollView>
              </View> */}
          </View>
        );
    }
    styles = StyleSheet.create({
        container:{
            backgroundColor: '#a1abce',
            width:'100%',
            height:'100%',
            position:'absolute',
            top:0
        },
        dashboardDisplay:{
          width:'90%',
          left: '5%',
          position:'absolute',
          top:150,
          zIndex:2,
        },

    });
  }
  export default DashboardPage;

