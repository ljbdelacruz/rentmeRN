import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
export class IncrementerButton1 extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            limit:10
        }
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                  <TouchableOpacity style={this.styles.item1} onPress={()=>{
                      if(this.props.subEvent != null){
                        if(parseInt(this.state.count) > 0){
                            this.setState({count:parseInt(this.state.count)-1})                  
                        }
                        this.props.subEvent(this.state.count);
                      }
                  }}>
                    <Image source={require('./img/minus.png')} style={this.styles.imageSize}></Image>              
                  </TouchableOpacity>          
                  <Text>{this.state.count}</Text>
                  <TouchableOpacity style={this.styles.item2} onPress={()=>{
                    if(this.props.addEvent != null){
                        if(parseInt(this.state.count) < parseInt(this.state.limit)){
                            this.setState({count:parseInt(this.state.count)+1})                                        
                        }
                        this.props.addEvent(this.state.count);                      
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