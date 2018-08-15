// Hide bundle boxes initially by looping thru all classes name "supply"
let init = () => {
    var elements = document.getElementsByClassName("supply");
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}
init()

// Both functions hideMyElement and showMyElement will use wista's callback function
// Finds all elements named "supply" who has a parent of "promo"
// Call init() and hide boxes by setting to display none
const hideMyElement = () => {

    var x = document.getElementById("promos");
    var y = x.getElementsByClassName("supply");
    var i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    console.log("hide boxes");
    init()
}

// Finds all elements named "supply" who has a parent of "promo" and set to display none.
const showMyElement = () => {

    var x = document.getElementById("promos");
    var y = x.getElementsByClassName("supply");
    var i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    console.log("show boxes");
}