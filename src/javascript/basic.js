




console.log("Hello, World")

function journey() {
        onButtonClicked();
        grabValue();
        size();
}


function onButtonClicked() {
        console.log("I'm in the button click event")
        
}

function grabValue(){
        var x = document.getElementById("userInput").value;
        console.log(Number(x) + 1);
}

function size() {
        var x = document.getElementById("userInput").value;
        if (Number(x) > 0) {
                if (Number(x) <= 10) {
                        return document.getElementById("output").innerHTML = "small";
                } else if (Number(x) <= 19 ) {
                        return document.getElementById("output").innerHTML = "med";
                } else if (Number(x) >= 20) {
                        return document.getElementById("output").innerHTML = "large";
                }
        }
}


document.getElementById("myButton").addEventListener("click", journey) 
