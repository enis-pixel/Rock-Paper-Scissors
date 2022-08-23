let array = ["rock", "paper", "scissors"];

let input = document.getElementById("buttons");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let output = document.getElementById("output");
let you = document.getElementById("you");
let computer = document.getElementById("computer");
let ergebnis = document.getElementById("ergebnis");


rock.addEventListener("click", function(event) {
    clickEvent(rock);
})

paper.addEventListener("click", function(event) {
    clickEvent(paper);
})

scissors.addEventListener("click", function(event) {
    clickEvent(scissors);
})

function clickEvent(element){
    var random = Math.floor(Math.random() * array.length);
    output.innerHTML = array[random];

    let inputValue = element.value;
    let outputValue = array[random];

    chooseOutputImg();

    function chooseOutputImg(){
        switch(outputValue){
            case "rock":
                output.innerHTML = "<img src=\"images/rock.png\">";
                break;
            case "paper":
                output.innerHTML = "<img src=\"images/paper.png\">";
                break;
            case "scissors":
                output.innerHTML = "<img src=\"images/scissors.png\">";
                break;
        }
    }

    function chooseInputImg(){
        switch(inputValue){
            case "rock":
                input.innerHTML = "<img src=\"images/rock.png\">";
                break;
            case "paper":
                input.innerHTML = "<img src=\"images/paper.png\">";
                break;
            case "scissors":
                input.innerHTML = "<img src=\"images/scissors.png\">";
                break;
        }
    }
    
    if(inputValue == "rock" && outputValue == "paper"){
        computer.innerHTML++;
    } else if(inputValue == "paper" && outputValue == "rock"){
        you.innerHTML++;
    } else if(inputValue =="paper" && outputValue == "scissors"){
        computer.innerHTML++;
    } else if(inputValue == "scissors" && outputValue == "paper"){
        you.innerHTML++;
    } else if(inputValue == "rock" && outputValue == "scissors"){
        you.innerHTML++;
    } else if(inputValue == "scissors" && outputValue == "rock"){
        computer.innerHTML++;
    }

    if(you.innerHTML == 3 && you.innerHTML > computer.innerHTML){
        ergebnis.innerHTML = "You won the game!";
        document.getElementById("output").innerHTML = " ";
        ergebnis.style.backgroundColor = "#29EF8C";
        löschen();
        chooseOutputImg();
        chooseInputImg();
    }

    if(computer.innerHTML == 3 && computer.innerHTML > you.innerHTML){
        ergebnis.innerHTML = "The computer won the game!";
        ergebnis.style.backgroundColor = "#FF6984";
        löschen();
        chooseOutputImg();
        chooseInputImg();
    }

    function löschen() {
        const buttons = document.getElementById("buttons");

        while (buttons.hasChildNodes()) {
          buttons.removeChild(buttons.firstChild);
        }
    }
}