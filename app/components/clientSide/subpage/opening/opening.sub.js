import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {SwiperTutsDisplay} from '../../../tutorial/swiperDisplay.ui'
export class OpeningSub extends Component {
    constructor(prop){
        super(prop);
        this.state={
            data:[
              {desc:"Convenient way of looking for home, dormitory within your work area"}, 
              {desc:"Find the best offered massage, laundry services"}, 
              {desc:"Secure transactions since we verify the person offering the services and also has review from different users"}
            ]
          }
    }

    render() {
      return (
        <View style={this.styles.container}>
            <SwiperTutsDisplay instructions={this.state.data}></SwiperTutsDisplay>
            
        </View>

      );
    }
    styles = StyleSheet.create({
        container: {
            width:'100%',
            height:300,
        }
    });

  }