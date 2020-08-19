// Thank you, Mozilla! https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

document.body.onload = bronzeMedal;

function bronzeMedal() {
    var newH1 = document.createElement("H1");
    var newH1Content = document.createTextNode("JavaScript Made This!!")
    newH1.appendChild(newH1Content);
    var currentHeader = document.getElementById("header");
    document.body.insertBefore(newH1, currentHeader);

    var newSpan = document.createElement("span");
    var newSpanContent = document.createTextNode("Zach")
    newSpan.appendChild(newSpanContent);
    var currentHeader2 = document.getElementById("header");
    document.body.insertBefore(newSpan, currentHeader2);
    newSpan.style.color = "red"

    var newSpan = document.createElement("span");
    var newSpanContent = document.createTextNode(" wrote the JavaScript")
    newSpan.appendChild(newSpanContent);
    var currentHeader2 = document.getElementById("header");
    document.body.insertBefore(newSpan, currentHeader2);
    newSpan.style.color = "black"

    var left = document.getElementsByClassName("messages")[0];
    left.getElementsByClassName("message left")[0].innerHTML = "Hello! How are you doing?";
    left.getElementsByClassName("message left")[1].innerHTML = "You must have known I'd be messaging to tell you you won $100,000!";
    left.getElementsByClassName("message right")[0].innerHTML = "I'm having a magnificent day!";
    left.getElementsByClassName("message right")[1].innerHTML = "I didn't, but my day's even better now! Thanks!";

    var clearbutton = document.getElementById("clear-button");
    clearbutton.addEventListener("click", clear)

    function clear(){
        var messages = document.getElementsByClassName("messages")
        for(let i = 0; i < messages.length; i++){
              messages[i].remove()
         }
    }
}




   

// addEventListener?

