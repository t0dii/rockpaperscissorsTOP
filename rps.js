function getComputerChoice(){
    const computerValues = ['rock', 'paper', 'scissors'];
    const randomValue = Math.floor(Math.random()* computerValues.length);
    return computerValues[randomValue];
}

function getHumanChoice(){
   return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice){
    if (humanChoice == computerChoice) {
            console.log("Tie!")
            }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose!")
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats scissors!")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! ")
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper!")
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose!")
            computerScore++;
        }
    }
    for (let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore){
        console.log("You beat the computer")
    }else if(humanScore < computerScore){
        console.log("You lost to the computer")
    }else{
        console.log("tie")
    }
}
playGame();