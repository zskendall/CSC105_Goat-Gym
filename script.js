// script.js
var heights = [];
var widths = [];
var currentImg;
var lastImg = 38;

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
    for(var i = 0; i < 39; i++) {
        var prefix = "0";
        if (i+1 < 10) prefix = "00";
        var filename = "images/gallery/IMG_"+prefix+(i+1)+".JPG";
        ico += "<img class = 'icon' id = '" + i + "'src = " + filename + " onclick='showImage(this.id)' />";
        var image = new Image();
        image.src = filename;
        heights.push(image.height);
        widths.push(image.width);
    }
    document.getElementById('thumb').innerHTML = ico;
    document.onkeydown = function(e) {
        switchImage(e);
    }
}

function makeElement(type, content, classname, id) {
    var elem = document.createElement(type);
    if (content != null) elem.innerHTML = content;
    if (classname != null) elem.className += classname;
    if (id != null) elem.id += id;
    return elem;
}

function showImage(imgID) {
    var box;
    currentImg = parseInt(imgID);
    var elem = document.getElementById(imgID);
    var src = elem.getAttribute('src');
    var calcWidth = 360*widths[imgID]/heights[imgID];
    var displayWidth = (calcWidth+120) + "px";
    if (document.getElementById('bigImage') == null) {
        var screen = makeElement('div', " ", null, 'screen');
        // Math.max(window.innerHeight, document.body.clientHeight);
        screen.style.width = window.innerWidth + "px";
        screen.style.height = window.outerHeight + "px";
        document.getElementById('big').appendChild(screen);
        box = makeElement("div", null, null, 'expand');
        var enlarged = makeElement("img", null, null, 'bigImage');
        enlarged.setAttribute('src', src);
        box.style.width = displayWidth;
        var left = makeElement("div", "<", 'switch', 'left');
        var right = makeElement("div", ">", 'switch', 'right');
        left.onclick = function() { changeImage("left"); };
        right.onclick = function() { changeImage('right'); };
        box.appendChild(left);
        box.appendChild(enlarged);
        box.appendChild(right);
        document.getElementById('big').appendChild(box);
    } else {
        box = document.getElementById('expand');
        box.style.width = displayWidth;
        document.getElementById('bigImage').setAttribute('src', src);
    }
}

function changeImage(dir) {
    if (dir == 'left') {
        if (currentImg == 0) showImage(lastImg);
        else showImage(currentImg - 1);
    } else if (dir == 'right') {
        if (currentImg == lastImg) showImage(0);
        else showImage(currentImg + 1);
    }
}

function switchImage(e) {
    if (document.getElementById('bigImage') != null) {
        if (e.keyCode == 37) changeImage('left');
        else if (e.keyCode == 39) changeImage('right');
    }
}

function main() {
    if (document.getElementById('day') != null) fillDay();
    if (document.getElementById('year') != null) fillYear();
}

window.onload = main;