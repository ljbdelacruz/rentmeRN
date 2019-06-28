import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import {HostSettingsMenu} from '../../components/hostSide/settingsMenu/settingsMenu.ui'
import {ClientSettingsMenu} from '../../components/clientSide/settingsMenu/clientSettingsMenu.ui'

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
    }
    render() {
      return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Button onPress={()=>{
                    this.optionSelected(2);
                }} title='Back'></Button>
                <View style={this.styles.header}>
                </View>
                <ClientSettingsMenu optionSelected={(option)=>{
                    this.optionSelected(option);
                }}></ClientSettingsMenu>
                {/* <HostSettingsMenu></HostSettingsMenu> */}
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
    optionSelected(option){
        const {navigate} = this.props.navigation;
        switch(option){
            case 1:
                navigate('Login');
                break;
            case 2:
                navigate('Dashboard')
                break;
            case 3:
                Alert.alert("Switch to Host");
                break;
            case 4:
                Alert.alert("Changing Language");
                break;
            case 5:
                Alert.alert("Account Settings");
                break;
        }
    }
}
export default SettingsPage;

