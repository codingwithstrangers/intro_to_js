// To make a player vs cpu
// random slect for who goes 1st 
// random selection for cpu
// we want to remember the score (local storage)
// instead of x and o we want to use images

// 1st player to move
function randomplayer(){
    // clear the old turn
    document.getElementById('player1_turn').classList.remove('highlight');
    document.getElementById('player2_turn').classList.remove('highlight');

    // randomly pick a character
    const randomplayer = Math.random()<0.5 ? 'player_1' : 'player_2';
    // the action to be done, if selected you canadd highlight or change text
    if (randomplayer==='player_1'){
        document.getElementById('player1_turn').classList.add('highlight');
        document.getElementById('player2_turn').innerText ='Hold on Lil bro';
    } else{
        document.getElementById('player2_turn').classList.add('highlight');
        document.getElementById('player1_turn').innerText ='Hold on Lil bro';
    }
}
// Call function
randomplayer();

// create library
// Arrays to store moves of players
let player1_moves = [];
let player2_moves = [];

// Winning conditions for Tic Tac Toe
const winConditions = [
    ["cell1_1", "cell1_2", "cell1_3"],
    ["cell2_1", "cell2_2", "cell2_3"],
    ["cell3_1", "cell3_2", "cell3_3"],
    ["cell1_1", "cell2_1", "cell3_1"],
    ["cell1_2", "cell2_2", "cell3_2"],
    ["cell1_3", "cell2_3", "cell3_3"],
    ["cell1_1", "cell2_2", "cell3_3"],
    ["cell1_3", "cell2_2", "cell3_1"]
];

// Function for Skynet (AI) to pick a spot
function skynet_pick_spot() {
    const cells = [
        "cell1_1", "cell1_2", "cell1_3",
        "cell2_1", "cell2_2", "cell2_3",
        "cell3_1", "cell3_2", "cell3_3"
    ];

    let selectedCell;
    do {
        selectedCell = cells[Math.floor(Math.random() * cells.length)];
    } while (player1_moves.includes(selectedCell) || player2_moves.includes(selectedCell));

    player2_moves.push(selectedCell);

    const cellElement = document.getElementById(selectedCell);
    cellElement.style.backgroundImage = "url('image/stranger.png')";
    cellElement.style.backgroundSize = "cover";
    cellElement.style.height = "60px";
    cellElement.style.width = "60px";

    console.log(`Skynet picked: ${selectedCell}`);
}

// Function for player 1 to pick a spot
function player1_pick_spot() {
    const cells = [
        "cell1_1", "cell1_2", "cell1_3",
        "cell2_1", "cell2_2", "cell2_3",
        "cell3_1", "cell3_2", "cell3_3"
    ];

    let selectedCell;
    do {
        selectedCell = cells[Math.floor(Math.random() * cells.length)];
    } while (player1_moves.includes(selectedCell) || player2_moves.includes(selectedCell));

    player1_moves.push(selectedCell);

    const cellElement = document.getElementById(selectedCell);
    cellElement.style.backgroundImage = "url('image/vs.png')";
    cellElement.style.backgroundSize = "cover";
    cellElement.style.height = "60px";
    cellElement.style.width = "60px";

    console.log(`Player 1 picked: ${selectedCell}`);
}

// Simulate Skynet picking a spot
skynet_pick_spot();

// Simulate player 1 picking a spot
player1_pick_spot();
