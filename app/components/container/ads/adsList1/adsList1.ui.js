import React, { Component } from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import {AdsDisplay1} from '../adsDisplay1/adsDisplay1.ui'

export class AdsList1 extends Component {
    constructor(prop){
        super(prop);
        // this.state={
        //   adsList:[]
        // }
        this.setState({
          adsList:[]
        })
    }
    // updateComponent(data){
    //   Alert.alert(data);
    //   this.setState({adsList:data})
    // }
    render() {
      return (
        <View>
             {this.props.adsList.map(ads => {
                    return (
                        <TouchableOpacity style={this.styles.adViews} onPress={()=>{
                          this.props.selectAds(ads);
                        }}>
                           <AdsDisplay1 adInfo={ads} rightButtonOnClick={(userInfo)=>{
                             this.props.rightButtonOnClick(userInfo);
                           }}></AdsDisplay1>
                        </TouchableOpacity>
                    );
              })}
        </View>
      );
    }
    setData(items){
      this.ads=items;
    }

    styles = StyleSheet.create({
        adViews:{
            marginBottom:10
        },
    });


  }