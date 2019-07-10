import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

export class SelectableRow1 extends Component {
    constructor(props){
        super(props);
        this.state={
            hide:false
        }
    }
    toggleCheckBox(){
        this.setState({hide:!this.state.hide})
        Alert.alert(this.state.hide);
    }
    render() {
      if(this.state.hide){
        return (
            <TouchableOpacity style={this.styles.container} onPress={()=>{
                this.toggleCheckBox();
                this.props.onclick();
            }}>
                <Image style={this.styles.image} source={{uri:this.props.image}}></Image>
                <View style={this.styles.subContainer}>
                    <Text style={this.styles.label}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
          )
      }else{
        return (
            <TouchableOpacity style={this.styles.container} onPress={()=>{
                this.props.onclick();
            }}>
                <View style={this.styles.subContainer}>
                    <Text style={this.styles.label}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
          )
      }
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            flexDirection:'row',
        },
        image:{
            height:30,
            width:30,
            backgroundColor:'blue'
        },
        subContainer:{
            width:'90%',
            justifyContent:'center'
        },
        label:{
            marginLeft:30
        }
    });
    


  }