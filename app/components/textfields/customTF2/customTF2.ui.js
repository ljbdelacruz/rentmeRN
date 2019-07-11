import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Image, View } from 'react-native';
export class CustomTF2 extends Component {
    constructor(prop){
        super(prop);
        console.log(this.props.placeholder);
    }
    render(){
      return (
         <View style={this.styles.usernameTf}>
            <View style={this.styles.rect} >
              <Image style={this.styles.image}
                     source={{uri:this.props.image}}/>
              <TextInput
                {...this.props}
                style={this.styles.textInput}
                placeholder={this.props.placeholder}
                placeholderTextColor="rgba(0,0,0,0.1)"
                onChangeText={(text)=>{
                  if(this.props.onChangeText){
                      this.props.onChangeText(text);
                  }            
                }}/>
            </View>
          </View>
      );
    }
    styles = StyleSheet.create({
          usernameTf: {
              height: 49,
              width: '100%',
          },
          rect: {
            width: '100%',
            height:'100%',
            borderRadius: 20,
            flexDirection:'row',
            backgroundColor:'white',
          },
          image: {
            marginTop:'4%',
            marginLeft:10,
            width:'50%',height:'50%',
            flex:0.1,
          },
          textInput: {
            flex:1,
            color:'grey',
          },

    });

  }