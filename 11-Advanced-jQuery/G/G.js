$().ready(function () {
    $("#countryForm").validate();
});

let count1;
let count2;
let url1;
let url2;
let count1Api;
let count2Api;
let sunApiUrl1;
let sunApiUrl2;
let sunrise1;
let sunrise2;
let sunset1;
let sunset2;


$.validator.setDefaults({
    submitHandler: function (){
        count1 = $("#c1name").val();
        count2 = $("#c2name").val();
        url1 = String.prototype.concat("https://restcountries.eu/rest/v2/name/",count1);
        url2 = String.prototype.concat("https://restcountries.eu/rest/v2/name/",count2);

        $(function(){ 
            $.ajax({
                url:url1,
                type: "GET",
                
            }).done(function(data){
                count1Api = data[0].latlng;
            }).fail(function(data){
                alert("fail");
            })
        });

        $(function(){ 
            $.ajax({
                url:url2,
                type: "GET",
                
            }).done(function(data){
                count2Api = data[0].latlng;
            }).fail(function(data){
                alert("failcd");
            })
        });

        sunApiUrl = String.prototype.concat("https://api.sunrise-sunset.org/json?lat=",count1Api[0],"&lng=",count1Api[1]);
        sunApiUr2 = String.prototype.concat("https://api.sunrise-sunset.org/json?lat=",count2Api[0],"&lng=",count2Api[1]);
        
        $(function(){ 
            $.ajax({
                url: sunApiUrl,
                type: "GET",
                
            }).done(function(data){;
                alert(data.results.sunrise+"\n"+data.results.sunset);
            }).fail(function(data){
                alert("fail");
            })
        });

        $(function(){ 
            $.ajax({
                url: sunApiUrl2,
                type: "GET",
                
            }).done(function(data){
                alert(data.results.sunrise+"\n"+data.results.sunset);
            }).fail(function(data){
                alert("fail");
            })
        });
    }
});




