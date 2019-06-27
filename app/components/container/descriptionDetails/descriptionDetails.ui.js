import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
export class DescriptionDetails extends Component {
    constructor(props){
        super(props)
        this.setState({
            description:{title:'', desc:''},
        })
    }
    render() {
      return (
          <View >
              <Text style={this.styles.title}>{this.props.description.title}</Text>
              <Text style={this.styles.desc}>{this.props.description.desc}</Text>
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