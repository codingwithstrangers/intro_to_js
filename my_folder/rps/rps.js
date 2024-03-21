

// This the code for DOM

// 1st we want the pop up
// -Asking user name
// -name will be used in game

let user_name= "Heero";
let playerscore =0;
let cpuscore = 0;

// let rlSync = require("readline-sync");
// let user_name = rlSync.question("what is yo name lil bro?\n");
// let user_input ='' 
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


// the listeners for the users button clicks
document.getElementById('rock').addEventListener('click', function() {
  playerMove("rock");
});

document.getElementById('paper').addEventListener('click', function() {
  playerMove("paper");
});

document.getElementById('scissors').addEventListener('click', function() {
  playerMove("scissors");
});

function playerMove(playerchoice){
alert(playerchoice)
let cpu_pick = computerMove()
  console.log(cpu_pick)


  
//how we match selection numbers to strings value type errors 

if (playerchoice===1) {
  playerchoice = 'rock';
}else if( playerchoice===2){
  playerchoice ='paper';
}else{
  playerchoice = 'scissors';
}
//if theier is a tie 
if (playerchoice===cpu_pick){
  alert("It was a TIE!");
  // return
} else if (
  //how do we give the user dummy proof options
  //replace choice with RPS option and loop if nothing is given
  (playerchoice === 'rock' && cpu_pick === "scissors") ||
  (playerchoice === 'paper' && cpu_pick === "rock") ||
  (playerchoice === 'scissors' && cpu_pick === "paper")
) {
  alert(`${user_name} did a Terminator 2`)
  playerscore++;
  update_score();
} else {
  alert( "Skynet Won Damn...");
  cpuscore++;
  update_score();
}

}


// Update score and anounce the winner

// if (playerscore ===3 || cpuscore ===3 ){
//   winning_results();
// }

function update_score(){
  document.getElementById('player1_score').innerText = playerscore;
  document.getElementById('cpu_score').innerText = cpuscore;
  
  if(playerscore ===3 || cpuscore ===3 ){
    winning_results();
    reset_game();
  }
}

function reset_game(){
  playerscore = 0;
  cpuscore = 0;
  update_score();
}

function winning_results(){
  if(playerscore > cpuscore){
    alert(`${user_name} Stopped Skynet!!`);
  } else if (playerscore<cpuscore){
    alert('SKYNET WON!!!');
  }
}

