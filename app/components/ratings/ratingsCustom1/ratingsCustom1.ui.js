import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';

export class RatingsCustom1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <View>
              <View style={this.styles.container}>
                <View style={this.styles.starReview}>
                    <StarRating disabled={false} maxStars={5} rating={this.props.review} />
                </View>
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
            // width:20,
            height:20,
            // backgroundColor:'yellow',
            // marginLeft: 1,
        },
        reviewText:{
            marginLeft:5,
            fontSize:12,
        }

    });

  }