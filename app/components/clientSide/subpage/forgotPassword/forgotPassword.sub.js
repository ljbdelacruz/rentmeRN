import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Alert } from 'react-native';

export class ClientDashboardSubPage extends Component {
    constructor(prop){
        super(prop);
        this.state={}
    }
    componentDidMount(){
      this.fetchData();
    }

    render() {
      return (
            <View>
                                
            </View>
      );
    }
    styles = StyleSheet.create({
    });




  }