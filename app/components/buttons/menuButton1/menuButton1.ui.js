import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
export class MenuButton1 extends Component {
    constructor(props){
        super(props);   
        state:{
            imgSrc:''
        }
    }
    componentDidMount(){
        this.setState({imgSrc:this.props.src});
    }
    render() {
      return (
          <View>
            <TouchableOpacity style={this.styles.container} onPress={()=>{
                this.props.onClick();
            }}>
                <Image style={this.styles.container} source={ require('./img/menu2.png') }></Image>
            </TouchableOpacity>
          </View>
      );
    }
    styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%'
        },
    });

}