$(function () {
    $.ajax({
        url: "/data.json",
        beforeSend: function (xhr) {
            // This function will be run before sending ajax.
        },
        type: "GET",
        
    }).done(function (data) {
        console.log(JSON.stringify(data));
        alert("success");

    }).fail(function (data) {
        alert("fail");
    });
});
