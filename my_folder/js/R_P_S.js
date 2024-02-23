/*
Note: make case sensitivy not mattewr 
we are making a rock paper scissor game
1. we will try and plya aginst the computer selecting random
2. will tell us the winner of each round and keep score
3. it will be best of 3/5
4. at the end user and total wins of the rouns will be dispalayed*/

// let rlSync = require('readline-sync');
// let user_input = rlSync.question("Rock, Paper  or Scissors\n")
// let user_name = rlSync.question("what is yo name lil bro?\n")

// //make a random generation for cpu
// function computerMove(){
// let move = ['rock','paper','scissors'];
// let random_pick = Math.floor(Math.random()*move.length);
// return move[random_pick];
// }
// console.log(computerMove())

/*
next lets figure out win conditions
rock > scissors
paper > Rock
scissors > paper
draw 
draws dont count towards win score
*/
// function whoWon(playerPick, computerPick){
//     playerPick = user_input.toLocaleLowerCase() ;
//     computerPick = computerMove();

//     console.log(`${user_name} threw down ${playerPick}`);
//     console.log(`Skynet threw down ${computerPick}`);

//     if (playerPick === computerPick){
//         return"It was a TIE!";
//     } else if(
//         //how do we give the user dummy proof options
//         //replace choice with RPS option and loop if nothing is given
//     (playerPick === 'rock' && computerPick==='scissors') ||
//     (playerPick === 'paper' && computerPick==='rock') ||
//     (playerPick === 'scissors' && computerPick==='paper')
//     ){
//         return `${user_name} did a Terminator 2`;
//     } else {
//         return 'Skynet Won Damn...'
//     }

// }
// console.log(whoWon(user_input,computerMove))

// /**
//  We want the best of 3/5
//  add points after
//  while loop
//  telling no points with draws
//  */
// // keep score
//  function playRPS(){
//     let userWins = 0;
//     let computerWins = 0;
// //we want to loop through function above best 3/5
// while (userWins <3 && computerWins <3){
//     let results = whoWon(user_input,computerMove);
//     console.log(results);

//     //adding points to winer
//     if (results.includes('Terminator 2')){
//         userWins++;
//     }else if(results.includes('Skynet')){
//         computerWins++;
//     }
//     console.log(`${user_name} Score: ${userWins}\nSkynet Score: ${computerWins}`);
// }
// console.log(`\nGame Over ${user_name} Score: ${userWins}\nSkynet Score: ${computerWins}`);
// //console.log(`${userWins}${computerWins}`)

//  }
//  playRPS();

let rlSync = require("readline-sync");
let user_name = rlSync.question("what is yo name lil bro?\n");
let user_input ='' 
//make a random generation for cpu
function computerMove() {
  let move = ["rock", "paper", "scissors"];
  /**
   * move.length: This property returns the
    number of elements in the array move.

    Math.floor(): This function rounds a
    number downwards to the nearest integer.
    For example, Math.floor(3.9) returns 3.
   */
  let random_pick = Math.floor(Math.random() * move.length);
  return move[random_pick];
}

function whoWon(playerPick, computerPick) {
  user_input = Number(
    rlSync.question("\nPick a weapon!\n1 = Rock\n2 = Paper\n3 = Scissors\n")
  );
  playerPick = user_input;
  computerPick = computerMove();

  console.log(`${user_name} threw down ${playerPick}`);
  console.log(`Skynet threw down ${computerPick}`);
//how we match selection numbers to strings value type errors 
  if (user_input===1) {
    playerPick = 'rock';
  }else if( user_input===2){
    playerPick ='paper';
  }else{
    playerPick = 'scissors';
  }
//if theier is a tie 
  if (playerPick===computerPick){
    console.log("It was a TIE!");
    return''
  } else if (
    //how do we give the user dummy proof options
    //replace choice with RPS option and loop if nothing is given
    (playerPick === 'rock' && computerPick === "scissors") ||
    (playerPick === 'paper' && computerPick === "rock") ||
    (playerPick === 'scissors' && computerPick === "paper")
  ) {
    return `${user_name} did a Terminator 2`;
  } else {
    return "Skynet Won Damn...";
  }
}
/**
 We want the best of 3/5 
 add points after
 while loop
 telling no points with draws
 */
// keep score
function playRPS() {
  let userWins = 0;
  let computerWins = 0;
  //we want to loop through function above best 3/5
  while (userWins < 3 && computerWins < 3) {
    let results = whoWon(user_input, computerMove);
    console.log(results);

    //adding points to winer
    if (results.includes("Terminator 2")) {
      userWins++;
    } else if (results.includes("Skynet")) {
      computerWins++;
    } else {
      console.log("TIE You Live to fight another day");
    }
    console.log(
      `${user_name} Score: ${userWins}\nSkynet Score: ${computerWins}`
    );
  }
  console.log(
    `\nGame Over\n${user_name} Score: ${userWins}\nSkynet Score: ${computerWins}`
  );

}
playRPS();
