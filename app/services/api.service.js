
import * as axios from 'axios';
axios.defaults.baseURL = 'http://192.168.88.23:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

//#region AdsRelated
export async function getAds(success, err){
    return axios.get('/getAds').then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}
export async function getRecommendedAds(success, err){
    return axios.get('/getRecommendedAds').then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
}
//#endregion

//#region Categories
export async function getCategory(success, err){
    return axios.get('/getCategory').then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
} 
//#endregion

//#region Reviews
export async function getUserReview(success, err){
    return axios.get('/userrating/getUserReview').then(function(response){
        success(response.data);
    }).catch(function (error){
        err(error);
    });
} 

//#endregion







