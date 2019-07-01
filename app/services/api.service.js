

const baseURL="http://www.mocky.io/v2/";
async function getAds(){
    try{
        let response = await fetch(baseURL+"5d17ab002f00007e5a25fb4b");
        let responseJSON=response.json();
        return responseJSON.data;
    }catch(error){
        console.error("Error ");        
    }
}