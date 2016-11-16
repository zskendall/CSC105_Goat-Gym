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
    document.getElementById('thumb').innerHTML = ico;
}

function makeElement(type, content, classname, id) {
    var elem = document.createElement(type);
    if (content != null) elem.innerHTML = content;
    if (classname != null) elem.className += classname;
    if (id != null) elem.id += id;
    return elem;
}

function showImage(imgID) {
    console.log(imgID);
    
    if (document.getElementById('bigImage') == null) {
        var elem = document.getElementById(imgID);
        // var src = elem.src;
        // ^ or something similar
        var box = makeElement("div", null, null, 'expand');
        var enlarged = makeElement("div", "Hello, I'd like to be an image please. " + imgID, null, 'bigImage');
        console.log(enlarged.id);
        console.log(box.id);
        var left = makeElement("div", "<", 'switch', 'left');
        var right = makeElement("div", ">", 'switch', 'right');
        box.appendChild(left);
        box.appendChild(enlarged);
        box.appendChild(right);
        document.getElementById('big').appendChild(box);
    } else {
        // change img src to new src
        var elem = document.getElementById(imgID);
        // var src = elem.src;
        // ^ or something similar
        document.getElementById('bigImage').innerHTML = "Hello, I'd like to be an image please. " + imgID;
    }
}

function main() {
    if (document.getElementById('day') != null) fillDay();
    if (document.getElementById('year') != null) fillYear();
}

window.onload = main;