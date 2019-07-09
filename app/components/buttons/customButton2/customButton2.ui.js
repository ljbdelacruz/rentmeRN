import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
export class CustomButton2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View>
            <TouchableOpacity style={this.styles.container}>
              <Image source={require('./img/sphone.png')} style={this.styles.imagecontainer}></Image>
              {/* <Image source={{uri:this.props.image}} style={this.styles.imagecontainer}></Image> */}
              <Text style={this.styles.text}>{this.props.mytitle}</Text>
            </TouchableOpacity>
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
          },
          text:{
            marginTop:15,
            marginLeft: 10,
          }
    });

  }