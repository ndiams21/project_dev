



function getDivId(clickedDiv) {
    var divId = clickedDiv.id;
    // alert("Clicked div ID: " + divId);
    scrollToTarget(divId);
}

function scrollToTarget(divId) {
    // Get the target element by its ID
    var targetElement;

    if(divId == "about-us-div") {
        targetElement = document.getElementById('about-us');       
    }
    else if (divId == "our-services-div") {
        targetElement = document.getElementById('our-services'); 
    }
    else if (divId == "contact-us-div") {
        targetElement = document.getElementById('overlap-3'); 
    }
    else if (divId == "book-an-appointment-div") {
        alert("open book appointment");
    }
    else if (divId == "login/signup-div") {
        
        var page_darkener = document.getElementById("page-darkener");
        var login_register_popup = document.getElementById("login_register_popup");


        page_darkener.style.display = "block";
        login_register_popup.style.display = "block";

        // targetElement = document.getElementById('box'); 
        

    }
    // else {
    //     alert("Clicked div ID: " + divId);
    // }


    // Check if the target element exists
    if (targetElement) {
        // Calculate the vertical centering offset
        var offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

        // Use the `scrollIntoView` method with an options object
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',  // Center the target element vertically
            // inline: 'center'  // Center the target element horizontally
        });
    }
}

