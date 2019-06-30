import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../components/container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../components/container/ads/adsList1/adsList1.ui'
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import Axios from 'axios';
class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    constructor(props){
      super(props)
      this.ads=[]
      this.setTimeout(() => {
        this.ads=[
          {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
          {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}},
          {images:[], title:'Sports Club ', desc:'Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events Perfect for hosting your birthday parties and social events', price:'$400', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}
        ] 
      }, 3000);
      var instance = Axios.create({
        baseURL: 'http://www.mocky.io/v2',
        timeout: 1000,
        headers: {}
      });

      
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={this.styles.container}>
            <ClientDashboardSubPage ads={this.ads} categoryOnClick={(category)=>{
              this.selectCategory(category);
            }} rightButtonPressed={()=>{
              this.selectMenu();
            }} selectAds={(ads)=>{
              this.selectAds(ads);
            }} rightButtonOnClick={(userInfo)=>{
              this.sendUserAMessage(userInfo);
            }} onSelectAds={(ads)=>{
              this.selectRecommendation(ads);
            }}></ClientDashboardSubPage>
          </View>
        );
    }
    styles = StyleSheet.create({
        container:{
            backgroundColor: '#a1abce',
            width:'100%',
            height:'100%',
        },


    });
    selectCategory(category){
      Alert.alert(category.name)
    }
    selectAds(ads){
      this.navigatePages(2, {ads:ads});
    }
    selectRecommendation(ads){
        Alert.alert(ads.title);
    }
    selectMenu(){
      this.navigatePages(1, {});
    }
    sendUserAMessage(userInfo){
      Alert.alert(userInfo.title);
    }
    navigatePages(option, param){
      const {navigate} = this.props.navigation;
      switch(option){
        case 1:
          navigate('Settings');
          break;
        case 2:
            navigate('ManageAds', param)
          break;
      }
    }
    fetchAds(){
      Axios.get('')
    }


  }
export default DashboardPage;

