function getComputerChoice(){
    const choices = ("rock”, “paper” or “scissors");
    const randomIndex = math.floor(Math.random*choices.length)
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:(rock, paper, or scissors):");
    while(!["rock, paper, scissor"]){
        choice= prompt("Invalid choice! Please enter paper, rock, or scissors:");
        return choice
    }
}
let humanScore= 0;
let computerScore= 0;


function playGame(){


    function playRound(humanChoice, computerChoice){

        humanChoice= humanChoice.toLowerCase();
    
        if(humanChoice===computerChoice){
            console.log("It's a tie.")
        }
        else if(humanChoice==='paper' && computerChoice==='rock' ||
            humanChoice==='scissors' && computerChoice==='paper' ||
            humanChoice==='rock' && computerChoice==='scissors'
        ){
            console.log("You win")
            humanScore++
        }
        else{
            console.log('You lose')
            computerScore++
        }
    }

    for(i=0, i<5, i++){
        humanChoice= getHumanChoice();
        computerChoice= getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
playGame();