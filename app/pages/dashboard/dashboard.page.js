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
        type:1,
      }
    }
    componentDidMount(){
    }

    render() {        
        const {navigate} = this.props.navigation;
        if(this.state.type == 1){
          return (
            <View>
              <ClientDashboardSubPage navigatePages={(option, param)=>{
                this.navigationPages(option, param);
              }}></ClientDashboardSubPage>
            </View>
          )
        }else{
          return (
            <View>
              <HostDashboardSub></HostDashboardSub>
            </View>
          )
        }
    }
    styles = StyleSheet.create({
        container:{
            backgroundColor: '#a1abce',
            width:'100%',
            height:'100%',
        },
    });

    navigationPages(option, param){
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


  }
export default DashboardPage;

