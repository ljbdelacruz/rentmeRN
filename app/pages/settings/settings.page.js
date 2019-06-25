import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View></View>
            </ScrollView>
        </View>
      );
    }

    styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:'100%'
        }
    });
}
export default LoginPage;

