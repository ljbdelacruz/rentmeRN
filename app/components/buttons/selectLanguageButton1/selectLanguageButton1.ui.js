import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
export class SelectLanguageButton1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <View> 
          <CustomPicker
          defaultValue={this.props.defValue}
          placeholder={'Select Language'}
          options={this.props.languages}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          onValueChange={(value) => {
              this.props.onSelected(value);
          }}
        />
        </View>
      );
    }
    renderHeader() {
        return (
            <View style={slb1styles.headerFooterContainer}>
              <Text>Please Select Language</Text>
            </View>
        )
      }
    
    
      renderField(settings) {
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
          <View style={slb1styles.container}>
            <View>
              <Text>Please Select Language</Text>
              {selectedItem && (
                <View style={slb1styles.innerContainer}>
                  <Image style={slb1styles.imageDisplay} source={{uri:selectedItem.image}} />
                  <Text style={[slb1styles.text, { color: selectedItem.color }]}>
                    {getLabel(selectedItem)}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )
      }
    
      renderOption(settings) {
          const { item, getLabel } = settings
          return (
            <View style={slb1styles.optionContainer}>
              <View style={slb1styles.innerContainer}>
                <View style={[slb1styles.box]}>
                  
                  <Image style={slb1styles.image} source={{uri: item.image}} />   
                </View>
                <Text style={{ color: 'black', alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
              </View>
            </View>
          )
      }

  }
  slb1styles = StyleSheet.create({

    container: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15,
        borderRadius:10
      },
      innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
      },
      text: {
        fontSize: 18,
        marginLeft:10
      },
      headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
      },
      clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
      optionContainer: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
      },
      optionInnerContainer: {
        flex: 1,
        flexDirection: 'row'
      },
      box: {
        width: 30,
        height: 20,
        marginRight: 10,
      },
      image:{
        width:'100%',
        height:'100%'
      },
      imageDisplay:{
          width:50,
          height:30,
      }

  });
