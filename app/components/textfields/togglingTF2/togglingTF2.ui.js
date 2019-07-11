import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {TwoTF2} from '../twoTF1/twoTF1.ui' 

export class TogglingTF2 extends Component {
    constructor(prop){
        super(prop);
    }
    render(){
      return (
        <View style={this.styles.container}>
              <View style={{height:300, width:'100%', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>{
                  this.props.topButtonOnPress();
                }}>
                  <Text style={{textAlign: 'center'}}>Forgot your Password?</Text>
                  <TwoTF2 tf1={this.props.data.tf1} tf1OnChange={(text)=>{
                    this.props.tf1OnTextChange(text);
                  }} tf2={this.props.data.tf2} tf2OnChange={(text)=>{
                    this.props.tf2OnTextChange(text);
                  }} hide={this.props.isHiddenTF1} />
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <View style={{borderWidth:0.5, flex:1, height:1, marginTop:9}} />
                  <Text style={{flex:0.2, textAlign:'center'}} >OR</Text>
                  <View style={{borderWidth:0.5, flex:1, height:1, marginTop:9}} />
                </View>
                <TouchableOpacity onPress={()=>{
                  this.props.bottomButtonOnPress();
                }}>
                  <TwoTF2 tf1={this.props.data.tf3} tf1OnChange={(text)=>{
                    this.props.tf3OnTextChange(text);
                  }} tf2={this.props.data.tf4} tf2OnChange={(text)=>{
                    this.props.tf4OnTextChange(text);
                  }} hide={this.props.isHiddenTF2} />
                  <Text style={{textAlign: 'center'}}>Forgot your Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
      );
    }
    styles = StyleSheet.create({
        container: {
            width:'100%',
            height:300,
        }
    });

  }