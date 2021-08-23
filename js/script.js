jokePunchline = document.getElementById("joke_punchline")
jokeSetup = document.getElementById("joke_setup")
jokeDiv = document.getElementById("jokeText")

$("button").click(function () {
    $.get("https://official-joke-api.appspot.com/random_joke", function (data, status) {
        // jokeSetup.innerHTML = data.setup
        // jokePunchline.innerHTML = "> " + data.punchline
        let jokeButton = document.getElementById("jokeBtn")
        jokeDiv.style.padding = "20px";
        jokeDiv.style.paddingLeft = "40px";
        jokeDiv.scrollIntoView();
        //aText = new Array(data.setup, data.punchline)
        //typewriter()
        console.log("hello world")
        aText = new Array(data.setup, "> " + data.punchline)
        iSpeed = 100; // time delay of print out
        iIndex = 0; // start printing array at this posision
        iArrLength = aText[0].length; // the length of the text array
        iScrollAt = 20; // start scrolling up at this many lines

        iTextPos = 0; // initialise text position
        sContents = ''; // initialise contents variable
        iRow; // initialise current row 
        typewriter()

    });
});

// Typewriter code:
// set up text to print, each item in array is new line
var aText = new Array("The quick brown fox", "jumps over the lazy dog");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    destination.innerHTML = "";

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = "<h3>" + sContents + aText[iIndex].substring(0, iTextPos) + "</h3>";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}






