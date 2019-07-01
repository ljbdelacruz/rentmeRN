import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Alert } from 'react-native';
import {DashboardHeader1} from '../../../header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../../container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../../container/ads/adsList1/adsList1.ui'

export class ClientDashboardSubPage extends Component {
    constructor(prop){
        super(prop);
    }
    updateAds(ads){
      this.props.ads=ads;
    }
    render() {
      this.dest=this.props.ads;
      return (
            <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <Button title='TEST' onPress={()=>{
                          Alert.alert(JSON.stringify(this.props.ads));
                        }}></Button>


                        <DashboardHeader1 categoryOnClick={(category)=>{
                          this.props.categoryOnClick(category);
                        }} rightButtonPressed={()=>{
                            this.props.rightButtonPressed();
                        }}></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1 adsList={this.props.ads} selectAds={(ads)=>{
                            this.props.selectAds(ads);
                          }}
                          rightButtonOnClick={(userInfo)=>{
                            this.props.rightButtonOnClick(userInfo);
                          }}
                          ></AdsList1>
                        </View>
                        <RecommendedContainer1 onSelectAds={(ads)=>{
                          this.props.onSelectAds(ads);
                        }}></RecommendedContainer1>
                      </ScrollView>
                  </View>
          </View>

      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
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
          width:'95%',
          left:'2.5%',
          marginTop:-60,
          zIndex:2
        }
    });

  }