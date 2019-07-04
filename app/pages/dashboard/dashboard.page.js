import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import {getAds, getCategory, getRecommendedAds} from '../../services/api.service'
import {HostDashboardSub} from '../../components/hostSide/subpage/hostDashboard/hostDashboard.sub'

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
        recommendedAds:[],
        type:1,

      }
      this.ads=[]
      this.fetchAds();
    }
    componentDidMount(){
      this.fetchAds();
    }

    render() {        
        const {navigate} = this.props.navigation;
        if(this.state.type == 1){
          return (<View></View>)
        }

        return (
          <View style={this.styles.container}>
            {

            }
            <ClientDashboardSubPage aiAds={this.state.adsFetchFinish} ads={this.state.ads} category={this.state.category} rads={this.state.recommendedAds} categoryOnClick={(category)=>{
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


            <HostDashboardSub></HostDashboardSub>
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
      this.navigatePages(2, {ads:ads});
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
        this.setState({recommendedAds:data})
      }.bind(this), function(err){
        Alert.alert("Failed",JSON.stringify(err));
      }.bind(this))


    }
  }
export default DashboardPage;

