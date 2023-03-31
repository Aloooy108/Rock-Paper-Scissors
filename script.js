/*a func that generate a random number
between 1 to 3 for rock, paper, and scissors.
*/

function getComputerChoice(){
    const computerChoice=Math.floor(Math.random() * 3) + 1;
    // if(computerChoice==1)return "Rock";
    // else if(computerChoice==2)return "Paper";
    // else return "Scissors";
    return computerChoice
}
//console.log(getComputerChoice());


/*a func that take user input. should be
case insensitive 
*/
function getUserChoice(){
    let userInput=prompt("Choose: Rock, paper, or scissors.");
    userInput= userInput.toLowerCase();
    if(userInput=="rock") return 1;
    else if(userInput=="paper")return 2;
    else if (userInput=="scissors")return 3;
    else return "Wrong input";
}
//console.log(getUserChoice());

/*a func that compares 2 inputs and declares
the winner.
*/
function playRound(){
    const cpu=getComputerChoice();
    const player=getUserChoice();
    if(player=="Wrong input"){
        console.log(player);
        return 0;
    }
    console.log("Player chose "+numToRPS(player));
    console.log("Computer chose "+numToRPS(cpu));
    if((player+1)%3==cpu){
        console.log("Computer won");
        return-1;
    }
    else if(player==cpu){
        console.log("It's a draw");
        return 0;
    }
    else{
        console.log("player won");
        return 1;
    }
    
}
//console.log(playRound());
//func that plays an x number of rounds then declares
// the winner
function game(rounds){
    let count=0;
    for (let index = 0; index < rounds; index++) {
        let outcome=playRound();
        count= count+outcome;
    }
    if (count>0) console.log("You won");
    else if (count<0)console.log("You lost");
    else console.log("It was a draw");
}
game(3);

//function to capitalize first letter.
// function capitalize(str){
//     str=str.toLowerCase();
//     let temp=str.charAt(0);
//     temp=temp.toUpperCase();
//     str=str.slice(1);
//     str=temp+str;
//     return str;
// }

function numToRPS(num){
    if(num==1)return"Rock";
    else if (num==2)return"Paper";
    else return"Scissors";
}