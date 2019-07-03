import {CustomTF1} from '../../components/textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
// import {SubCategoryButton1} from '../../components/buttons/subCategoryButton1/subCategoryButton1.ui'
import {SubCategoryContainer1} from '../../components/clientSide/subcatcontainer/subcategoryContainer1.ui'
import {ClientManageAdsSub} from '../../components/clientSide/subpage/manageAds/clientManageAds.sub'
class ManageAdsPage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props){
        super(props);
        this.params=this.props.navigation.state.params;
        this.data={
          //setting up the data to be passed to the ads
          description:{
                       title:this.params.ads.title,
                       desc:this.params.ads.desc,
                       price:this.params.price,
                       priceSubtitle:this.params.priceSubtitle,
                       review:this.params.ads.review.review,
                       reviewer:this.params.ads.review.reviewer
                      },
        }
    }
    render() {
      return (
        <View>
          <ClientManageAdsSub ad={this.data.description} leftOnClick={(ad)=>{
            Alert.alert("Renting this item "+ad.title);
          }} rightOnClick={()=>{
            this.navigateOption(1);
          }}></ClientManageAdsSub>          
        </View>
      );
    }


    styles = StyleSheet.create({
      subcatmargin:{
        marginLeft:10,        
      }
    });
    fetchCategory(){

    }
    fetchReview(){
      
    }
    navigateOption(option){
      const {navigate} = this.props.navigation;
      switch(option){
        case 1:
          navigate('Dashboard');
          break;
      }
    }

}
export default ManageAdsPage;

