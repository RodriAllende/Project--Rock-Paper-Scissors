

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
    const computerselection =   computerchoice();
    console.log(playRound(playerchoice, computerselection));