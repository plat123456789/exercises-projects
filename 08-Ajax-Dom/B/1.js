// first instantiate the object and store in a variable

function informMe(endpoint, value, callback) {

    let http = new XMLHttpRequest();

    var url = String.prototype.concat("https://restcountries.eu/rest/v2/", endpoint, "/", value);
    http.open('GET', url, true);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            callback(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

informMe("capital", "berlin", function (data) {
    console.log(JSON.stringify(JSON.parse(data)));
})
