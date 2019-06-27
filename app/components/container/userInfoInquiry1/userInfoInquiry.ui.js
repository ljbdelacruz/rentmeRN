import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {RatingsCustom1} from '../../ratings/ratingsCustom1/ratingsCustom1.ui'

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
                <View style={this.styles.subcontainer2}></View>
                <View style={this.styles.subcontainer}>
                    <Text>{this.props.userInfo.title}</Text>
                    <Text>{this.props.userInfo.subtitle}</Text>
                </View>
                <View style={this.styles.subcontainer1}>
                </View>
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