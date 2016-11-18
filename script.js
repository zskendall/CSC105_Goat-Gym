// script.js

// global vars
var heights = [];
var widths = [];
var currentImg;
var lastImg = 30;
var currentSlide;
var numSlides;
var images;

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
    for(var i = 0; i < 31; i++) {
        var prefix = "0";
        if (i+1 < 10) prefix = "00";
        var filename = "images/gallery/IMG_"+prefix+(i+1)+".JPG";
        ico += "<img class = 'icon' id = '" + i + "'src = " + filename + " onclick='enlarge(this.id)' />";
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

function enlarge(imgID) {
    for(var j = 0; j < 31; j++) {
        var elem = document.getElementById('' + j);
        var zimg = new Image();
        zimg.src = elem.getAttribute('src');
        heights.push(zimg.height);
        widths.push(zimg.width);
    }
    showImage(imgID);
}

function showImage(imgID) {
    currentImg = parseInt(imgID);
    var box;
    var src = document.getElementById(imgID).getAttribute('src');
    var calcWidth = 360*widths[imgID]/heights[imgID];
    var displayWidth = (calcWidth + 120) + "px";
    if (document.getElementById('bigImage') == null) {
        // darken background
        var screen = makeElement("div", " ", null, 'screen');
        screen.style.width = window.innerWidth + "px";
        screen.style.height = Math.max(document.body.clientHeight,
                                      window.innerHeight) + "px";
        screen.onclick = function() { closeImage(); }
        document.getElementById('big').appendChild(screen);
        
        // create new large image of correct source
        console.log(src);
        console.log(document.getElementById(imgID).height);
        box = makeElement("div", null, null, 'expand');
        var enlarged = makeElement("img", null, null, 'bigImage');
        enlarged.setAttribute('src', src);
        box.style.width = displayWidth;
        
        // make navigation bars
        var left = makeElement("div", "«", 'switch', 'left');
        var right = makeElement("div", "»", 'switch', 'right');
        left.onclick = function() { changeImage("left"); };
        right.onclick = function() { changeImage('right'); };
        
        // setup and add the enlarged image with navigation
        box.appendChild(left);
        box.appendChild(enlarged);
        box.appendChild(right);
        document.getElementById('big').appendChild(box);
    } else {
        // if the expansion box was hidden, unhide it
        if (document.getElementById('expand').hidden) {
            document.getElementById('expand').hidden = false;
            document.getElementById('expand').style.visibility = 'visible';
            document.getElementById('screen').hidden = false;
        }
        // just switch the image out and resize the container
        box = document.getElementById('expand');
        box.style.width = displayWidth;
        document.getElementById('bigImage').setAttribute('src', src);
    }
}

function closeImage() {
    document.getElementById('expand').hidden = true;
    document.getElementById('expand').style.visibility = 'hidden';
    document.getElementById('screen').hidden = true;
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

// this method actually changes the images
function changeSlide(imgID) {
    currentSlide = (currentSlide + 1) % numSlides;
    document.getElementById(imgID).src = images[currentSlide];
}

function main() {
    if (document.getElementById('day') != null) fillDay();
    if (document.getElementById('year') != null) fillYear();
    
    // prepare images for slideshow
    images = new Array("images/IMG_002.JPG", "images/IMG_009.JPG", "images/IMG_016.JPG", "images/IMG_020.JPG", "images/IMG_021.JPG", "images/IMG_031.JPG", "images/IMG_039.JPG");
    
    numSlides = images.length;
    currentSlide = numSlides-1;
    
    var preloads = new Array(numSlides);
    for (var i = 0; i < numSlides; i++) {
        preloads[i] = new Image();
        preloads[i].src = images[i];
        preloads[i].id = 'slide';
    }
}

window.onload = main;