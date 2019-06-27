import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class SubCategoryButton1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                <View style={this.styles.myimage}></View>
                <Text style={this.styles.category}>{this.props.mytitle}</Text>
                <Text style={this.styles.count}>{this.props.count}</Text>
              </View>
          </View>
      );
    }

    styles = StyleSheet.create({
        container:{
            width:100,
            height:100,
            backgroundColor:'#e6e7e8',                
            borderRadius:10,
            shadowOffset:{  width: 10,  height: 10,  },
            shadowColor: 'black',
            shadowOpacity: 1.0,
        },
        myimage:{
            width:30,
            height:30,
            backgroundColor:'blue',
            marginLeft: 35,
            marginTop: 20,
        },
        category:{
            fontSize:10,
            textAlign: 'center',            
        },
        count:{
            fontSize:12,
            textAlign: 'center',            
        }


    });

  }