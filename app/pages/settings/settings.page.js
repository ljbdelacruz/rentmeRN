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
                <View style={this.styles.header}>
                    
                </View>
                <View style={this.styles.content}>
                    
                </View>
            </ScrollView>
        </View>
      );
    }

    styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:'100%'
        },
        header:{
            flex:0.5,
            width:'100%',
            height:200,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        },
        content:{
            flex:1,
            width:'100%',
        }
    });
}
export default LoginPage;

