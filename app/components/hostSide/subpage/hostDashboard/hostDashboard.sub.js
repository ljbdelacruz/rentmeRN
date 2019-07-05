import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {CustomButton4} from '../../../buttons/customButton4/customButton4.ui'

export class HostDashboardSub extends Component {
    constructor(prop){
        super(prop);
        this.state={
          buttons:[{title:'Manage Ads', value:3, param:{}}, {title:'Reviews', value:4, param:{}}, {title:'Create Ads', value:5, param:{}}]
        }
    }
    render() {
      return(
        <View>
            <View style={this.styles.headContainer}>
              <View style={this.styles.headDashboard}></View>
            </View>
            <View style={this.styles.menuContainer}>
              {this.state.buttons.map(button => {
                  return (
                    <View style={this.styles.btnContainer}>
                      <CustomButton4 mytitle={button.title} onClick={()=>{
                        this.props.navigatePages(button.value, button.param)
                      }}></CustomButton4>
                    </View>
                  );
              })}
            </View>
        </View>
      );
    }
    styles = StyleSheet.create({
      menuContainer:{
        flexDirection: 'row',
        marginTop: 10,
      },
      btnContainer:{
        flex:1,
        width:60,
        height:70,
      },
      headContainer:{
        height:250,
        width:'100%'
      },
      headDashboard:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        height:'100%',
        width:'100%',
        backgroundColor:'#B0F4E6',
        zIndex:1,
      },        
    });


  }