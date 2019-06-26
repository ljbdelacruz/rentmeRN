import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class SubCategoryButton1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View style={this.styles.container}>
              <View style={this.styles.myimage}></View>
              <Text style={this.styles.category}>People</Text>
              <Text style={this.styles.count}>1</Text>
          </View>
      );
    }

    styles = StyleSheet.create({
        container:{
            width:100,
            height:100,
            borderRadius:10,
            shadowOffset:{  width: 5,  height: 5,  },
            shadowColor: '#8e8e93',
            shadowOpacity: 0.5, 
            alignContent: 'center',                   
        },
        myimage:{
            width:30,
            height:30,
        },
        category:{
            fontSize:10,
        },
        count:{
            fontSize:12
        }


    });

  }