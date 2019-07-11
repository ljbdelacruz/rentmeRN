import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import {SelectLanguageButton1} from '../../components/buttons/selectLanguageButton1/selectLanguageButton1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
class SelectLanguagePage extends React.Component {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
          languages:[{label: 'English', value: 1, image:global.assetURL+'/images/usa.png'},
                     {label: 'German', value: 2, image:global.assetURL+'/images/germany.png'},
                     {label: 'Japanese', value: 3, image:global.assetURL+'/images/japan.png'},
          ],
          defaultLang:{ label: 'English', value: 1, image:global.assetURL+'/images/usa.png'},
          button:{label:'APPLY'}
        }
    }
    render(){
      return (
        <View style={this.styles.container}>
          <View style={this.styles.languageContainer}>
            <SelectLanguageButton1 defValue={this.state.defaultLang} languages={this.state.languages} onSelected={(value)=>{
              global.language=value.value;
            }} />
          </View>
          <View style={this.styles.subContainer}>
            <View style={this.styles.subContainer}></View>
            <View style={this.styles.applyButton}>
              <CustomButton1 title={this.state.button.label} onPress={()=>{Alert.alert("LOGIN PRESSED")}}/>
            </View>
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
        marginLeft:'5%',
      },
      subContainer:{
        flex:1,        
      },
      applyButton:{
        width:'90%',
        flex:0.3,
        marginLeft:'5%'       
      }
    })
    
}


export default SelectLanguagePage;

