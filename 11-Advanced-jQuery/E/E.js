$().ready(function () {
    $("#sun-api-form").validate();
});

$.validator.setDefaults({
    submitHandler: function () {
        let lat = $("#longti").val();
        let long = $("#lati").val();
        let today;

        let urlSun = String.prototype.concat("https://api.sunrise-sunset.org/json?lat=", lat, "&lng=", long);

        $(function () {
            $.ajax({
                url: urlSun,
                type: "GET",
            }).done(function (data) {
                today = data.results.sunrise
            }).fail(function (data) {
                alert("fail");
            });
        });

    }
});