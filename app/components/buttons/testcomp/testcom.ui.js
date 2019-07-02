import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
export class TestComp extends Component {
    constructor(prop){
        super(prop);
    }
    render() {
      return (
        <View>
            <Text>{this.props.mytitle}</Text>
        </View>
      );
    }
    styles = StyleSheet.create({
       

    });

  }