import React, { Component } from 'react';
import { View, StyleSheet, Alert, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import {ClientDashboardSubPage} from '../../components/clientSide/subpage/dashboard/clientDashboard.sub'
import {getAds, getCategory, getRecommendedAds} from '../../services/api.service'
import {HostDashboardSub} from '../../components/hostSide/subpage/hostDashboard/hostDashboard.sub'
import {SelectCategoryButton1} from '../../components/buttons/selectCategoryButton1/selectCategory.button'
import {MyImageGrid1} from '../../components/container/imageContainer/myimagegrid1/myImageGrid1.ui'
class CreateAdsPage extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
    };
    constructor(props){
      super(props)
      this.state={
        type:1,
        modalVisible:false,
        categories:[{label: 'House', value: 1, image:''},
                    {label: 'Vehicles', value: 2, image:''},
                    {label: 'Services', value: 3, image:''}],
        selectCategory:{},
        images:[
            'https://lorempixel.com/200/200/animals',
            'https://lorempixel.com/200/200/city',
            'https://lorempixel.com/200/200/nature',
            // 'https://lorempixel.com/200/200/cats',
        ]
      }
      
    }
    componentDidMount(){
        // global.CategoryModalProperties={header:'Please Select Category'}
        selectCategory=this.state.categories[0];
        const options = {
            title: 'Select Image',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
    }
    
    render() {        
        const {navigate} = this.props.navigation; 
        return (
            <View>
                <TextInput placeholder="Title" />
                <TextInput placeholder="Description" multiline={true} style={{height:100, width:'95%', borderWidth:1, borderColor:'grey', textAlignVertical: 'top', marginLeft:'2.5%'}} />
                <TextInput placeholder="Price" />
                <View style={this.styles.categoryContainer}>
                    <SelectCategoryButton1 defValue={this.state.categories[0]} placeholder={'Please Select Category'}
                    category={this.state.categories} onSelected={(data)=>{
                        this.setState({selectCategory:this.state.categories});
                    }}/>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.setState({images:[
                        'https://lorempixel.com/200/200/animals',
                        'https://lorempixel.com/200/200/city'
                    ]})
                }}>
                    <Text>Upload Image...</Text>
                </TouchableOpacity>
                <MyImageGrid1 images={this.state.images}></MyImageGrid1>
            </View>
        )        
    }
    styles = StyleSheet.create({
        container:{
            backgroundColor: '#a1abce',
            width:'100%',
            height:'100%',
        },
        categoryContainer:{
            width:'90%',
            marginLeft:'5%'
        }
    });

    navigationPages(option, param){
      const {navigate} = this.props.navigation;
      switch(option){
        case 1:
          navigate('Settings');
          break;
        case 2:
          navigate('ManageAds', param)
          break;
        case 3:
          Alert.alert("Manage Ads")
          break;
        case 4:
          Alert.alert("Reviews")
          break;
      }
    }


  }
export default CreateAdsPage;

