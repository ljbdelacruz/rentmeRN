import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {SubCategoryContainer1} from '../../subcatcontainer/subcategoryContainer1.ui'
import {DescriptionDetails} from '../../../container/descriptionDetails/descriptionDetails.ui'
import {AdsInfoContainer1} from '../../../container/adInfoContainer/adInfoContainer1.ui'
import {RentButton1} from '../../../buttons/rentButton1/rentButton1.ui'
import {IncrementerButton1} from '../../../buttons/incrementerButton1/incrementerButton1.ui'
export class ClientManageAdsSub extends Component {
    constructor(prop){
        super(prop);
        //data from parent sent to the child for display
        this.state={
            categories:[{title:'Rooms', count:'1'}, {title:'Bathroom', count:2}, {title:'Pool', count:1}, {title:'Gym', count:1}],
            // description:{title:'Descriptions', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family.'},
            // owner:{title:'Jojos Clubhouse', review:3, reviewer:120}
        }

    }

    render() {
      return (
        <View>
            <View style={this.styles.titleContainer}>
                <AdsInfoContainer1 ad={this.props.ad}></AdsInfoContainer1>
            </View>
            
            <View style={this.styles.descContainer}>
                <DescriptionDetails description={{title:'Description', desc: this.props.ad.desc}}></DescriptionDetails>
            </View>
            <View style={this.styles.descContainer}>
                <Text>Facilities</Text>
                <SubCategoryContainer1 categories={this.state.categories}></SubCategoryContainer1>
            </View>
            <View style={this.styles.buttonContainer}>
                <RentButton1 title='Rent Me' cancelImage='X' cancelOnClick={()=>{
                    this.props.rightOnClick();
                }} leftOnClick={()=>{
                    this.props.leftOnClick(this.props.ad);
                }}></RentButton1>
            </View>
            <View style={this.styles.incrementer}>
                <IncrementerButton1></IncrementerButton1>
            </View>
        </View>

      );
    }
    styles = StyleSheet.create({
        descContainer:{
            width:'95%',
            marginLeft: '2.5%',
        },
        titleContainer:{
            height:90, 
            width:'90%',
            shadowOffset:{  width: 10,  height: 10,  },
            shadowColor: 'black',
            shadowOpacity: 1.0,           
            marginLeft:'5%',
            marginTop: 50,
        },
        buttonContainer:{
            marginTop:40,
            width:'90%',
            height:50,
            marginLeft:'5%'
        },
        buttoninc:{
            width:'100%',
            height:100
        },
        incrementer:{
            width:100
        }


    });

  }