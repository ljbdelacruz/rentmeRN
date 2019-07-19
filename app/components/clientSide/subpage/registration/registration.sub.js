import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {CustomTF1} from '../../../textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../../buttons/customButton1/customButton1.ui'
import {CommonHeader1} from '../../../header/commonHeader1/commonHeader.ui'
import {CustomTF2} from '../../../textfields/customTF2/customTF2.ui'

export class ClientRegistrationSub extends Component {
    constructor(prop){
        super(prop);
        global.assetURL="http://192.168.88.23:8080/assets";
        this.state={
          emailInput:{placeholder:'Email', value:'', image:global.assetURL+"/images/username.png", type:"username"},
          passwordInput:{placeholder:'Password', value:'', image:global.assetURL+"/images/password.png", type:"password"},
          repasswordInput:{placeholder:'Retype Password', value:'', image:global.assetURL+"/images/password.png", type:"password"},
          proceedButton:{label:'PROCEED'},
          backButton:{source:global.assetURL+"/images/l-arrow.png"}
      }
    }
    render() {
      return (
        <View>
            <View style={this.styles.containerHeader}>
                <View style={this.styles.headerContainer}>
                  <CommonHeader1 onClickLeft={()=>{
                    this.props.navigatePage(1);
                  }} image={this.state.backButton.source} />
                </View>
                <View style={this.styles.inputSub}>
                    <View style={this.styles.inputContainer}>
                        <CustomTF2 placeholder={this.state.emailInput.placeholder} 
                                   textContentType="username"
                                   image={this.state.emailInput.image} 
                                   onChangeText={(text)=>{
                                    //please do validation on the text before submitting it into the server
                                    this.setState({emailInput:{placeholder:this.state.emailInput.placeholder, 
                                                   value:text, 
                                                   image:this.state.emailInput.image,
                                                  type:this.state.emailInput.type}})
                        }} />
                    </View>
                    
                    <View style={this.styles.inputContainer}>
                        <CustomTF2 placeholder={this.state.passwordInput.placeholder} 
                                   image={this.state.passwordInput.image} 
                                   textContentType="password"
                                   secureTextEntry={true}
                                   onChangeText={(text)=>{
                                    //please do validation on the text before submitting it into the server
                                    this.setState({passwordInput:{placeholder:this.state.passwordInput.placeholder, 
                                                   value:text, 
                                                   image:this.state.passwordInput.image,
                                                  type:this.state.passwordInput.type}})
                        }} />
                    </View>
                    
                    <View style={this.styles.inputContainer}>
                        <CustomTF2 placeholder={this.state.repasswordInput.placeholder} 
                                   secureTextEntry={true}
                                   textContentType="password"
                                   image={this.state.repasswordInput.image} 
                                   mytype={this.state.repasswordInput.type}
                                   onChangeText={(text)=>{
                                    //please do validation on the text before submitting it into the server
                                    this.setState({repasswordInput:{placeholder:this.state.repasswordInput.placeholder, 
                                                   value:text, 
                                                   image:this.state.repasswordInput.image,
                                                  type:this.state.repasswordInput.type}})
                        }} />
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
          marginTop:30
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