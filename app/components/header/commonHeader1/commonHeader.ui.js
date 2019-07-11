import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export class CommonHeader1 extends Component {
    constructor(props){
        super(props)
    }
    render(){
      return(
            <View>
                <View styles={this.styles.container}>
                    <TouchableOpacity style={this.styles.backButton} onPress={()=>{
                        this.props.onClickLeft()
                    }}>
                        <Image style={this.styles.image} source={{uri:this.props.image}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            flexDirection:'column',
            flex:1,
            
        },
        backButton:{
            height:40,
            width:40,
        },
        image:{
            marginTop:10,
            marginLeft:5,
            width:'100%',
            height:'100%',
        }

    });

  }