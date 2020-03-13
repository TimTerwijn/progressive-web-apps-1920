const fetch = require('node-fetch');


module.exports = {
    getData(name){
        //api info
        const urlBase = "https://zoeken.oba.nl/api/v1/search/?q=";
        const targetGroup = "&p=jeugd"
        const authorization = "&authorization=1e19898c87464e239192c8bfe422f280";
        const detail = "&detaillevel=Minimum"
        const output = "&output=json";

        const url = urlBase + name + targetGroup + authorization + detail + output;

        fetch(url)
        .then(data => data.text())
        .then(data => {console.log(JSON.parse(data.trim()))})
    }
}


async function fetchBookByName(name){
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '03b058d877ec4276bb63dd1c6e1f3768';
    const secret = 'a431539891cc1fe6735239fa1c138ee7';
    const detail = 'Minimum';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${endpoint}${name}&p=jeugd&authorization=${key}&detaillevel=${detail}&output=json`;
    console.log(url);

    //set loading screen
    const messages = document.getElementById('messages');
    messages.innerHTML = "Loading please wait..."

    //do an api call
    try {
        const response = await fetch(url, config);
        //handle client error with fetch
        if (response.ok) {
            messages.innerHTML = ""
            return response.json();
        }
        else {
            return Promise.reject(response);
        }
    }
    catch (err) {
        messages.innerHTML = "something went wrong. " + err;
    }
}

async function fetchBookById(id){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/details/?id=';
    const key = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
    const secret = '274658a302d1cfe874e73aed9d6ccef5';
    const detail = 'default';
  
    const config = {
      Authorization: `Bearer ${secret}`
    };
  
    const url = `${cors}${endpoint}${id}&authorization=${key}&detaillevel=${detail}&output=json`;

    //set loading screen
    const messages = document.getElementById('messages');
    messages.innerHTML = "Loading please wait..."

    //do an api call
    try {
        const response = await fetch(url, config);
        //handle client error with fetch
        if (response.ok) {
            messages.innerHTML = ""
            return response.json();
        }
        else {
            return Promise.reject(response);
        }
    }
    catch (err) {
        messages.innerHTML = "something went wrong. " + err;
    }
}
