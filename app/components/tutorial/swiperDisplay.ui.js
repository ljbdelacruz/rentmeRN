import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {HostTutsDisplay} from './host/hostTuts1.sub'
import Swiper from "react-native-web-swiper";

export class SwiperTutsDisplay extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    //#region view renderer
    render() {
      return(
        <View style={{flex:1}}>
            <Swiper index={0} prevButtonText="" nextButtonText="">
                {
                    this.props.instructions.map(instruction => {
                        return(<View style={this.styles.viewContainer}>
                            <HostTutsDisplay desc={instruction.desc} image={instruction.image}></HostTutsDisplay>
                        </View>)
                    })
                }
            </Swiper>
        </View>
      );
    }
    //#endregion
    //#region styles
    styles = StyleSheet.create({
        container:{
            flex:1,
        },
        viewContainer:{
            flex:1,alignItems:"center",
            justifyContent:"center",
            // backgroundColor:"rgba(20,20,200,0.3)"
        }
    });
    //#endregion


  }