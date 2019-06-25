import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View } from 'react-native';
export class CustomButton1 extends Component {
    constructor(prop){
        super(prop);
    }

    render() {
      return (
        <View style={this.styles.b1container}>
            <View style={this.styles.mycontainer}>
              <Button style={this.styles.container} {...this.props}></Button>
            </View>
        </View>
      );
    }
    styles = StyleSheet.create({
        b1container:{
            width:'100%',
            height:40
        },
        mycontainer:{
          ...Platform.select({
              ios: {
                backgroundColor:'#fff',
                width:'100%',
                height:'100%',
                borderRadius: 10,
                shadowOffset:{  width: 1,  height: 1,  },
                shadowColor: 'gray',
                shadowOpacity: 1.0,
              },
            })
        },
        container: {
            width:'100%',
            height: '100%', 
            backgroundColor: '#fff',
            ...Platform.select({
                android: {
                  shadowOffset:{  width: 1,  height: 1,  },
                  shadowColor: 'gray',
                  shadowOpacity: 1.0,
                },
            }),
            borderRadius: 10,
        },

    });

  }