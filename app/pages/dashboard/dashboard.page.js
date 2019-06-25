import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {AdsDisplay1} from '../../components/container/ads/adsDisplay1/adsDisplay1.ui'
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../components/container/recommendedContainer1/recommendedContainer.ui'

import {AdsList1} from '../../components/container/ads/adsList1/adsList1.ui'
class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <DashboardHeader1></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1></AdsList1>
                        </View>
                        <RecommendedContainer1></RecommendedContainer1>
                      </ScrollView>
                  </View>
          </View>
        );
    }
    styles = StyleSheet.create({
        container:{
            backgroundColor: '#a1abce',
            width:'100%',
            height:'100%',
            position:'absolute',
            top:0,
            zIndex:1
        },
        scrollview:{
          width:'100%',
        },
        mainContainer:{
          flex:1,
          width:'100%',
          zIndex:1,
        },
        adsContainer:{
          width:'90%',
          left:'5%',
          marginTop:-60,
          zIndex:2
        }


    });
  }
  export default DashboardPage;

