import {CustomTF1} from '../../components/textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import {SubCategoryButton1} from '../../components/buttons/subCategoryButton1/subCategoryButton1.ui'

class ManageAdsPage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props){
        super(props);
    }
    render() {
      return (
        <View >
            <SubCategoryButton1></SubCategoryButton1>
        </View>
      );
    }


    styles = StyleSheet.create({

    });
}
export default ManageAdsPage;

