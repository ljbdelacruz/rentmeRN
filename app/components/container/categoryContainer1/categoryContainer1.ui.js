import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import {CustomButton1} from '../../buttons/customButton1/customButton1.ui'

export class CategoryContainer1 extends Component {
    constructor(props){
        super(props)
        categories=[{name:'Car', isSelected:false}, {name:'Housing', isSelected:false}, {name:'Services', isSelected:false},
        {name:'Equipments', isSelected:false}, {name:'Dorm', isSelected:false}]
    }
    render() {
      return (
          <View style={this.styles.container}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scrollviewContainer}>
              {this.props.categories.map(category => {
                    return (
                        <View style={this.styles.buttons}>
                            <CustomButton1 title={category.name} onPress={()=>{
                                this.props.categoryOnClick(category)
                            }}></CustomButton1>
                        </View>
                    );
              })}
              </ScrollView>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:45,
        },
        scrollviewContainer:{
            marginTop: 5,
            marginLeft:10
        },
        buttons:{
            marginRight: 10,
            // width:100,
            height:50
        }
    });
  }