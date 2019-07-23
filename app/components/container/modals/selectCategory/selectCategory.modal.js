import React, { Component } from 'react';
import { View, StyleSheet, Modal, Alert, Text, TouchableOpacity, Button } from 'react-native';
export class SelectCategoryModal extends Component {
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
          visible={this.props.visible}
          onRequestClose={() => {
            this.props.onClose();
          }}>
              <View style={this.styles.container}>
                  <View style={this.styles.upperContainer}>
                    <Button title="Close" onPress={()=>{
                        this.props.onClose();

                    }}></Button>
                  </View>
                  <Text>Select Category</Text>
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