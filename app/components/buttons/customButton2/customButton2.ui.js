import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
export class CustomButton2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View style={this.styles.container}>
            <View style={this.styles.imagecontainer}></View>
            <Text style={this.styles.text}>{this.props.mytitle}</Text>
          </View>
      );
    }

    styles = StyleSheet.create({
        container: {
            flex:1,
            flexDirection: 'row',
            height: 53,
            width: '100%',
            borderColor:'gray',
            borderBottomWidth:2
          },
          imagecontainer:{
            width:50,
            height:50,
            borderRadius: 100,
            backgroundColor:'red'
          },
          text:{
            marginTop:15,
            marginLeft: 10,
          }
    });

  }