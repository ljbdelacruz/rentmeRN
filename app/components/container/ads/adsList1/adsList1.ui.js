import React, { Component } from 'react';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import {AdsDisplay1} from '../adsDisplay1/adsDisplay1.ui'
import {ViewAdInfo1} from '../../modals/viewAdInfo/viewAdInfo.modal'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export class AdsList1 extends Component {
    constructor(prop){
        super(prop);
        adsList=[{title:'Club House', price:'$40', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', image:[]}, 
          {title:'Jojos Crib', price:'$20', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', images:[]},
          {title:'Home Service Spa', price:'$20', description:'Massage Service with Sunspa treatment', images:[]}
        ]
    }
    render() {
      return (
        <View>
             {adsList.map(ads => {
                    return (
                        <TouchableWithoutFeedback style={this.styles.adViews}>
                           <AdsDisplay1 mytitle={ads.title} mydesc={ads.description} myprice={ads.price} mysubdesc='Per Night'></AdsDisplay1>
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