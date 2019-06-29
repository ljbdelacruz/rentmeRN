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
                  <TouchableOpacity style={this.styles.item1} onPress={()=>{
                      if(this.props.subEvent != null){
                        this.props.subEvent();
                      }

                  }}>
                    <Image source={require('./img/minus.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
                  <TouchableOpacity style={this.styles.item2} onPress={()=>{
                    if(this.props.addEvent != null){
                        this.props.addEvent();                      
                    }
                  }}>
                    <Image source={require('./img/add.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
              </View>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            flexDirection: 'row',
        },
        imageSize:{
            width:30,
            height:30
        },
        item1:{
            flex:1,
            alignItems:'flex-start',
            width:30,
            height:30
        },
        item2:{
            flex:1,
            alignItems:'flex-end',
            width:30,
            height:30
        }

        
    });

  }