import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import {RatingsCustom1} from '../../ratings/ratingsCustom1/ratingsCustom1.ui'
import {UserInfoInquiry1} from '../../container/userInfoInquiry1'

styles = StyleSheet.create({
    container: {
        borderColor:"#fff", 
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width:'100%',
        //shadow design
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'gray',
        shadowOpacity: 1.0,
        elevation:4,
    },
    container1:{
        flex:1,
        flexDirection: 'row',
    },
    container2:{
        flex:1,
        flexDirection: 'column',
    },
    fimage1c:{
        flex:2,
        backgroundColor:'black',
        height:200,
    },
    fimage1:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    fimage2c:{
        flex:1,
        backgroundColor:'blue',
        height:200,
    },
    infoContainer:{
        flex:1,
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width:'100%',
        paddingBottom: 20,
        marginLeft: 0,
        marginRight: 0,
    },
    rightContainer:{
        flex:2,
    },
    leftContainer:{
        flex:0.5,
        alignItems: 'flex-end',
    },
    titleStyle:{
        fontSize:15
    },
    contentStyle:{
        fontSize:10
    },
    priceStyle:{
        fontSize:15
    },
    subDescPriceStyle:{
        fontSize:8
    },
    ratingContainer:{
        marginTop:10
    }

});



export default AdsRow1 = ({ adInfo, rightButtonOnClick }) => (
    <View style={styles.container}>
    <View style={styles.container1}>
      <View style={styles.fimage1c}>
          <View style={styles.fimage1}></View>
      </View>
      <View style={styles.fimage2c}></View>
    </View>
    <View style={styles.container2}>
        <View style={styles.infoContainer}>
            <View style={styles.rightContainer}>
              <Text style={styles.titleStyle}>{adInfo.title}</Text>
              <Text style={styles.contentStyle}> {adInfo.desc}</Text>
              <View style={styles.ratingContainer}>
                  <RatingsCustom1 review={adInfo.review.review} reviewer={adInfo.review.reviewer}></RatingsCustom1>
              </View>
            </View>
            <View style={styles.leftContainer}>
              <Text style={styles.priceStyle}>{adInfo.price}</Text>
              <Text style={styles.subDescPriceStyle}>{adInfo.priceSubtitle}</Text>
            </View>
        </View>
        <View>
          <UserInfoInquiry1 userInfo={adInfo.owner} rightButtonOnClick={(userInfo)=>{
              rightButtonOnClick(userInfo);
          }}></UserInfoInquiry1>
        </View>
    </View>
</View>
);

export default AdsRow1;