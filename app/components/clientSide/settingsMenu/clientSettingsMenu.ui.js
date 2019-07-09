import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Image, View , Alert} from 'react-native';
import {CustomButton2} from '../../buttons/customButton2/customButton2.ui'

export class ClientSettingsMenu extends Component {
    constructor(prop){
        super(prop);
        this.baseURL="";
        this.state={
            options:[
                {title:'Account Settings', image:''}
            ]
        }
    }
    render(){
      return (
            <View style={this.styles.content}>
                <TouchableOpacity onPress={()=>{this.props.optionSelected(5)}}>
                    <CustomButton2 mytitle='Account Settings' ></CustomButton2>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.optionSelected(4)}}>
                    <CustomButton2 mytitle='Language' ></CustomButton2>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.optionSelected(3)}}>
                    <CustomButton2 mytitle='Switch to Host' ></CustomButton2>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.optionSelected(1)}}>
                    <CustomButton2 mytitle='Logout' ></CustomButton2>
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