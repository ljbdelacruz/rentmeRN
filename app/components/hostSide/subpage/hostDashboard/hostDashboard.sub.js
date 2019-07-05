import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {CustomButton4} from '../../../buttons/customButton4/customButton4.ui'
import {RatingsCustom1} from '../../../ratings/ratingsCustom1/ratingsCustom1.ui'
import {getUserReview} from '../../../../services/api.service'
import {MenuButton1} from '../../../buttons/menuButton1/menuButton1.ui'

export class HostDashboardSub extends Component {
    constructor(prop){
        super(prop);
        this.state={
          rowButtons1:[{title:'Manage Ads', value:3, param:{}}, {title:'Reviews', value:4, param:{}}, {title:'Create Ads', value:5, param:{}}],
          review:{review:0, reviewer:0}
        }
    }
    componentDidMount(){
      this.fetchData();
    }

    //#region view renderer
    render() {
      return(
        <View>
            <View style={this.styles.headContainer}>
              <View style={this.styles.headDashboard}>

                <View style={this.styles.ratingsContainer}>
                  <View style={this.styles.menuBtn}>
                      <MenuButton1 onClick={this.menuOnClick.bind(this)}></MenuButton1>
                  </View>
                </View>
                <View style={this.styles.ratingsContainer}>
                  <RatingsCustom1 review={this.state.review.review} reviewer={this.state.review.reviewer}></RatingsCustom1>
                </View>
              </View>
            </View>
            <View style={this.styles.menuContainer}>
              {this.state.rowButtons1.map(button => {
                  return(
                    <View style={this.styles.btnContainer}>
                      <CustomButton4 mytitle={button.title} onClick={()=>{
                        this.props.navigatePages(button.value, button.param)
                      }}></CustomButton4>
                    </View>
                  );
              })}
            </View>
        </View>
      );
    }


    //#endregion

    //#region styles
    styles = StyleSheet.create({
      menuContainer:{
        flexDirection: 'row',
        marginTop: 10,
        
      },
      btnContainer:{
        flex:1,
        width:60,
        height:70,
      },
      headContainer:{
        height:250,
        width:'100%'
      },
      headDashboard:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        height:'100%',
        width:'100%',
        backgroundColor:'#B0F4E6',
        zIndex:1,

      },
      ratingsContainer:{
        alignContent:'center',
        flex:1,
        flexDirection:'column'
      },
      menuBtn:{
        width:30,
        height:30,
      }
      

    });
    //#endregion
    
    //#region networking
    fetchData(){
      this.getUserReview();
    }
    getUserReview(){
      getUserReview(function(data){
        this.setState({review:data});
      }.bind(this), function(err){
        this.getUserReview();
        // Alert.alert("Failed", ""+err.message);
      }.bind(this))
    }
    //#endregion


    //#region press handler
    menuOnClick(){
      Alert.alert("Menu Pressed!");
    }
    //#endregion
  }