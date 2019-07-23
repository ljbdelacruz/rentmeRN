import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert, TouchableOpacity, TextInput, Text } from 'react-native';
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import {getAds, getCategory, getRecommendedAds} from '../../services/api.service'
import {HostDashboardSub} from '../../components/hostSide/subpage/hostDashboard/hostDashboard.sub'

class CreateAdsPage extends React.Component {
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
        return (
            <View>
                <Text>Create Ads</Text>     
                <TextInput placeholder="Title" />
                <TextInput placeholder="Description" multiline={true} style={{height:100, width:'90%', borderWidth:1, borderColor:'grey', textAlignVertical: 'top', marginLeft:'5%'}} />
                <TextInput placeholder="Price" />
            </View>
        )
        
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
        case 3:
          Alert.alert("Manage Ads")
          break;
        case 4:
          Alert.alert("Reviews")
          break;
      }
    }


  }
export default CreateAdsPage;

