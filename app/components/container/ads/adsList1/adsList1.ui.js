import React, { Component } from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Alert, ActivityIndicator, FlatList, Text } from 'react-native';
import {AdsDisplay1} from '../adsDisplay1/adsDisplay1.ui'
// import {AdsRow1} from '../../../customrow/adsrow1/adsrow1.ui'

export class AdsList1 extends Component {
    constructor(prop){
        super(prop);
    }

    render() {
      if(this.props.adsList.length > 0){
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
                <ActivityIndicator hidesWhenStopped={true} animating={!this.props.aiHide} size="large" color="#0000ff" />
          </View>
        );
      }else{
        return (<View><Text>No Item</Text></View>);
      }

    }
    setData(items){
      this.ads=items;
    }

    styles = StyleSheet.create({
        adViews:{
            marginBottom:10,
        }
    });


  }