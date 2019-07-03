import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import {DashboardHeader1} from '../../components/header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../components/container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../components/container/ads/adsList1/adsList1.ui'
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import {getAds, getCategory, getRecommendedAds} from '../../services/api.service'

class DashboardPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    constructor(props){
      super(props)
      this.state={
        ads:[],
        adsFetchFinish:false,
        category:[],
        recommendedAds:[]
      }
      this.ads=[]
      this.fetchAds();
    }
    componentDidMount(){
      this.fetchAds();
    }

    render() {        
        const {navigate} = this.props.navigation;
        return (
          <View style={this.styles.container}>
            <ClientDashboardSubPage aiAds={this.state.adsFetchFinish} ads={this.state.ads} category={this.state.category} categoryOnClick={(category)=>{
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
      getAds(function(data){
        this.setState({ads:data});
        this.setState({adsFetchFinish:true});
      }.bind(this), function(err){
        Alert.alert("Failed",JSON.stringify(err));
        this.setState({adsFetchFinish:true});
      }.bind(this))
      getCategory(function(data){
        this.setState({category:data});
      }.bind(this), function(err){
        Alert.alert("Failed",JSON.stringify(err));
      }.bind(this))
      getRecommendedAds(function(data){
        
      }.bind(this), function(err){

      }.bind(this))


    }
  }
export default DashboardPage;

