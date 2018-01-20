/*
The following is inspired by the work of Martin Hawksey: https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
Using the following tutorial by Scott Olmsted: http://railsrescue.com/blog/2015-05-28-step-by-step-setup-to-send-form-data-to-google-sheets/ 
I very much appreciate their efforts and willingness to share their solution to
incorporating forms into static sites
*/

var request;

document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault()
});

//upon submission of the form, perform function
$("#contactForm").submit(function (event) {
    form.addEventListener('submit', event => {
        event.preventDefault()
    });
    event.preventDefault();

    //abort pending reqs
    if (request) {
        request.abort();
    }
    //set-up variables
    var $form = $(this)

    //select all fields
    var $inputs = $form.find("input, select, button, textarea, text");

    //serialize data

    var serializedData = $form.serialize();

    //disable inputs

    $inputs.prop("disabled", true);

    //fire request

    var url = "https://script.google.com/a/ten10.com/macros/s/AKfycbwl2UVH6Gq663y21BO4cFBHp6G-uTET2WApWQDqvPSdqOrGe_0/exec"

    $.post(url, $('#contactForm').serialize())

    request = $.ajax({
        url: url,
        type: "post",
        method: "POST",
        data: serializedData,
        dataType: "JSON",
        statusCode: 200,
        success: function () {
            alert("Woo!")
        },
        error: function () {
            alert("Boo!")
        }

    });

    event.preventDefault();

    //Callback log

    request.done(function (response) {

        console.log("Request finished");
        console.log(response);
    });
    request.fail(function (errorThrown) {
        console.error("Error: " + errorThrown)
    });

    //re-enable inputs

    request.always(function () {
        $inputs.prop("disabled", false);
    });

    event.preventDefault();
}); 