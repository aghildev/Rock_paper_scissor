let compChoice = document.querySelector(".computerChoice");
let userChoice = document.querySelector(".userChoice");
let result = document.querySelector("#result")

const selections = document.querySelectorAll(".button")


selections.forEach((selection) => {
    selection.addEventListener("click",(e)=>{
        userChoice.innerHTML = e.target.id
        generateComputerChoice()
        getResult()
    })
})

function generateComputerChoice() {
    let choices = ["rock","paper","scissor"]
    let random = Math.floor(Math.random()*choices.length)
    //console.log(choices[random])
    compChoice.innerHTML = choices[random]
    //return choices[random]
}

function getResult(){
    if(compChoice.innerHTML == userChoice.innerHTML){
        result.innerHTML = "Its a Draw"
    }
    if(compChoice.innerHTML == "rock" && userChoice.innerHTML == "paper"){
        result.innerHTML = "You Won"
    }
    if(compChoice.innerHTML == "rock" && userChoice.innerHTML == "scissor"){
        result.innerHTML = "You lose"
    }
    if(compChoice.innerHTML == "paper" && userChoice.innerHTML == "scissor"){
        result.innerHTML = "You won"
    }
    if(compChoice.innerHTML == "paper" && userChoice.innerHTML == "rock"){
        result.innerHTML = "You Lose"
    }
    if(compChoice.innerHTML == "scissor" && userChoice.innerHTML == "rock"){
        result.innerHTML = "You won"
    }
    if(compChoice.innerHTML == "scissor" && userChoice.innerHTML == "paper"){
        result.innerHTML = "You Lose"
    }
}