import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import {SelectLanguageButton1} from '../../components/buttons/selectLanguageButton1/selectLanguageButton1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import {CommonHeader1} from '../../components/header/commonHeader1/commonHeader.ui'

class SelectLanguagePage extends React.Component {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        global.assetURL="http://192.168.88.23:8080/assets";
        global.LNModalProperties={header:'Select Language'}
        this.state={
          languages:[{label: 'English', value: 1, image:global.assetURL+'/images/usa.png'},
                     {label: 'German', value: 2, image:global.assetURL+'/images/germany.png'},
                     {label: 'Japanese', value: 3, image:global.assetURL+'/images/japan.png'},
          ],
          defaultLang:{ label: 'English', value: 1, image:global.assetURL+'/images/usa.png'},
          headerProp:{leftButton:global.assetURL+"/images/l-arrow.png"},
          button:{label:'APPLY'}
        }
    }
    render(){
      return (
        <View style={this.styles.container}>
          <View style={this.styles.headerContainer}>
            <CommonHeader1 onClickLeft={()=>{
                Alert.alert("Clicked Back Button!");              
            }} image={this.state.headerProp.leftButton} />
          </View>

          <View style={this.styles.languageContainer}>
            <SelectLanguageButton1 defValue={this.state.defaultLang} languages={this.state.languages} onSelected={(value)=>{
              global.language=value.value;
            }} />
          </View>
          <View style={this.styles.subContainer}>
            <View style={this.styles.subContainer}></View>
            <View style={this.styles.applyButton}>
              <CustomButton1 title={this.state.button.label} onPress={()=>{Alert.alert("APPLY PRESSED")}}/>
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
      headerContainer:{
        width:'100%',
        height:60,
        backgroundColor:'#B0F4E6'
      },
      languageContainer:{
        width:'90%',
        height:50,
        marginTop:10,
        marginLeft:'5%',
      },
      subContainer:{
        flex:1,        
      },
      applyButton:{
        width:'90%',
        flex:0.15,
        marginLeft:'5%'       
      }
    })
    
}
export default SelectLanguagePage;

