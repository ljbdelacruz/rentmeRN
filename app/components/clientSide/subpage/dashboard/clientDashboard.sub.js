import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Alert } from 'react-native';
import {DashboardHeader1} from '../../../header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../../container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../../container/ads/adsList1/adsList1.ui'
import {getAds, getCategory, getRecommendedAds} from '../../../../services/api.service'

export class ClientDashboardSubPage extends Component {
    constructor(prop){
        super(prop);
        this.state={
          ads:[],
          adsFetchFinish:false,
          category:[],
          recommendedAds:[],
        }
        
    }
    componentDidMount(){
      this.fetchData();
    }

    render() {
      this.dest=this.props.ads;
      return (
            <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <DashboardHeader1 categories={this.state.category} categoryOnClick={(category)=>{
                          this.selectCategory(category);
                        }} rightButtonPressed={()=>{
                          this.selectMenu();
                        }}></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1 aiHide={this.state.adsFetchFinish} adsList={this.state.ads} selectAds={(ads)=>{
                            this.selectAds(ads);
                          }}
                          rightButtonOnClick={(userInfo)=>{
                            this.sendUserAMessage(userInfo);
                          }}></AdsList1>
                        </View>
                        <RecommendedContainer1 ads={this.state.recommendedAds} onSelectAds={(ads)=>{
                            this.selectRecommendation(ads);
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
          zIndex:2,
        }
    });

    //click handlers
    selectCategory(category){
      Alert.alert(category.name)
    }
    selectAds(ads){
      this.props.navigatePages(2, {ads:ads});
    }
    selectRecommendation(ads){
      this.props.navigatePages(2, {ads:ads});
    }
    selectMenu(){
      this.props.navigatePages(1, {});
    }
    sendUserAMessage(userInfo){
      Alert.alert(userInfo.title);
    }

    //data fetching in this sub page
    fetchData(){
      this.fetchAds();
      this.fetchRecommendedAds();
      this.fetchCategory();
    }
    fetchAds(){
      getAds(function(data){
        this.setState({ads:data});
        this.setState({adsFetchFinish:true});
      }.bind(this), function(err){
        this.fetchAds();
      }.bind(this))
    }
    fetchCategory(){
      getCategory(function(data){
        this.setState({category:data});
      }.bind(this), function(err){
        this.fetchCategory();
      }.bind(this))
    }
    fetchRecommendedAds(){
      getRecommendedAds(function(data){
        this.setState({recommendedAds:data})
      }.bind(this), function(err){
        this.fetchRecommendedAds();
      }.bind(this))
    }



  }