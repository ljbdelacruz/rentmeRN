import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
export class CustomButton4 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.container} onPress={()=>{
                this.props.onClick();
            }}>
              <Image source={require('./img/sphone.png')} style={this.styles.imagecontainer}></Image>
              <Text style={this.styles.text}>{this.props.mytitle}</Text>
            </TouchableOpacity>
          </View>
      );
    }

    styles = StyleSheet.create({
        container: {
            flex:1,
            flexDirection: 'column',
            alignContent: 'center',
          },
          imagecontainer:{
            alignItems:'center',
            alignSelf: 'center',
            width:50,
            height:50,
            borderRadius: 100,
          },
          text:{
            width:'100%',
            flexWrap: 'wrap',
            textAlign:'center'
          }
    });

  }