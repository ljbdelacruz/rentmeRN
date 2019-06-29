import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
export class CustomButton2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View style={this.styles.container}>
              <View style={this.styles.subcontainer}>
                <Text style={this.styles.price}>$2000.00</Text>
                <Text style={this.styles.subtitle}>Earned</Text>
              </View>

          </View>
      );
    }

    styles = StyleSheet.create({
       container:{
           width:'100%',
           height:'100%'
       },
       subcontainer:{
           borderTopRightRadius: 10,
           borderBottomRightRadius: 10,
           flexDirection: 'column',
       },
       price:{
           fontSize:15
       },
       subtitle:{
           fontSize:10
       }

    });

  }