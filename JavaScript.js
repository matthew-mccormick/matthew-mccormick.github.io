/* Message visisbility upon contact form submission */

$(document).ready(function messageVisibility() {
    if ($("#successfulSubmission").length > 0) {
        $('#contactForm').hide();
        document.getElementById("messageDetails").style.display = "block";
        $(".validationMessage").show();
   
    }
});

/* Drop down header shown when mouse over logo*/

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

/* Change colour of drop down headers from mouse over */

$(document).ready(function changeColourDropDownItem() {
    $('.dropDownListItem').mouseover(function () {

        $(this).css({ "color": "#3399ff" });
    })
    $('.dropDownListItem').mouseout(function () {

        $(this).css({ "color": "" });
    })
})

/* Change colour of tiles in the 'alternative page */

$(document).ready(function changeColourTile() {
    $('.tileIconHome').mouseover(function () {
        
        $(this).css({"backgroundColor":"white", "color":"black"});
    })
    $('.tileIconHome').mouseout(function () {

        $(this).css({ "backgroundColor": "", "color": "" });
    })
})

/* change colour of links upon mouse over in contact page */

$(document).ready(function changeContactText() {
    $(".contactLinkHeader > a").mouseover(function () {
        $(this).css({"color": "#3399ff"})
    })
    $(".contactLinkHeader > a").mouseout(function () {
        $(this).css({ "color": "black" })
    })
});

/* Homepage text transition */

var dateHour = new Date();
var hour = dateHour.getHours();
var messageHour;
$(document).ready(function dateMessage(callback) {
    if (hour < 12) {
        document.getElementById("messageGreet").innerHTML = "Good Morning"
        var messageHour = "Good Morning.";
    }
    else if (hour >= 12 && hour <= 17) {
        document.getElementById("messageGreet").innerHTML = "Good Afternoon"
        var messageHour = "Good Afternoon";
    }
    else if (hour > 17 && hour < 24) {
        document.getElementById("messageGreet").innerHTML = "Good Evening"
        var messageHour = "Good Evening";
    }
    else {
        document.getElementById("messageGreet").innerHTML = "Hello"
        messageHour = "Hello";
    }
    return messageHour
    messageHour = messageHour;
    callback(messageHour);
});

var intLoop = 4;
$(document).ready(function setIntervalLoop() {
    var startUpCount = 0;
    while (startUpCount < 1) {
            $('#messageGreetCycle').delay(4000).fadeOut(500);
            startUpCount++;
        }
        setInterval(function () {
            var cycleText = [$('#messageGreet').text(), "Welcome to Matthew's Website", "Feel free to look around", "Use the Mc Icon to navigate between pages", "Contact me for more information"]
            if (intLoop < 4 && isRunning) {
                intLoop++;
            }
            else if (intLoop >= 4 && isRunning) {
                intLoop = 0
            }
            $('#messageGreetCycle').text(cycleText[intLoop]).fadeIn().delay(4000);
            if (isRunning) {
                $('#messageGreetCycle').text(cycleText[intLoop]).fadeOut(500).delay(1000);
            }
            else if (!isRunning) {
                $('#messageGreetCycle').show();
            }

        }, 6000);

});

   /* Stopping or resuming transitions */ 
     var isRunning = true;
     $(document).ready(function pauseResumeLoop() {
         $('#pauseLoop').click(function () {
             if (isRunning) {
                 isRunning = false
                 document.getElementById('pauseLoop').innerHTML = "Start";
                 document.getElementById("pauseLoop").src = "/Images/startIcon.PNG"
             }
             else {
                 isRunning = true;
                 document.getElementById("pauseLoop").src = "/Images/pauseIcon.PNG"
                 document.getElementById('pauseLoop').innerHTML = "Start";
             }
             
         });
         $('#pauseLoop').mouseover(function () {
             document.getElementById('pauseLoop').style.height = "25px";
         });
         $('#pauseLoop').mouseout(function () {
             document.getElementById('pauseLoop').style.height = "20px";
         });
         $('#accessibleLink').mouseover(function () {
             document.getElementById('accessibleLink').style.fontSize = "2.15vw";
         });
         $('#accessibleLink').mouseout(function () {
             document.getElementById('accessibleLink').style.fontSize = "2vw";
         });
         
     });



     /* Change colour depreciated -- No longer required!*/

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
