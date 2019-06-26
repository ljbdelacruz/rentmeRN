import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {HostSettingsMenu} from '../../components/hostSide/settingsMenu/settingsMenu.ui'

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
                <HostSettingsMenu></HostSettingsMenu>
            </ScrollView>
        </View>
      );
    }

    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%'
        },
        header:{
            width:'100%',
            height:200,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor:'blue'
        }
    });
}
export default SettingsPage;

