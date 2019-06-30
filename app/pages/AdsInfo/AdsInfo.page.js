import {CustomTF1} from '../../components/textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
class AdInfoPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <View>
        </View>
      );
    }


    styles = StyleSheet.create({
    });
    navigateOption(option){
      const {navigate} = this.props.navigation;
      switch(option){
        case 1:
          navigate('Dashboard');
          break;
      }
    }

}
export default AdInfoPage;

