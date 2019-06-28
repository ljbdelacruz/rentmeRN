import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import {UserInfoInquiry1} from '../../userInfoInquiry1/userInfoInquiry.ui'
export class AdsDisplay1 extends Component {
    constructor(props){
        super(props)
        this.setState({
            adInfo:{images:[], title:'', desc:'', price:'', priceSubtitle:'', owner:{title:'', subtitle:'', profileImage:'', rightImage:''}}
        })
    }
    render() {
      return (
          <View style={this.styles.container}>
              <View style={this.styles.container1}>
                <View style={this.styles.fimage1c}>
                    <View style={this.styles.fimage1}></View>
                </View>
                <View style={this.styles.fimage2c}></View>
              </View>
              <View style={this.styles.container2}>
                  <View style={this.styles.infoContainer}>
                      <View style={this.styles.rightContainer}>
                        <Text style={this.styles.titleStyle}>{this.props.adInfo.title}</Text>
                        <Text style={this.styles.contentStyle}> {this.props.adInfo.desc}</Text>
                      </View>
                      <View style={this.styles.leftContainer}>
                        <Text style={this.styles.priceStyle}>{this.props.adInfo.price}</Text>
                        <Text style={this.styles.subDescPriceStyle}>{this.props.adInfo.priceSubtitle}</Text>
                      </View>
                  </View>
                  <View>
                    <UserInfoInquiry1 userInfo={this.props.adInfo.owner} rightButtonOnClick={(userInfo)=>{
                        this.props.rightButtonOnClick(userInfo);
                    }}></UserInfoInquiry1>
                  </View>
              </View>
          </View>
      );
    }
    styles = StyleSheet.create({
        container: {
            borderColor:"#fff", 
            backgroundColor: '#fff',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            width:'100%',
            //shadow design
            shadowOffset:{  width: 1,  height: 1,  },
            shadowColor: 'gray',
            shadowOpacity: 1.0,
        },
        container1:{
            flex:1,
            flexDirection: 'row',
        },
        container2:{
            flex:1,
            flexDirection: 'column',
        },
        fimage1c:{
            flex:2,
            backgroundColor:'black',
            height:200,
        },
        fimage1:{
            flex:1,
            width:'100%',
            height:'100%'
        },
        fimage2c:{
            flex:1,
            backgroundColor:'blue',
            height:200,
        },
        infoContainer:{
            flex:1,
            flexDirection: 'row',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width:'100%',
            paddingBottom: 20,
            marginLeft: 0,
            marginRight: 0,
        },
        rightContainer:{
            flex:2,
        },
        leftContainer:{
            flex:0.5,
            alignItems: 'flex-end',
        },
        titleStyle:{
            fontSize:15
        },
        contentStyle:{
            fontSize:10
        },
        priceStyle:{
            fontSize:15
        },
        subDescPriceStyle:{
            fontSize:8
        }

    });

  }