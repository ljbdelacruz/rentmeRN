import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {CustomTF1} from '../../../textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../../buttons/customButton1/customButton1.ui'
import {CommonHeader1} from '../../../header/commonHeader1/commonHeader.ui'

export class ClientRegistrationSub extends Component {
    constructor(prop){
        super(prop);
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
          emailInput:{placeholder:'Email', value:''},
          passwordInput:{placeholder:'Password'},
          repasswordInput:{placeholder:'Retype Password'},
          proceedButton:{label:'APPLY'},
          backButton:{source:global.assetURL+"/images/l-arrow.png"}
      }
    }
    render() {
      return (
        <View>
            <View style={this.styles.containerHeader}>
                <View style={this.styles.headerContainer}>
                  <CommonHeader1 onClickLeft={()=>{
                    Alert.alert("Clicked Back Button!");              
                  }} image={this.state.backButton.source} />
                </View>
                <View style={this.styles.inputSub}>
                    <View style={this.styles.inputContainer}>
                        <CustomTF1 placeholder={this.state.emailInput.placeholder} 
                                onChangeText={(text)=>{
                                    //please do validation on the text before submitting it into the server
                                    this.setState({emailInput:{placeholder:this.state.emailInput.placeholder, value:text}})
                                }}></CustomTF1>
                    </View>
                    
                    <View style={this.styles.inputContainer}>
                        <CustomTF1 placeholder={this.state.passwordInput.placeholder}
                                textContentType="password"
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({passwordInput:{placeholder:this.state.passwordInput.placeholder, value:text}})
                                }}></CustomTF1>
                    </View>
                    
                    <View style={this.styles.inputContainer}>
                        <CustomTF1 placeholder={this.state.repasswordInput.placeholder}
                                textContentType="password"
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({repasswordInput:{placeholder:this.state.repasswordInput.placeholder, value:text}})
                                }}></CustomTF1>
                    </View>
                    <View style={[this.styles.inputContainer, this.styles.buttonContainer]}>
                         <CustomButton1 title={this.state.proceedButton.label} onPress={()=>{Alert.alert("Process Pressed!")}}></CustomButton1>
                    </View>
                </View>
                
            </View>
        </View>
      );
    }
    styles = StyleSheet.create({
      headerContainer:{
        width:'100%',
        // marginLeft:'5%',
      },
      container:{
        width:'100%',
        height:'100%'
      },
      containerHeader: {
          width:'100%',
          height:350,
          backgroundColor:'#B0F4E6',
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
      },
      inputSub:{
          marginTop:50
      },
      inputContainer:{
          marginTop:10,
          width:'90%',
          marginLeft:'5%'
      },
      buttonContainer:{
        marginTop:30,
      }
    });

  }