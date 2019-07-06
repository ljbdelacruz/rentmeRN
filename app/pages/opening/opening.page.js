import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import {OpeningSub} from '../../components/clientSide/subpage/opening/opening.sub'

/*
    Param:
    { vm: {type:1} }
*/

class OpeningPage extends React.Component {
    constructor(props) {
        super(props);
        this.params=this.props.navigation.state.params;
        this.state={
            type:1,
        }
        
    }
    componentDidMount(){
        if(this.params != null){
            this.setState({type:this.params.vm.type});
        }
    }
    render() {
      if(this.state.type == 1){
        return (
            <View>
                <OpeningSub></OpeningSub>
            </View>
          );
      }else{
        return (
            <View>
                
            </View>
          );
      }
    }

    styles = StyleSheet.create({

    });
    navigate(path, param){
        const {navigate} = this.props.navigation;
        navigate(path, param);
    }
}
export default OpeningPage;

