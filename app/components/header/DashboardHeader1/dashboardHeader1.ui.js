import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, View, Text, Button, Alert } from 'react-native';
import {CustomTF1} from '../../textfields/customTF1/customTF1.ui'
import {CategoryContainer1} from '../../container/categoryContainer1/categoryContainer1.ui'
import {CustomButton1} from '../../buttons/customButton1/customButton1.ui'
import {MenuButton1} from '../../buttons/menuButton1/menuButton1.ui'
export class DashboardHeader1 extends Component {
    constructor(props){
        super(props)
    }
    render(){
      return (
            <View>
                <View style={this.styles.headContainer}>
                    <View style={this.styles.headDashboard}>
                        <View style={this.styles.container1}>
                          <Text style={this.styles.menuLabel}>Rent Me App</Text>
                          <View style={this.styles.menuButtonFlex}>
                              <View style={this.styles.menuButton}>
                                <MenuButton1 onClick={()=>{
                                  this.props.rightButtonPressed();
                                }}></MenuButton1>
                              </View>
                          </View>                 
                        </View>
                        <View style={this.styles.container2}>
                          <View style={this.styles.searchboxContainer}>
                            <CustomTF1 onChangeText={(text)=>{
                                Alert.alert(text);                              
                            }} placeholder="What Are you looking for?"></CustomTF1>
                          </View>
                          <CategoryContainer1 categories={this.props.categories} categoryOnClick={(category)=>{
                            this.props.categoryOnClick(category);
                          }}></CategoryContainer1>                      
                        </View>
                    </View>

                </View>
            </View>
      );
    }
    styles = StyleSheet.create({
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
          container1:{
            marginTop: 10,
            marginLeft:'5%',
            width:'90%',
            height:50,
            flex:0.5,
            flexDirection: 'row',
          },
          container2:{
            flex:1,
          },
          menuLabel:{
            flex:3,
          },
          menuButtonFlex:{
            flex:0.3,
          },
          menuButton:{
            width:30,
            height:30
          },
          searchboxContainer:{
            width:'96%',
            marginLeft: '2%',

          }
    });

  }