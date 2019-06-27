import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {SubCategoryContainer1} from '../../subcatcontainer/subcategoryContainer1.ui'
import {DescriptionDetails} from '../../../container/descriptionDetails/descriptionDetails.ui'
export class ClientManageAdsSub extends Component {
    constructor(prop){
        super(prop);
        //data from parent sent to the child for display
        this.state={
            categories:[{title:'Rooms', count:'1'}, {title:'Bathroom', count:2}, {title:'Pool', count:1}, {title:'Gym', count:1}],
            description:{title:'Descriptions', desc:'3 Bed Room All around for you this is the best place for people who are planning on starting a family.'}
        }
    }

    render() {
      return (
        <View>
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
        }

    });

  }