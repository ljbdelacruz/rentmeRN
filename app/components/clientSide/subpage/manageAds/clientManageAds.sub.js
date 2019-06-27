import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {SubCategoryContainer1} from '../../subcatcontainer/subcategoryContainer1.ui'
import {DescriptionDetails} from '../../../container/descriptionDetails/descriptionDetails.ui'
import {AdsInfoContainer1} from '../../../container/adInfoContainer/adInfoContainer1.ui'
export class ClientManageAdsSub extends Component {
    constructor(prop){
        super(prop);
        //data from parent sent to the child for display
        this.state={
            categories:[{title:'Rooms', count:'1'}, {title:'Bathroom', count:2}, {title:'Pool', count:1}, {title:'Gym', count:1}],
            description:{title:'Descriptions', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family.'},
            ad:{title:'Jojos Clubhouse', review:3, reviewer:120}
        }
    }

    render() {
      return (
        <View>
            <View style={this.styles.titleContainer}>
                <AdsInfoContainer1 ad={this.state.ad}></AdsInfoContainer1>
            </View>
            
            <View style={this.styles.descContainer}>
                <DescriptionDetails description={this.state.description}></DescriptionDetails>
            </View>
            <View style={this.styles.descContainer}>
                <Text>Facilities</Text>
                <SubCategoryContainer1 categories={this.state.categories}></SubCategoryContainer1>
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
            height:80, 
            width:'80%',
            shadowOffset:{  width: 10,  height: 10,  },
            shadowColor: 'black',
            shadowOpacity: 1.0,           
            marginLeft:'10%',
            marginTop: 50,
        }

    });

  }