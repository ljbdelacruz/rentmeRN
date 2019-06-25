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
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scrollviewContainer}>
                <View style={this.styles.buttons}>
                    <CustomButton1 title="Car" ></CustomButton1>
                </View>
                <View style={this.styles.buttons}>
                    <CustomButton1 title="Housing" ></CustomButton1>
                </View>
                <View style={this.styles.buttons}>
                    <CustomButton1 title="Services" ></CustomButton1>
                </View>
                <View style={this.styles.buttons}>
                    <CustomButton1 title="Equipments" ></CustomButton1>
                </View>
                <View style={this.styles.buttons}>
                    <CustomButton1 title="Dorm" ></CustomButton1>
                </View>

              </ScrollView>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:45,
        },
        scrollviewContainer:{
            marginTop: 5,
            marginLeft:10
        },
        buttons:{
            marginRight: 10,
            width:100,
            height:50
        }


    });

  }