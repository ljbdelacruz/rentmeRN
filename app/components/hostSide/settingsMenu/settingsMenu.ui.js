import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Image, View , Alert} from 'react-native';
import {CustomButton2} from '../../buttons/customButton2/customButton2.ui'

export class HostSettingsMenu extends Component {
    constructor(prop){
        super(prop);
    }
    render(){
      return (
            <View style={this.styles.content}>
                <TouchableOpacity onPress={()=>{Alert.alert("Language Pressed!", "Pressing Login");}}>
                    <CustomButton2 mytitle='Language' ></CustomButton2>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert("Profile Settings", "Pressing Login");}}>
                    <CustomButton2 mytitle='Profile Settings' ></CustomButton2>
                </TouchableOpacity>
            </View>
      );
    }
    styles = StyleSheet.create({
                content:{
            flex:1,
            width:'100%',
        },
    });

  }