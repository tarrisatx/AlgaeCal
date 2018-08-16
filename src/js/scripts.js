    //Request a new XMLHttpRequest to open a connection using GET on the endpoint url below.
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options', true);
    request.onload = function () {

    // Access JSON data
    var data = JSON.parse(this.response);
    // Check for success and errors
    // Set phoneNum id to api phone number
    // If API fails, show error message
    if (request.status >= 200 && request.status < 400) {
        document.getElementById("phoneNum").innerHTML = data.acf.default_phone_number;
        //console.log("Tap to Talk:", data.acf.default_phone_number);
    } else {
        document.getElementById("phoneNum").innerHTML = "Problem with API.";
        //console.log("Something is wrong:", 'error');
    }

    //Get 7 year guarantee title from API and content for the 7 year guarantee modal pop up section.
    document.getElementById("title").innerHTML = data.acf['7yr_title'];
    document.getElementById("long").innerHTML = data.acf['7yr_full_copy'];

    // Get current date
    const today = new Date();
    // Set date to key: office_hours
    let hours = data.acf.office_hours;

    // Convert military time into HHMM. External timeformatter.js handles the conversion.
    dateFormat.masks.hammerTime = 'HHMM';
    let currentTime = today.format("hammerTime");
    console.log("Converted time: ", currentTime);

    // Function hides id "available" and removes speak message from screen.
    const hide = () => {
        document.getElementById('available').style.display = "none";
    }
    // Function shows id "available" and removes speak message from screen.
    const show = () => {
        document.getElementById('available').style.display = "block";
    }

    // Iteratre thru objects in API and compare current time with API time
    // If time is within working hours, call show()
    // If time is not within working hours, call hide()
    for (i = 0; i < hours.length; i++) {
        if (currentTime >= hours[i].starting_time && currentTime <= hours[i].closing_time) {
            show()
            console.log("open");
        } else {
            hide()
            console.log("closed");
        }
    }

}
request.send();