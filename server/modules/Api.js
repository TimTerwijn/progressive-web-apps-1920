const fetch = require('node-fetch');


module.exports = {
    getData(search){
        //api info
        const urlBase = "https://zoeken.oba.nl/api/v1/search/?q=";
        const authorization = "&authorization=1e19898c87464e239192c8bfe422f280";
        const output = "&output=json";

        fetch(urlBase + search + authorization + output)
        .then(data => data.text())
        .then(data => {console.log(JSON.parse(data.trim()))})
    }
}

