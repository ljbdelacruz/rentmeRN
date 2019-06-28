import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

export class RatingsCustom1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                <View style={this.styles.starReview}></View>
                <View style={this.styles.starReview}></View>
                <View style={this.styles.starReview}></View>
                <View style={this.styles.starReview}></View>
                <View style={this.styles.starReview}></View>
                <Text style={this.styles.reviewText}>{this.props.review} of {this.props.reviewer}</Text>
                
              </View>

          </View>

      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            flexDirection: 'row',
        },
        starReview:{
            width:20,
            height:20,
            backgroundColor:'yellow',
            marginLeft: 1,
        },
        reviewText:{
            marginLeft:5,
            fontSize:12,
        }

    });

  }