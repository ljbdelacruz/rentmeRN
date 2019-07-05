import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
export class MyImageButton1 extends Component {
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
            <View style={this.styles.container}>
                <Image style={this.styles.container} source={ require('./img/menu2.png') }></Image>
                {/* <Image style={this.styles.container} source={ require(this.props.src) }></Image> */}
                
            </View>
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