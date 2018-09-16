// first instantiate the object and store in a variable
var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return JSON.parse(http.response);
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
http.open('GET', '/data.json',true);
http.send();

console.log("test");

