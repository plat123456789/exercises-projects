$().ready(function () {
    $("#sun-api-form").validate();
});

$.validator.setDefaults({
    submitHandler: function () {
        let lat = $("#longti").val();
        let long = $("#lati").val();

        let urlSun = String.prototype.concat("https://api.sunrise-sunset.org/json?lat=", lat, "&lng=", long);
        let hongKong;

        $(function () {
            $.ajax({
                url: "https://api.sunrise-sunset.org/json?lat=22.28552&lng=114.15769",
                type: "GET",
            }).done(function (data) {
                hongKong = data.results.day_length;
            }).fail(function (data) {
                alert("fail");
            });
        });

        $(function () {
            $.ajax({
                url: urlSun,
                type: "GET",
            }).done(function (data) {
                alert(moment.duration(hongKong).subtract(data.results.day_length)).format("hh:mm:ss");
            }).fail(function (data) {
                alert("fail");
            });
        });
    }
});