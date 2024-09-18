

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomIndex= Math.floor(Math.random()*choices.length)
    return(choices[randomIndex]);
};



function playGame(){
    let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice===computerChoice){
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } 
    else if(humanChoice=== 'rock' && computerChoice==='scissors'
        || humanChoice==='scissors'&& computerChoice==='paper'
        ||humanChoice==='paper'&&computerChoice==='rock'){
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}
for(i=0; i<=5; i++){
const humanChoice=prompt("Round " +(i+1)+ ": Please enter your choice from (rock, paper, or scissors):").toLowerCase();
const computerChoice= getComputerChoice();
playRound(humanChoice,computerChoice);
}

console.log(`Final Scores- Human Score:${humanScore}, Computer Score:${computerScore}`);
if(humanScore>computerScore){
    console.log("Congratulations! You are the overall winner")
}
else if(humanScore<computerScore){
    console.log("Sorry, the computer is the overall winner.");
}
else{
    console.log("It's a tie!");
}
}

playGame();
