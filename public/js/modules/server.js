export function get(message){
    httpGetAsync(message, onCallBack)
}

function onCallBack(response){
    alert("works!: " + response);
}

// got it from https://stackoverflow.com/a/4033310
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}