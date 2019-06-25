import React, { Component } from 'react';
import { View, StyleSheet, Modal, Alert, Text } from 'react-native';
export class ViewAdInfo1 extends Component {
    state={
        visible:false
    }
    constructor(props){
        super(props)
        this.state.visible=this.props.isVisible;
    }
    render() {
      return (
          <Modal 
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
              <View style={this.styles.container}>
                  <View style={this.styles.upperContainer}></View>
                  <Text>Modal Info</Text>
              </View>             
          </Modal>
      );
    }
    styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:'100%'
        },
        upperContainer:{
            width:'100%',
            height:100,
            backgroundColor:'blue'
        }
    });

  }