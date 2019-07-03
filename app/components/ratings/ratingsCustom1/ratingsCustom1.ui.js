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
                <View>
                    <StarRating starStyle={this.styles.starReview} height={20} disabled={false} maxStars={5} rating={this.props.review}
                     halfStar={require('./img/half.png')} fullStar={require('./img/star.png')} emptyStar={require('./img/estar.png')}/>
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
            width:20,
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