import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Alert} from 'react-native';

export class CustomTF1 extends Component {
    render(){
      return (
        <TextInput style={this.styles.container}  {...this.props}  onChangeText={(text)=>{
            if(this.props.onChangeText){
                this.props.onChangeText(text);
            }            
        }}/>
      );
    }
    styles = StyleSheet.create({
        container: {
            height: 40, 
            borderColor:"#fff", 
            backgroundColor: '#fff',
            borderWidth: 1, 
            padding: 10,
            borderRadius: 20,
            width:'100%',
            //shadow design
            ...Platform.select({
                ios:{
                    shadowOffset:{  width: 5,  height: 5,  },
                    shadowColor: '#8e8e93',
                    shadowOpacity: 0.5,                    
                },
                android: {
                    shadowOffset:{  width: 10,  height: 10,  },
                    shadowColor: 'black',
                    shadowOpacity: 1.0,
                },
            }),
        },
    });

  }