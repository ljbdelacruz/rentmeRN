import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
export class IncrementerButton1 extends Component {
    constructor(props){
        super(props);
        this.setState({
            count:0,
            limit:10,
        })
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                  <TouchableOpacity style={this.styles.item1} onPress={()=>{
                      if(this.props.subEvent != null){
                        if(parseInt(this.props.count) <= 0){
                            this.props.count=''+parseInt(this.props.count, 10) - 1;                        
                        }
                        this.props.subEvent(this.props.count);
                      }
                  }}>
                    <Image source={require('./img/minus.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
                  <Text>{this.props.count}</Text>
                  <TouchableOpacity style={this.styles.item2} onPress={()=>{
                    if(this.props.addEvent != null){
                        Alert.alert(this.props.count);
                        if(parseInt(this.props.count) < parseInt(this.props.limit)){
                            this.props.count=parseInt(this.props.count + 1) ;                        
                        }
                        this.props.addEvent(this.props.count);                      
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