import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export class HostTutsDisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            image:'./img/lock.png'
        }
    }
    componentDidMount(){
    }
    componentWillReceiveProps(){
        this.setupType(this.props.imgType);
    }

    //#region view renderer
    render() {
      return(
        <View>
            <View style={this.styles.container}>
                <Image style={this.styles.image} source={{uri:this.props.image}} />
                <Text style={this.styles.textStyle}>{this.props.desc}</Text>
            </View>
        </View>
      );
    }
    //#endregion
    //#region styles
    styles = StyleSheet.create({
        container:{
            flexDirection:'column',
            alignItems: 'center', justifyContent: 'center',
            width:'80%'
        },
        image:{
            width:100, height:100,
        },
        textStyle:{
            fontSize:15,
            textAlign:'center'
        }
    });
    //#endregion

  }