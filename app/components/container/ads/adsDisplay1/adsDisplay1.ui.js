import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, View, Image, Text } from 'react-native';
export class AdsDisplay1 extends Component {
    constructor(props){
        super(props)
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
                        <Text style={this.styles.titleStyle}>Suburban Loft</Text>
                        <Text style={this.styles.contentStyle}>3 Bed Room All around for you this is the best place for people who are planning on starting a family</Text>
                      </View>
                      <View style={this.styles.leftContainer}>
                        <Text style={this.styles.priceStyle}>$20</Text>
                        <Text style={this.styles.subDescPriceStyle}>Per night</Text>
                      </View>
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
            height:150,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width:'100%',
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