class User {
    constructor(options){
        this.firstName = options.name.first;
        this.lastname = options.name.last;
        this.email = options.email;
        this.dob = options.dob;
    }
}



function reData() {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var parsed = JSON.parse(http.responseText);
            var users = parsed.results.map(function (user) {
                return new User(user);
            });
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.open('GET', 'https://randomuser.me/api/?results=5', true);
    http.send();

}




    reData()

