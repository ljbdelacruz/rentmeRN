import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View } from 'react-native';
export class CustomButton2 extends Component {
    constructor(prop){
        super(prop);
    }

    render() {
      return (
        <View style={styles.customButton2}>
          <View style={styles.rect} />
          <Text style={styles.text}>Settings</Text>
        </View>
      );
    }
    styles = StyleSheet.create({
        customButton2: {
            flex:1,
            flexDirection: 'row',
            height: 63,
            width: '100%',
          },
          rect: {
            flex:0.5,
            width:50,
            height:50,
            borderRadius: '100%',            
          },
          text: {
            flex:1
          },
    });

  }