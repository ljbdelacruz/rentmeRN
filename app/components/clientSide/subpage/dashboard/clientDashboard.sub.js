import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Alert } from 'react-native';
import {DashboardHeader1} from '../../../header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../../container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../../container/ads/adsList1/adsList1.ui'

export class ClientDashboardSubPage extends Component {
    constructor(prop){
        super(prop);
        this.state={
          ads:[],
          category:[],
          recommendedAds:[]
        }
    }
    render() {
      this.dest=this.props.ads;
      return (
            <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <DashboardHeader1 categories={this.props.category} categoryOnClick={(category)=>{
                          this.props.categoryOnClick(category);
                        }} rightButtonPressed={()=>{
                            this.props.rightButtonPressed();
                        }}></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1 aiHide={this.props.aiAds} adsList={this.props.ads} selectAds={(ads)=>{
                            this.props.selectAds(ads);
                          }}
                          rightButtonOnClick={(userInfo)=>{
                            this.props.rightButtonOnClick(userInfo);
                          }}></AdsList1>
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