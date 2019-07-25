import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';


export class MyImageGrid1 extends Component {
    constructor(props){
        super(props)
        this.state={
            images:[]
        }
    }
    render() {
      if(this.props.images.length == 1){
        return (
            <View style={this.styles.container}>
                <Image style={this.styles.item} source={{uri:this.props.images[0]}}></Image>
            </View>
        );
      }else if(this.props.images.length == 2){
          return(
            <View style={this.styles.container}>
                <Image style={this.styles.item2} source={{uri:this.props.images[0]}}></Image>
                <Image style={this.styles.item21} source={{uri:this.props.images[1]}}></Image>
            </View>
          )
      }else if(this.props.images.length == 3){
        return(
            <View style={this.styles.container}>
                <Image style={this.styles.item3} source={{uri:this.props.images[0]}}></Image>
                <View style={this.styles.container2}>
                    <Image style={this.styles.item31} source={{uri:this.props.images[1]}}></Image>
                    <Image style={this.styles.item32} source={{uri:this.props.images[2]}}></Image>
                </View>
            </View>
          )
      }else if(this.props.images.length > 3){
        <View style={this.styles.container}>
        <Image style={this.styles.item3} source={{uri:this.props.images[0]}}></Image>
        <View style={this.styles.container2}>
            <Image style={this.styles.item31} source={{uri:this.props.images[1]}}></Image>
            <View style={this.styles.item32}>
                <View>
                    <Text></Text>
                </View>
            </View>
            <Image style={this.styles.item32} source={{uri:this.props.images[2]}}></Image>
        </View>
        </View>
      }


    }
    styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            height: 200,
            width:'90%',
            marginLeft:'5%'
        },
        item:{
             marginLeft:'5%',
             width:'90%', height:'90%',
             borderRadius:20,
        },
        item2:{
            //  flex:1,
            marginRight:'5%',
             width:'45%', height:'90%',
             borderTopLeftRadius:20,
            //  backgroundColor:'blue'
        },
        item21:{
            width:'45%', height:'90%',
            borderTopRightRadius:20,
        },

        item3:{
            marginRight:'5%',
            width:'45%', height:'90%',
            borderTopLeftRadius:20,
        },
        container2:{
            width:'100%', height:'100%',
            flexDirection:'column'
        },
        item31:{
            width:'45%', height:'43%',
            borderTopRightRadius:20,
            marginBottom:'3%',
        },
        item32:{
            width:'45%', height:'43%',
        },
        item4:{
            width:'100%',
        },
        transBG:{

        }



        

    });

  }