import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import {SubCategoryButton1} from '../../buttons/subCategoryButton1/subCategoryButton1.ui'
export class SubCategoryContainer1 extends Component{
    constructor(props){
        super(props);
        this.setState({categories:[]});
    }
    render() {
      return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.props.categories.map(category => {
                    return (
                        <View style={this.styles.subcatmargin}>
                            <SubCategoryButton1 mytitle={category.title} count={category.count}></SubCategoryButton1>
                        </View>
                    );
              })}
            </ScrollView>
        </View>
      );
    }
    styles = StyleSheet.create({
        subcatmargin:{
            marginLeft:10,        
          }
    });

  }