import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {ClientRegistrationSub} from '../../components/clientSide/subpage/registration/registration.sub'

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        this.state={
            type:1,
        }
    }
    render(){
      if(this.state.type == 1){
        return(
            <View>
                <ClientRegistrationSub navigatePage={(type)=>{
                  switch(type){
                    case 1:
                      //back
                      break;
                  }
                }}></ClientRegistrationSub>
            </View>
        );
      }else{
          return (
            <View>
              <Text>Host Registration</Text>
            </View>
          );
      }
    }

    styles = StyleSheet.create({
        
    })
    
}
export default RegistrationPage;

