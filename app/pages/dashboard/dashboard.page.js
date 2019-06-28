import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../components/container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../components/container/ads/adsList1/adsList1.ui'
import {ViewAdInfo1} from '../../components/container/modals/viewAdInfo/viewAdInfo.modal'

class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    constructor(props){
      super(props)
      this.ads=[
        {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
        {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}
      ]
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <DashboardHeader1 categoryOnClick={(category)=>{
                          this.selectCategory(category);
                        }}></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1 adsList={this.ads} selectAds={(ads)=>{
                            this.selectAds(ads);
                          }}></AdsList1>
                        </View>
                        <RecommendedContainer1 onSelectAds={(ads)=>{
                          this.selectRecommendation(ads);
                        }}></RecommendedContainer1>
                        <ViewAdInfo1 isVisible={false}></ViewAdInfo1>
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
          width:'95%',
          left:'2.5%',
          marginTop:-60,
          zIndex:2
        }


    });
    selectCategory(category){
      Alert.alert(category.name)
    }
    selectAds(ads){
      Alert.alert(ads.title);
    }
    selectRecommendation(ads){
        Alert.alert(ads.title);
    }


  }
export default DashboardPage;

