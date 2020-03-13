
const urlBase = "https://zoeken.oba.nl/api/v1/details/?id=";
const authorization = "&authorization=1e19898c87464e239192c8bfe422f280";
const detail = "&detaillevel=default"
const output = "&output=json";


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
