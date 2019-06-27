import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
export class DescriptionDetails extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <View >
              <Text style={this.styles.title}>{this.props.mytitle}</Text>
              <Text style={this.styles.desc}>{this.props.mydesc}</Text>
          </View>
      );
    }
    styles = StyleSheet.create({
        title:{
            fontSize:15,
        },
        desc:{
            fontSize:10
        }
    });

  }