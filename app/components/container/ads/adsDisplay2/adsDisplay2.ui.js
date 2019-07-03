import React, { Component } from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
export class AdDisplay2 extends Component {
    constructor(props){
        super(props)
        /*
            VM:
            vm:{ image:'', title:'', price:'$20' }
                        
        */
    }
    render() {
      return (
          <View style={this.styles.container}>
                <View style={this.styles.upperContainer}></View>
                <Image source={}></Image>
                <View style={this.styles.lowerContainer}>
                    <Text style={this.styles.titleAd}>{this.props.mytitle}</Text>
                    <Text style={this.styles.price}>{this.props.myprice}</Text>
                </View>
          </View>          
      );
    }
    styles = StyleSheet.create({
        container: {
            flex:1,
            flexDirection: 'column',
            borderColor:"#fff", 
            backgroundColor: '#fff',
            borderWidth: 1, 
            padding: 10,
            borderRadius: 10,
            width:'100%',
            height:'100%',
            //shadow design
            shadowOffset:{  width: 1,  height: 1,  },
            shadowColor: 'gray',
            shadowOpacity: 1.0,
        },
        upperContainer:{
            flex:2,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        lowerContainer:{
            flex:0.5
        },
        titleAd:{
            fontSize:15,
        },
        price:{
            fontSize:8
        }


    });

  }