import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
export class ImageButton1 extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
      return (
          <TouchableOpacity style={this.styles.button} onPress={()=>{
              this.props.onclick();
          }}>
              <Image style={this.styles.button} source={{uri:this.props.image}}></Image>
          </TouchableOpacity>
      );
    }
    styles = StyleSheet.create({
        button:{
            width:'100%',
            height:'100%',
        }
    });

  }