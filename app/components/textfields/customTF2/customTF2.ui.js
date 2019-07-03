import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Image, View } from 'react-native';
export class CustomTF2 extends Component {
    constructor(prop){
        super(prop);
        this.viewModel={text:'', placeholder:'', imageSource:'./facebook.png'}
        console.log(this.props.placeholder);
    }
    render(){
      return (
         <View style={styles.usernameTf}>
            <View style={styles.rect} />
            <Image
              style={styles.image}
              source={require(this.viewModel.imageSource)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="rgba(0,0,0,0.1)"
            />
          </View>
      );
    }
    styles = StyleSheet.create({
        usernameTf: {
            height: 43,
            width: '100%',
        },
        rect: {
            left: "0%",
            width: '100%',
            height: 44,
            borderWidth: 1,
            borderColor: "rgba(123,123,123,1)",
            borderRadius: 20
          },
          image: {
            top: 14,
            left: 12,
            width: 16,
            height: 16,
            position: "absolute"
          },
          textInput: {
            top: 14,
            left: "10.91%",
            width: '90%',
            height: 16,
            position: "absolute"
          },

    });

  }