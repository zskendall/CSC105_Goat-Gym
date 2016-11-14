// script.js

function fillDay() {
    var start = 1;
    var end = 31;
    var options = "<option selected disabled class='hideoption'>- Day -</option>";
    for(var day = start; day <= end; day++) {
        options += "<option>" + day + "</option>";
    }
    document.getElementById('day').innerHTML = options;
}

function fillYear() {
    var start = 1900;
    var end = new Date().getFullYear();
    var options = "<option selected disabled class='hideoption'>- Year -</option>";
    for(var year = end; year >= start; year--) {
        options += "<option>" + year + "</option>";
    }
    document.getElementById('year').innerHTML = options;
}

function thumbnails() {
    var ico = "";
    var width = document.getElementById('big').offsetWidth;
    console.log(width);
    for(var i = 0; i < Math.floor(width/(75+30))*5; i++) {
        ico += "<div class = 'icon' id = '" + i + "' onclick='showImage(this.id)'> </div>";
    }

    document.getElementById('big').innerHTML = ico;
}

function showImage(imgID) {
    console.log(imgID);
    var elem = document.getElementById(imgID);
    // var src = elem.src;
    // ^ or something similar
    var enlarged = document.createElement("div");
    enlarged.className += 'bigImage';
    enlarged.innerHTML += "Hello, I'd like to be an image please.";
    console.log(enlarged.className);
    document.body.appendChild(enlarged);
}

function main() {
    if (document.getElementById('day') != null) fillDay();
    if (document.getElementById('year') != null) fillYear();
}

window.onload = main;