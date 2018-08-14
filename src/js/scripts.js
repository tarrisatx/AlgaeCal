var request = new XMLHttpRequest();
request.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options', true);
request.onload = function () {

  // Access JSON data
  var data = JSON.parse(this.response);
  // Check for success and errors
  if (request.status >= 200 && request.status < 400) {
    document.getElementById("phoneNum").innerHTML = data.acf.default_phone_number;
    //console.log("Tap to Talk:", data.acf.default_phone_number);
   } else {
    document.getElementById("phoneNum").innerHTML = "Problem with API.";
    //console.log("Something is wrong:", 'error');
  }

  //Get 7 year guarantee copy
  document.getElementById("title").innerHTML = data.acf['7yr_title'];
  //document.getElementById("short").innerHTML = data.acf['7yr_short_copy'];
  document.getElementById("long").innerHTML = data.acf['7yr_full_copy'];



  
    // Get today's date
    const today = new Date();
    let hours = data.acf.office_hours;
    
    // Convert military time into HHMM
    dateFormat.masks.hammerTime = 'HHMM';
    let currentTime = today.format("hammerTime");
    console.log("Converted time: ", currentTime);

    //Show hide speak message
    function hide() {
        document.getElementById('available').style.display = "none";
        }
    
    function show() {
        document.getElementById('available').style.display = "block";
        }
    

        document.getElementById('promos').style.display = "none";

    // Iteratre thru objects and compare current time with api time
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

/*
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = '../assets/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();

*/