import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';


export class UserInfoInquiry1 extends Component {
    constructor(props){
        super(props)
        this.setState({
            userInfo:{title:'', subtitle:'', profileImage:'', rightImage:''}
        })
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                <TouchableOpacity style={this.styles.subContainer1_2} onPress={()=>{
                    if(this.props.leftOnClick != null){
                        this.props.leftOnClick();
                    }
                }}>
                    <Image source={require('./img/pimage.jpg')} style={this.styles.subcontainer2}></Image>
                    <View style={this.styles.subcontainer}>
                        <Text>{this.props.userInfo.title}</Text>
                        <Text>{this.props.userInfo.subtitle}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={this.styles.subcontainer1} onPress={()=>{
                    this.props.rightButtonOnClick(this.props.userInfo);   
                }}>
                </TouchableOpacity>
              </View>
          </View>

      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            flexDirection: 'row',
        },
        subcontainer:{
            flexDirection:'column',
            flex:1,
            marginLeft: 5,
        },
        subcontainer1:{
            // flex:0.2,
            backgroundColor:'blue',
            width:30,
            height:30
        },
        subContainer1_2:{
            flexDirection:'row',
            flex:1,
        },
        subcontainer2:{
            backgroundColor:'blue',
            width:30,
            height:30,
            borderRadius: 100,
        },
        title:{
            fontSize:15
        },
        subtitle:{
            fontSize:10
        }

    });

  }