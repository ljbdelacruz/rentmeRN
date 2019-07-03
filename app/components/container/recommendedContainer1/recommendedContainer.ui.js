import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {AdDisplay2} from '../ads/adsDisplay2/adsDisplay2.ui'

export class RecommendedContainer1 extends Component {
    constructor(props){
        super(props)
        this.state={
            adsList:[]
        }
    }
    componentDidMount(){
        this.setState({adsList:[
            {title:'Club House', price:'$40', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', image:[]}, 
            {title:'Jojos Crib', price:'$20', description:'3 Bed Room All around for you this is the best place for people who are planning on starting a family', images:[]},
            {title:'Home Service Spa', price:'$20', description:'Massage Service with Sunspa treatment', images:[]}
        ]})
    }
    
    render() {
      return (
          <View style={this.styles.container}>
              <Text>Recommended</Text>
              <View style={this.styles.subContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scrollviewContainer}>
                    {this.props.ads.map(ads => {
                        return (
                            <TouchableOpacity style={this.styles.adContainer} onPress={()=>{
                                this.adsOnClick(ads);
                            }}>
                                <AdDisplay2 mytitle={ads.title} myprice={ads.price} ></AdDisplay2>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
              </View>
          </View>

      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:200,
        },
        subContainer:{
            flex:1,
            flexDirection: 'row'
        },
        scrollviewContainer:{
            marginTop: 5,
            marginLeft:10
        },
        adContainer:{
            width:150,
            height:150
        }


    });
    adsOnClick(ads){
        this.props.onSelectAds(ads);
    }


  }