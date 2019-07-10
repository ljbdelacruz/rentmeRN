import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button, Alert, Text, Image, TouchableOpacity} from 'react-native';
import {SelectableRow1} from '../../components/customrow/selectableRow1/selectableRow1.ui'
import { CustomPicker } from 'react-native-custom-picker'
import {SelectLanguageButton1} from '../../components/buttons/selectLanguageButton1/selectLanguageButton1.ui'

class SelectLanguagePage extends React.Component {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
          languages:[{label: 'English', value: 1, image:global.assetURL+'/images/usa.png'},
          {label: 'German', value: 2, image:global.assetURL+'/images/germany.png'},
          {label: 'Japanese', value: 3, image:global.assetURL+'/images/japan.png'},
          ]
        }
    }
    render() {
      return (
        <View style={this.styles.container}>
          <View style={this.styles.languageContainer}>
            <SelectLanguageButton1 languages={this.state.languages} onSelected={(value)=>{
              global.language=value.value;
              Alert.alert("Language Selected!",value.label);
            }}></SelectLanguageButton1>
          </View>
        </View>
      );
    }

    styles = StyleSheet.create({
      container:{
        height:'100%',
        width:'100%'
      },
      languageContainer:{
        width:'90%',
        height:100,
        marginTop:10,
        marginLeft:'5%'

      }
    })
    
}


export default SelectLanguagePage;

