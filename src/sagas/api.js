const urlFacebook = 'https://facebook.github.io/react-native/movies.json';
const urlRandumJson = 'https://randomuser.me/api?results=';

function* getDataFromApi(count){
    console.log("function get data Api from api.js");

    // const response = yield fetch(urlGetData,{
    //     method: 'GET',
    //     headers: {
    //         Accept: application/join,
    //         'content-Type' : 'application/json',
    //     },
    //     body: '',
    // });
    // const data = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    // return data    

    return yield fetch(urlRandumJson+count)
        .then((response) => response.json())
        .then((responseJson) => {
            // return responseJson.movies;

            return responseJson.results;

           
        })
  
}

export const Api ={
   
    getDataFromApi
}