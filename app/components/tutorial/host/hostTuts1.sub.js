import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Image } from 'react-native';

export class HostTutsDisplay extends Component {
    constructor(prop){
        super(prop);
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
            <View>
                <Image source={require(this.state.image)}></Image>
            </View>
        </View>
      );
    }
    //#endregion
    //#region styles
    styles = StyleSheet.create({
    });
    //#endregion
    setupType(type){
        switch(type){
            case 1:
                this.setState({image:'./img/lock.png'})
                break;
            case 2:
                this.setState({image:'./img/lock.png'})
                break;
            case 3:
                this.setState({image:'./img/lock.png'})
                break;            
        }
    }


  }