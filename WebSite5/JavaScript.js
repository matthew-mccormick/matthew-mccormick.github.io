$(document).ready(function messageVisibility() {
    if ($("#successfulSubmission").length > 0) {
        $('#contactForm').hide();
        document.getElementById("messageDetails").style.display = "block";
        $(".validationMessage").show();
   
    }
});

$(document).ready(function showDropDownUponHover() {
    $('.dropDownHeader').mouseover(function () {
        $('#dropDownBox').show();
    });

    $('.dropDownHeader').mouseout(function () {
        $('#dropDownBox').hide();
    })
    $('#dropDownBox').mouseover(function () {
        $('#dropDownBox').show();
    });

    $('#dropDownBox').mouseout(function () {
        $('#dropDownBox').hide();
    })
});

$(document).ready(function changeColourTile() {
    $('.tileIconHome').mouseover(function () {
        
        $(this).css({"backgroundColor":"white", "color":"black"});
    })
    $('.tileIconHome').mouseout(function () {

        $(this).css({ "backgroundColor": "", "color": "" });
    })
})

$(document).ready(function changeColourDropDownItem() {
    $('.dropDownListItem').mouseover(function () {

        $(this).css({"color": "#3399ff" });
    })
    $('.dropDownListItem').mouseout(function () {

        $(this).css({"color": ""});
    })
})

function changeColourHover(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
}
function revertColourChange(x) {
    x.style.backgroundColor = "";
    x.style.color = "";
}
function changeHeaderHoverColour(x) {
    x.style.color = "#3399ff"
}
function colourResetHeaderLink(x) {
    x.style.color = "white";
}

$(document).ready(function changeContactText() {
    $(".contactLinkHeader > a").mouseover(function () {
        $(this).css({"color": "#3399ff"})
    })
    $(".contactLinkHeader > a").mouseout(function () {
        $(this).css({ "color": "black" })
    })
});