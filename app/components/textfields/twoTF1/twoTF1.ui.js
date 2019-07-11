import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Image, View } from 'react-native';
import {CustomTF2} from '../customTF2/customTF2.ui'
export class TwoTF2 extends Component {
    constructor(prop){
        super(prop);
        console.log(this.props.placeholder);
    }
    render(){
      if(this.props.hide){
        return (<View />)          
      }else{
        return(
            <View>
               <View style={{marginBottom:5}}>
                   <CustomTF2 placeholder={this.props.tf1.placeholder} 
                                       textContentType={this.props.tf1.type}
                                       image={this.props.tf1.image} 
                                       onChangeText={(text)=>{
                                           //please do validation on the text before submitting it into the server
                                           this.props.tf1OnChange(text);
                                       }} />
               </View>
               <View style={{marginBottom:5}}>
                   <CustomTF2 placeholder={this.props.tf2.placeholder} 
                                       textContentType={this.props.tf2.type}
                                       image={this.props.tf2.image} 
                                       onChangeText={(text)=>{
                                           //please do validation on the text before submitting it into the server
                                           this.props.tf2OnChange(text);
                                       }} />
               </View>
               
             </View>
         );
         

      }
      
    }
    styles = StyleSheet.create({
          

    });

  }