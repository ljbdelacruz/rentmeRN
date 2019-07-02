import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Alert } from 'react-native';
import {DashboardHeader1} from '../../../header/DashboardHeader1/dashboardHeader1.ui'
import {RecommendedContainer1} from '../../../container/recommendedContainer1/recommendedContainer.ui'
import {AdsList1} from '../../../container/ads/adsList1/adsList1.ui'
import {getAds} from '../../../../services/api.service'
import * as axios from 'axios';



export class ClientDashboardSubPage extends Component {
    constructor(prop){
        super(prop);
        this.state={
          ads:[]
        }
    }

    componentDidMount(){
      this.updateAds();
      // this.setAdsData([{images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}}])
    }
    updateAds(){
      var self=this;
      getAds(function(data){
        this.setAdsData(data);
      }.bind(this), function(err){
        Alert.alert(JSON.stringify(err))
      }.bind(this))

      // axios.get('/getAds')
      // .then(function(response){
      //   // this.setState({ads:response.data});
      //   // AdsList1.updateComponent(this.state.ads);       
      //   this.setAdsData(response.data)
      // }).catch(function (error){
      //   Alert.alert("Error", JSON.stringify(error))
      // });
    }
    setAdsData(ads){
      this.setState({ads:ads});
    }


    render() {
      this.dest=this.props.ads;
      return (
            <View style={this.styles.container}>
                  <View style={this.styles.mainContainer}>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <Button title='Test' onPress={()=>{
                          this.setAdsData([{images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}}])
                        }}></Button>
                        <DashboardHeader1 categoryOnClick={(category)=>{
                          this.props.categoryOnClick(category);
                        }} rightButtonPressed={()=>{
                            this.props.rightButtonPressed();
                        }}></DashboardHeader1>
                        <View style={this.styles.adsContainer}>
                          <AdsList1 adsList={this.state.ads} selectAds={(ads)=>{
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