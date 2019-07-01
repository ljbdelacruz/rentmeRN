
import * as axios from 'axios';
axios.defaults.baseURL = 'http://192.168.88.23:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';



async function getAds(ads){
    return axios.get('/getAds')
}
export {getAds}; 