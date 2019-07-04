import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {CustomButton4} from '../../../buttons/customButton4/customButton4.ui'

export class HostDashboardSub extends Component {
    constructor(prop){
        super(prop);
        this.state={
        }
    }
    render() {
      return(
        <View>
            <Text>Host Dashboard</Text>
            <View style={this.styles.menuContainer}>
              <View style={this.styles.btnContainer}>
                <CustomButton4 mytitle='Manage Ads' onClick={()=>{
                  this.props.navigatePages(3)
                }}></CustomButton4>
              </View>
              <View style={this.styles.btnContainer}>
                <CustomButton4 mytitle='Reviews' onClick={()=>{
                  this.props.navigatePages(4)
                }}></CustomButton4>
              </View>
            </View>
        </View>
      );
    }
    styles = StyleSheet.create({
      menuContainer:{
        flexDirection: 'row',
      },
      btnContainer:{
        flex:1,
        width:60,
        height:70,
      }        
    });


  }