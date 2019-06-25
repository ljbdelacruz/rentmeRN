import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View } from 'react-native';
import {AdsDisplay1} from '../adsDisplay1/adsDisplay1.ui'
export class AdsList1 extends Component {
    constructor(prop){
        super(prop);
        adsList=[{title:'Club House', price:'$40', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', image:[]}, 
                 {title:'Jojos Crib', price:'$20', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', images:[]},
                ]
    }
    render() {
      return (
        <View>
             {adsList.map(ads => {
                    return (
                        <View style={this.styles.adViews}>
                           <AdsDisplay1 mytitle={ads.title} mydesc={ads.description} myprice={ads.price} mysubdesc='Per Night'></AdsDisplay1>
                        </View>
                    );
              })}
        </View>
      );
    }
    styles = StyleSheet.create({
        adViews:{
            marginBottom:10
        },
    });

  }