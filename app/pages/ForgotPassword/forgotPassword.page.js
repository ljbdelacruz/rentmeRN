import {CustomTF1} from '../../components/textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
class ForgotPasswordPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            type:1
        }
    }

    
    render() {
      if(this.state.type == 1){
        return(
            <View>
    
            </View>
          );
      }else{
        return(
            <View>
    
            </View>
          );
      }
    }
    styles = StyleSheet.create({
    });
}
export default ForgotPasswordPage;

