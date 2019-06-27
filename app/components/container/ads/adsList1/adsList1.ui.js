import React, { Component } from 'react';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import {AdsDisplay1} from '../adsDisplay1/adsDisplay1.ui'
import {ViewAdInfo1} from '../../modals/viewAdInfo/viewAdInfo.modal'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export class AdsList1 extends Component {
    constructor(prop){
        super(prop);

        this.setState({
          adsList:[]
        })
        // adsList=[
        //   {images:[], title:'Jojos Crib', desc:'3 Bed Room All', price:'$40', priceSubtitle:'Per Night', owner:{title:'Detective Pikachu', subtitle:'Owner', profileImage:'', rightImage:''}},
        //   {images:[], title:'Club House', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', price:'$40', priceSubtitle:'Per Night', owner:{title:'Squirtle Mash', subtitle:'Co-Host', profileImage:'', rightImage:''}}
        // ]
    }
    render() {
      return (
        <View>
             {this.props.adsList.map(ads => {
                    return (
                        <TouchableWithoutFeedback style={this.styles.adViews}>
                           <AdsDisplay1 adInfo={ads}></AdsDisplay1>
                        </TouchableWithoutFeedback>
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