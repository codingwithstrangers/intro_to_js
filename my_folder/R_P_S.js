/*
Note: make case sensitivy not mattewr 
we are making a rock paper scissor game
1. we will try and plya aginst the computer selecting random
2. will tell us the winner of each round and keep score
3. it will be best of 3/5
4. at the end user and total wins of the rouns will be dispalayed*/

let rlSync = require('readline-sync');
let user_input = rlSync.question("Rock, Paper  or Scissors\n")
let user_name = rlSync.question("what is yo name lil bro?\n")

//make a random generation for cpu
function computerMove(){
let move = ['rock','paper','scissors'];
let random_pick = Math.floor(Math.random()*move.length);
return move[random_pick];
}
console.log(computerMove())

/*
next lets figure out win conditions
rock > scissors
paper > Rock
scissors > paper
draw 
draws dont count towards win score
*/
function whoWon(playerPick, computerPick){
    playerPick = user_input.toLocaleLowerCase() ;
    computerPick = computerMove();

    console.log(`${user_name} threw down ${playerPick}`);
    console.log(`Skynet threw down ${computerPick}`);

    if (playerPick === computerPick){
        return"It was a TIE!";
    } else if(
        //how do we give the user dummy proof options
        //replace choice with RPS option and loop if nothing is given
    (playerPick === 'rock' && computerPick==='scissors') ||
    (playerPick === 'paper' && computerPick==='rock') ||
    (playerPick === 'scissors' && computerPick==='paper')
    ){
        return `${user_name} did a Terminator 2`;
    } else {
        return 'Skynet Won Damn...'
    }

}
console.log(whoWon(user_input,computerMove))


/**
 We want the best of 3/5 
 add points after
 telling no points with draws
 */
// keep score
 function playRPS