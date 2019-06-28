import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
export class RentButton1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
              <TouchableOpacity style={this.styles.button1} onPress={ this.props.leftOnClick }>
                  <Text>{this.props.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={this.styles.button2} onPress={ this.props.cancelOnClick }>
                  <Text>{this.props.cancelImage}</Text>
              </TouchableOpacity>
              </View>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            flexDirection: 'row',
        },
        button1:{
            flex:1,
            backgroundColor:'black',
            borderRadius: 10,
            marginRight: 2,
        },
        button2:{
            flex:0.5,
            backgroundColor:'yellow',
            borderRadius:10
        }

    });

  }