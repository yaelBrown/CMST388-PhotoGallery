// JavaScript Document

// Declare variables
var lewis1 = "lewis1";
var lewis1txt = "Wallpaper picture of Lewis Hamilton (2018)";
var lewis2 = "lewis2";
var lewis2txt = "Lewis winning in Monaco this year (2019)";
var lewis3 = "lewis3";
var lewis3txt = "Lewis walking to the paddock (2016)";
var lewis4 = "lewis4";
var lewis4txt = "Lew with Jacket (2014)";
var lewis5 = "lewis5";
var lewis5txt = "Lewis stepping out of pool in Monaco (2019)";
var lewisArr = ["lewis1", "lewis2", "lewis3", "lewis4", "lewis5"];
var lewisWithBorder = null;
var clickCount = 0;

// test
console.log("image-gallery.js file is working");

// Remove Lewis Border function
function removeLewisBorder(lewisWithBorder) {
    document.getElementById(lewisWithBorder).classList.remove("clicked");
};

// Update caption function

function updateCaption(lewisNum) {
    switch (lewisNum) {
        case lewis1:
            document.getElementById("captionText").innerHTML = lewis1txt;
            break;
        case lewis2:
            document.getElementById("captionText").innerHTML = lewis2txt;
            break;
        case lewis3:
            document.getElementById("captionText").innerHTML = lewis3txt;
            break;
        case lewis4:
            document.getElementById("captionText").innerHTML = lewis4txt;
            break;
        case lewis5:
            document.getElementById("captionText").innerHTML = lewis5txt;
            break;
    }
};

// Onclick function

function clicked(lewisNum) {
    if (clickCount == 0) {
        console.log(lewisNum + " clicked");
        updateCaption(lewisNum);
        document.getElementById(lewisNum).classList.add("clicked");
        document.getElementById("largePic").src = "img/" + lewisNum + ".jpg";
        lewisWithBorder = lewisNum;
        clickCount++;
    } else {
        removeLewisBorder(lewisWithBorder);
        console.log(lewisNum + " clicked");
        updateCaption(lewisNum);
        document.getElementById(lewisNum).classList.add("clicked");
        document.getElementById("largePic").src = "img/" + lewisNum + ".jpg";
        lewisWithBorder = lewisNum;
    }
};