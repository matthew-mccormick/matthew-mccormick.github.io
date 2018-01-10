/* CROSS-PAGE FUNCTIONALITY */

/* Drop down header shown upon mouse interaction*/

$(document).ready(function showDropDownUponHover() {


        $('.dropDownHeader').mouseover(function () { /* Show burger menu icon upon hover */
            $('#ExpandedMenuIcon').show();
            $('.dropDownHeader').hide();
        });

        $('#ExpandedMenuIcon').mouseout(function () {
            $('#ExpandedMenuIcon').hide();
            $('.dropDownHeader').show();
        });
        $('#ExpandedMenuIcon').click(function () { /* Fade in drop down menu upon click */
            $('#dropDownBox').animate({
                opacity: 1,
                height: "toggle"
            }, 500);
            $('#ExpandedMenuIcon').hide(); //hide burger menu
            $('.dropDownHeader').hide(); //hide logo
            $('#closeButton').show(); //show close button
        });
        $('#closeButton').click(function () { /* Fade out drop down menu upon click */
            $('#dropDownBox').animate({
                opacity: 0,
                height: "toggle"
            }, 500);
            $('#closeButton').hide(); //hide close button
        });
});




/* Change colour of drop down headers from mouse over */

$(document).ready(function changeColourDropDownItem() {
    $('.dropDownListItem').mouseover(function () {

        $(this).css({ "color": "#3399ff" }); //when mouse over change the text to blue
    })
    $('.dropDownListItem').mouseout(function () {

        $(this).css({ "color": "" }); //when mouse out reset text to default colour
    })
})

/* Homepage text transition animation */


/* Homepage text transition */

var dateHour = new Date(); //Set a new date variable
var hour = dateHour.getHours(); // Get the hours of the date
var messageHour; //Set a new message variable based on the hour
$(document).ready(function dateMessage(callback) {
    if (hour < 12) {
        document.getElementById("messageGreet").innerHTML = "Good Morning" //When the hour is less than 12 then set message to Good Morning
        var messageHour = "Good Morning.";
    }
    else if (hour >= 12 && hour <= 17) {
        document.getElementById("messageGreet").innerHTML = "Good Afternoon" //When the hour is more than 12 but less than 17 then set message to Good Afternoon
        var messageHour = "Good Afternoon";
    }
    else if (hour > 17 && hour < 24) {
        document.getElementById("messageGreet").innerHTML = "Good Evening" // When hour us greater than 17 then set message to Good Evening
        var messageHour = "Good Evening";
    }
    else {
        document.getElementById("messageGreet").innerHTML = "Hello" // In case of error, then just return hello
        messageHour = "Hello";
    }
    return messageHour //return the message from the statements
    messageHour = messageHour; 
    callback(messageHour); // call back the message hour message
});

var intLoop = 5;  //Set the integerLoop Var
$(document).ready(function setIntervalLoop() {
    var startUpCount = 0;  //set the start up counter, which counts how many times the message has changed
    while (startUpCount < 1) {
        $('#messageGreetCycle').delay(4000).fadeOut(500); //Always show first message once and only once
        startUpCount++;
    }
    setInterval(function () {
        var cycleText = [$('#messageGreet').text(), "Welcome to Matthew's Website", "Test Analyst at Ten10 Group", "Experience in Agile, Functional and Automation Testing", "Find out more by selecting the Mc icon", "Contact me for more information"] //Messages to display on the page
        if (intLoop < 5 && isRunning) {
            intLoop++; //while the loop is less than 5 and has not been paused then continue to count
        }
        else if (intLoop >= 5 && isRunning) {
            intLoop = 0 //When it reaches 5, then reset the counter to 0
        }
        $('#messageGreetCycle').text(cycleText[intLoop]).fadeIn().delay(4000); //Fade in the message associated with the integer loop (i.e. cycleText[1] will display the second message)
        if (isRunning) {
            $('#messageGreetCycle').text(cycleText[intLoop]).fadeOut(500).delay(1000); //if it is running then fade the message out as normal
        }
        else if (!isRunning) { 
            $('#messageGreetCycle').show(); //If it is not running and is paused then always show the message
        }

    }, 6000); //time difference before fade-in/out

});

/* Stopping or resuming transitions */
var isRunning = true; //Automatically set the transitions to true
$(document).ready(function pauseResumeLoop() {
    $('#pauseLoop').click(function () { //When clicking pauseloop (should change name to incorporate start) then if it is running, set run value to false and show start icon
        if (isRunning) {
            isRunning = false
            document.getElementById('pauseLoop').innerHTML = "Start";
            document.getElementById("pauseLoop").src = "/Images/startIcon.png"
        }
        else { //When clicking pauseloop (should change name to incorporate start) then if it is not running, set run value to true and show pause icon
            isRunning = true;
            document.getElementById("pauseLoop").src = "/Images/pauseIcon.png"
            document.getElementById('pauseLoop').innerHTML = "Start";
        }

    });
    $('#pauseLoop').mouseover(function () { //hover functions to add emphasis
        document.getElementById('pauseLoop').style.height = "25px";
    });
    $('#pauseLoop').mouseout(function () { //hover functions to add emphasis
        document.getElementById('pauseLoop').style.height = "20px";
    });
    $('#accessibleLink').mouseover(function () { //hover functions to add emphasis
        document.getElementById('accessibleLink').style.fontSize = "2.15vw";
    });
    $('#accessibleLink').mouseout(function () { //hover functions to add emphasis
        document.getElementById('accessibleLink').style.fontSize = "2vw";
    });

});



/* PAGE-SPECIFIC FUNCTIONALITY */

/* Contact Form - not used for static site*/

/* Message visisbility upon contact form submission */

$(document).ready(function messageVisibility() {
    if ($("#successfulSubmission").length > 0) { //if successful submission exists, hide contact form and display message and confirmation
        $('#contactForm').hide(); 
        document.getElementById("messageDetails").style.display = "block";
        $(this).css({"backgroundColor":"green"})
        //document.getElementsByClassName("validationMessage").style.backgroundColor = "green";
        $(".validationMessage").show();
   
    }
    if ($("#unsuccessfulSubmission").length > 0) {
        $(document.getElementsByClassName("validationMessage")).css({ "backgroundColor": "#db4646" })
        //document.getElementsByClassName("validationMessage").style.backgroundColor = "red";
        $(".validationMessage").show();
        
    }
});



/* change colour of links upon mouse over in contact page */

$(document).ready(function changeContactText() {
    $(".contactLinkHeader > a").mouseover(function () {
        $(this).css({"color": "#3399ff"})
    })
    $(".contactLinkHeader > a").mouseout(function () {
        $(this).css({ "color": "black" })
    })
});



/* DEPRECIATED FEATURES */


     /* Change colour depreciated -- No longer required!*/
/*
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


 Change colour of tiles in the 'alternative page - no longer required
/*
$(document).ready(function changeColourTile() {
    $('.tileIconHome').mouseover(function () {

        $(this).css({ "backgroundColor": "white", "color": "black" });
    })
    $('.tileIconHome').mouseout(function () {

        $(this).css({ "backgroundColor": "", "color": "" });
    })
})*/
