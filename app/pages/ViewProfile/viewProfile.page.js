import React, { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            type:1,
            userInfo:{},            
        }
    }
    render() {
      return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
        </View>
      );
    }

    styles = StyleSheet.create({

    });
    optionSelected(option){

    }
}
export default SettingsPage;

