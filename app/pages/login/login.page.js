import {CustomTF1} from '../../components/textfields/customTF1/customTF1.ui'
import {CustomButton1} from '../../components/buttons/customButton1/customButton1.ui'
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props);
        this.loginVM={username:'', password: '', uuserplaceholder: 'Username', upassplaceholder:'Password'};
    }
    render() {
      return (
        <View style={this.styles.container}>
            <View style={this.styles.tf1}>
                <CustomTF1 placeholder={this.loginVM.uuserplaceholder} onChangeText={(text) => this.getUsername({text})}></CustomTF1>            
            </View>
            <View style={this.styles.tf1}>
                <CustomTF1 placeholder={this.loginVM.upassplaceholder}
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.getPassword({text})}></CustomTF1>            
            </View>

            <View style={this.styles.tf1}>
                <CustomButton1 title="Login" onPress={()=>{this.loginPressed()}} ></CustomButton1>
            </View>
            <View style={this.styles.temp}></View>

        </View>
      );
    }
    //ui handlers
    getUsername(uname){
        //username event handler text did change
        this.loginVM.username=uname.text;
        console.log(uname);
    }
    getPassword(pass){
        //password event handler text did change
        this.loginVM.password=pass.text;
    }
    loginPressed(){
        const {navigate} = this.props.navigation;
        navigate('Dashboard')
    }


    styles = StyleSheet.create({
        container:{
            flex:1,
            height: 'auto', width: 'auto', justifyContent:'center', 
            alignItems: 'center',
            backgroundColor: '#a1abce',
            width:'100%',
        },
        tf1:{
            marginTop: 10,
            width: '90%'
        },
        temp:{
            height:30,
            width:100,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'black',
            backgroundColor:'blue',
            shadowOffset: {width:10, height:10},
            elevation:4,
        }
    });
}
export default LoginPage;

