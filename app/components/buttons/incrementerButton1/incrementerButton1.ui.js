import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image, TouchableOpacity } from 'react-native';
export class IncrementerButton1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                  <TouchableOpacity style={this.styles.imageSize}>
                    <Image source={require('./img/minus.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
                  <TouchableOpacity style={this.styles.imageSize}>
                    <Image source={require('./img/add.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
              </View>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
        },
        imageSize:{
            width:30,
            height:30
        }
    });

  }