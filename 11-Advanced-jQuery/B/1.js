function informMe(endpoint,value){
    
    let urlCon = String.prototype.concat("https://restcountries.eu/rest/v2/",endpoint,"/",value);

    $(function () {
        $.ajax({
        url: urlCon,
        type: "GET",
        
        }).done(function (data) {
            console.log(JSON.stringify(data));
            alert("success")
        }).fail(function (data) {
            alert("fail");
        })
    });
}
informMe("callingcode","86");
