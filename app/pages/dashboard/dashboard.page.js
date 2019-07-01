import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../components/container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../components/container/ads/adsList1/adsList1.ui'
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import {getAds} from '../../services/api.service'
class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    constructor(props){
      super(props)
      this.ads=[]
      this.fetchAds();
    }
    componentDidMount(){
    }
    render() {
        const {navigate} = this.props.navigation;
        console.log("test");
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
      // getAds(this.ads)
      // .then(function(response) {
      //   this.ads=response.data;
      //   Alert.alert("Success", JSON.stringify(response.data));
      //   this.refs.child.updateAds(response.data);
      // }).catch(function (error) {
      //   Alert.alert("Error", JSON.stringify(error))
      // });
    }
  }
export default DashboardPage;

