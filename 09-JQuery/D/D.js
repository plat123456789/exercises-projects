$(document).ready(function () {
    $("tbody").append('<tr><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>');
    $("#row-submit").append('<input type="reset" value="clear" id="clear-input" class="clear"/>');
    $("head").append('<title>Max\'s contact list application</title>');
    $("table").css("color", "red");


$(".name").on("keydown", function(e){
    var input = e.target.value;
    if(input.length>50){
        $(this).css("border","solid 2px red");
    }else{
        $(this).css("border","solid 1px lack");
    }
})

$('.phone').on('blur', function(e) {
    var input = e.target.value;
    if(input.length < 6 || input.length > 16 || isNaN(input)) {
        $(this).css('border','solid 2px red');
    } else {
        $(this).css('border','solid 1px black');
    }
});

$('#contact-list').on('click','.row',function(e) {
    var rowElements = $(this).children();
    var updateFormElements = $('#update-form input').slice(0,rowElements.length);
    for(var i =0; i < rowElements.length; i++) {
        $(updateFormElements[i]).val($(rowElements[i]).html());
    }
    $('#update-form').prop('row-id',$(this).attr('id'));
});

let rowIdCounter = $('#contact-list tbody').find('tr').length; 
// form submit
$('.contact-form').submit(function(e) {
    e.preventDefault();
    var formId = e.target.id;
    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var email = e.target.email.value;
    // the to be inserted contact information
    const row = $(`
        <tr class="row">
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>`
    );    
    // if you are adding a new contact just append to list of existing contacts
    if(formId === 'create-form') {
        $(row).attr("id",`row-${rowIdCounter++}`);
        $('tbody').append(row);
        $(this).find('.clear').click();
    } else {
        $(row).attr("id",$(this).prop('row-id'));
        // if you want to update a contact, find the relevant row and replace that row with updated information. Search goes by email as that will be unique.
        $('#'+$(this).prop('row-id')).replaceWith(row);
    }
    alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
});

})
