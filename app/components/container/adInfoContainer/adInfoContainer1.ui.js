import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {RatingsCustom1} from '../../ratings/ratingsCustom1/ratingsCustom1.ui'
export class AdsInfoContainer1 extends Component {
    constructor(props){
        super(props)
        this.setState({
            ad:{title:'', review:4, reviewer:140}
        })
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                <View style={this.styles.subcontainer}>  
                    <Text style={this.styles.title}>{this.props.ad.title}</Text>
                    <View style={this.styles.button}></View>
                </View>
                <RatingsCustom1 review={this.props.ad.review} reviewer={this.props.ad.reviewer}></RatingsCustom1>
              </View>
          </View>

      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            borderRadius: 10,
            shadowOffset:{  width: 10,  height: 10,  },
            shadowColor: 'black',
            shadowOpacity: 1.0,
            backgroundColor:'#e6e7e8',                
            padding:10
        },
        subcontainer:{
            flexDirection: 'row',
            marginBottom: 20,
        },
        title:{
            fontSize:15,
            flex:1
        },
        button:{
            width:30,
            height:30,
            backgroundColor:'blue',
            flex:0.15
        },

    });

  }