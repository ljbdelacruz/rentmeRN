import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button, Text } from 'react-native';
import {AdDisplay2} from '../ads/adsDisplay2/adsDisplay2.ui'

export class RecommendedContainer1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <View style={this.styles.container}>
              <Text>Recommended</Text>
              <View style={this.styles.subContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scrollviewContainer}>
                    <View style={this.styles.adContainer}>
                        <AdDisplay2></AdDisplay2>
                    </View>
                    <View style={this.styles.adContainer}>
                        <AdDisplay2></AdDisplay2>
                    </View>
                    <View style={this.styles.adContainer}>
                        <AdDisplay2></AdDisplay2>
                    </View>
                </ScrollView>
              </View>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:200,
        },
        subContainer:{
            flex:1,
            flexDirection: 'row'
        },
        scrollviewContainer:{
            marginTop: 5,
            marginLeft:10
        },
        adContainer:{
            width:150,
            height:150
        }


    });

  }