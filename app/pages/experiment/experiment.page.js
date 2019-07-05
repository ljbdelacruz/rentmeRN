import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from "react-native-web-swiper";
import {HostTutsDisplay} from '../../components/tutorial/host/hostTuts1.sub'
import {SwiperTutsDisplay} from '../../components/tutorial/swiperDisplay.ui'
class ExperimentPage extends React.Component {
    constructor(props){
        super(props);
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
export default ExperimentPage;

