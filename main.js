

console.log("Aprendiendo");

const choices = ["Rock", "Paper", "Scissors"];
function  computerchoice() {
const choice =choices[Math.floor(Math.random()*choices.length)];
return choice;
}


function checkingWinner (playerchoice , computerchoice) {
    if (playerchoice == computerchoice){
        return "Tie";
    }
       else if (
                (playerchoice == "Rock" && computerchoice =="Scissors") ||
                (playerchoice == "Scissors" && computerchoice =="Paper") ||
                (playerchoice == "Paper" && computerchoice =="Rock") 
       ){
       return "Player" ;
    } else {
    return "Computer" ;
 
    }}

    function playRound (playerchoice,computerchoice) {
        const result=checkingWinner(playerchoice, computerchoice);
        if (result =="Tie"){
            return "Its a Tie" 
        } else if (result == "Player"){
            return `You Win ${playerchoice} beat ${computerchoice}`} 
            else {
                return `You lose ${computerchoice} beat ${playerchoice}`

            }
    }


    const playerchoice = "Rock";
    const computerselection = computerchoice();
   

    function getPlayerChoice() {
        let validInput = false;
    
        while(validInput == false) {
            const choice = prompt("Rock Paper Scissor");
    
            if (choice == null) {
                continue;
            }
            const choiceInLower = choice.toLowerCase();
            if(choice.includes(choiceInLower)) {
                validInput = true;
                return choiceInLower;
            }
        }
    }

    function game () {
        console.log("Welcome");

        let playerScore = 0;
        let computerScore = 0;
        for (let i=0 ;i<5;i++){
            const playerchoice = getPlayerChoice();
            const computerselection = computerchoice();
          
            console.log(playRound(computerselection, playerchoice));
            if (checkingWinner(playerchoice, computerselection) == "Player") {
                playerScore++;
            }
            else if (checkingWinner(playerchoice, computerselection) == "Computer") {
                computerScore++;
            }
        }
        console.log("Game over!")
         if (playerScore > computerScore) {
            console.log("Player was the winner!");
        } else if (playerScore < computerScore) {
            console.log("Computer was the winner!");
        } else {
            console.log("We have a tie!");
        }
    }

        
    
     game();

 
     