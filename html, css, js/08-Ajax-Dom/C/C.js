function whoIsInSpace(cb){
    var http = new XMLHttpRequest();

    

http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        var parsed = JSON.parse(http.responseText);
        cb(parsed.people.map(function(person){
            return person.name;
        }))
    } else {
        console.log('error occurred' + http.status);
    }
}
http.open('GET', 'http://api.open-notify.org/astros.json',true);
http.send();
}

whoIsInSpace(function(names){
    console.log(names);
});
