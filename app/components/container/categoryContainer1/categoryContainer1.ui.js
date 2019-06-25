import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import {CustomButton1} from '../../buttons/customButton1/customButton1.ui'


export class CategoryContainer1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <View style={this.styles.container}>
              <ScrollView horizontal={true} style={this.styles.scrollviewContainer}>
                <CustomButton1 title="Car"></CustomButton1>
                <CustomButton1 title="House"></CustomButton1>
                <CustomButton1 title="Services"></CustomButton1>
              </ScrollView>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:45,
        },
        scrollviewContainer:{
            flex:1,
            marginTop: 5,
            marginLeft:10
        },
        buttons:{
            backgroundColor:'blue',
            marginRight: 10
        }


    });

  }