const systemChoiceDisplay = document.getElementById('system-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay= document.getElementById('result')

const possibleChoices= document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(event)=>{
 userChoice=event.target.id
 playerChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice(){
    let randomNumber= Math.floor(Math.random()*possibleChoices.length+1)

    if(randomNumber === 1){
        computerChoice='rocks'
    }else if(randomNumber === 2){
        computerChoice='paper'
    }else{
        computerChoice='scissor'
    }
    systemChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if (userChoice===computerChoice){
        result='It is a tie!'
    }
    if (userChoice==='paper' && computerChoice==='rocks'){
        result='You win'
    }
    if (userChoice==='rocks' && computerChoice==='paper'){
        result='You lose'
    }
    if (userChoice==='scissor' && computerChoice==='paper'){
        result='You win'
    }
    if (userChoice==='scissor' && computerChoice==='rocks'){
        result='You lose'
    }
    if (userChoice==='paper' && computerChoice==='scissor'){
        result='You lose'
    }
    if (userChoice==='rocks' && computerChoice==='scissor'){
        result='You win'
    }
    resultDisplay.innerHTML=result
    
}