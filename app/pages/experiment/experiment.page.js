import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {TwoTF2} from '../../components/textfields/twoTF1/twoTF1.ui'
import {TogglingTF2} from '../../components/textfields/togglingTF2/togglingTF2.ui'
class ExperimentPage extends React.Component {
    constructor(props){
        super(props);
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
          data:{
            tf1:{placeholder:"Email Address", image:global.assetURL+"/images/username.png", type:"username"},
            tf2:{placeholder:"Contact Number", image:global.assetURL+"/images/password.png", type:"password"},
            tf3:{placeholder:"Email Address", image:global.assetURL+"/images/username.png", type:"username"},
            tf4:{placeholder:"Password", image:global.assetURL+"/images/password.png", type:"password"},
          },
          isHiddenTF2:true,
          isHiddenTF1:true,
        }
    }
    render() {
      return (
            <View style={this.styles.container}>
              <TogglingTF2 
                isHiddenTF1={this.state.isHiddenTF1}
                isHiddenTF2={this.state.isHiddenTF2}
                data={this.state.data} 
                topButtonOnPress={()=>{
                  this.setState({isHiddenTF1:!this.state.isHiddenTF1})
                  this.setState({isHiddenTF2:true})}}
                bottomButtonOnPress={()=>{
                  this.setState({isHiddenTF1:true})
                  this.setState({isHiddenTF2:!this.state.isHiddenTF2})}} 
                tf1OnTextChange={(text)=>{
                  
                }} 
                tf2OnTextChange={(text)=>{

                }}
                tf3OnTextChange={(text)=>{

                }}
                tf4OnTextChange={(text)=>{

                }} />
            </View>
      );
    }
    styles = StyleSheet.create({
      container: {
        width:'90%',
        height:300,
        marginLeft:'5%'
      }
    });
}
export default ExperimentPage;

