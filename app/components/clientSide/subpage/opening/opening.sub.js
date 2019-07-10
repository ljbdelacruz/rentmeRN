import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import {SwiperTutsDisplay} from '../../../tutorial/swiperDisplay.ui'
import {CustomButton1} from '../../../../components/buttons/customButton1/customButton1.ui'
import {ImageButton1} from '../../../buttons/imageButton/imageButton.ui'

export class OpeningSub extends Component {
    constructor(prop){
        super(prop);
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
            data:[
              {desc:"Convenient way of looking for home, dormitory within your work area", image: global.assetURL+'/images/fingerprint.png'}, 
              {desc:"Find the best offered massage, laundry services", image: global.assetURL+'/images/qr-code.png'},
              {desc:"Secure transactions since we verify the person offering the services and also has review from different users", image:global.assetURL+'/images/fingerprint.png'}
            ],
            display:{text:"Do not have an account yet Register? ", button:'  HERE', sub:"Sign in using the following:", fbImage: global.assetURL+'/images/facebook.png', gmImage: global.assetURL+'/images/gmail.png'}
          }
    }
    render() {
      return (
        <View>
          <View style={this.styles.containerHeader}>
              <SwiperTutsDisplay instructions={this.state.data} ></SwiperTutsDisplay>
          </View>
          <View style={this.styles.button}>
            <CustomButton1 title='Login to your account' onPress={()=>{Alert.alert("Go to Login")}}></CustomButton1>
          </View>
          <View style={this.styles.containerSub1}>
            <View style={this.styles.containerSub}>
                  <Text>{this.state.display.text}</Text>
                  <TouchableOpacity onPress={()=>{Alert.alert("Success", "Pressed HERE")}}>
                    <Text style={this.styles.hereButton}>{this.state.display.button}</Text>
                  </TouchableOpacity>
            </View>
            <Text>{this.state.display.sub}</Text>
            <View style={[this.styles.containerSub, this.styles.buttonContainer]}>
              <View style={this.styles.socialButton}>
                <ImageButton1 onclick={()=>{
                  Alert.alert("Success", "Facebook Clicked!");
                }} image={this.state.display.fbImage}></ImageButton1>
              </View>
              <View style={this.styles.socialButton}>
                <ImageButton1 onclick={()=>{
                  Alert.alert("Success", "Gmail Clicked!");
                }} image={this.state.display.gmImage}></ImageButton1>
              </View>
            </View>
          </View>
        </View>
      );
    }
    styles = StyleSheet.create({
        containerHeader: {
            width:'100%',
            height:300,
            backgroundColor:'#B0F4E6',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
        },
        containerBody:{
          width:'100%',
        },
        containerSub1:{
          width:'90%',
          marginLeft:'5%',
          alignItems: 'center', justifyContent: 'center'
        },
        containerSub:{
          flexDirection:'row',
        },
        button:{
          marginTop:10,
          width:'90%',
          height:50,
          marginLeft:'5%' ,
        },
        buttonContainer:{
          marginTop:10,
        },
        hereButton:{
          color:'blue'         
        },
        socialButton:{
          marginTop:10,
          height:50,
          width:50,
          marginRight:10,
        }
    });

  }