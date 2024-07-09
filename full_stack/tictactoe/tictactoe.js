


// The Final-----

let player1_moves = [];
let player2_moves = [];
let player1_score = 0;
let player2_score = 0;

let player1_circle1Filled = ''; 
let player1_circle2Filled = '';
let player2_circle1Filled = ''; 
let player2_circle2Filled = '';

const win_conditions = [
    ["cell1_1", "cell1_2", "cell1_3"],
    ["cell2_1", "cell2_2", "cell2_3"],
    ["cell3_1", "cell3_2", "cell3_3"],
    ["cell1_1", "cell2_1", "cell3_1"],
    ["cell1_2", "cell2_2", "cell3_2"],
    ["cell1_3", "cell2_3", "cell3_3"],
    ["cell1_1", "cell2_2", "cell3_3"],
    ["cell1_3", "cell2_2", "cell3_1"]
];
// how players are selected at the start of each round
function randomplayer() {
    document.getElementById('player1_turn').classList.remove('highlight');
    document.getElementById('player2_turn').classList.remove('highlight');

    const firstPlayer = Math.random() < 0.5 ? 'player_1' : 'player_2';
    if (firstPlayer === 'player_1') {
        document.getElementById('player1_turn').classList.add('highlight');
        document.getElementById('player2_turn').innerText = 'Your Move';
    } else {
        document.getElementById('player2_turn').classList.add('highlight');
        document.getElementById('player1_turn').innerText = 'Your Move';
        setTimeout(skynet_pick_spot, 500);
    }
}
// can we make it smarter?
function skynet_pick_spot() {
    const cells = [
        "cell1_1", "cell1_2", "cell1_3",
        "cell2_1", "cell2_2", "cell2_3",
        "cell3_1", "cell3_2", "cell3_3"
    ];
// is it possible to make it look at my moves and see a better option  so confusing 
    let selectedCell;
    do {
        selectedCell = cells[Math.floor(Math.random() * cells.length)];
        // cant pick moves already made
    } while (player1_moves.includes(selectedCell) || player2_moves.includes(selectedCell));

    player2_moves.push(selectedCell);
// put the pieces better on board
    const cellElement = document.getElementById(selectedCell);
    cellElement.style.backgroundImage = "url('image/terminator.png')";
    cellElement.style.backgroundSize = "cover";
    cellElement.style.height = "60px";
    cellElement.style.width = "60px";
    cellElement.style.left= "38px";
    cellElement.style.top= "52px";
    cellElement.style.position = "relative";
    console.log(`Skynet picked: ${selectedCell}`);
// fuction to check game winning condition. i kept calling this at the end of the match
// vs the end of each move
    check_game_status('player_2');
}

function player1_pick_spot(cellId) {
    const cellElement = document.getElementById(cellId);
    if (cellElement.style.backgroundImage !== '') {
        console.log('Cell already taken, please select another.');
        return;
    }

    player1_moves.push(cellId);

    cellElement.style.backgroundImage = "url('image/vs.png')";
    cellElement.style.backgroundSize = "cover";
    cellElement.style.height = "60px";
    cellElement.style.width = "60px";
    cellElement.style.left= "38px";
    cellElement.style.top= "52px";
    cellElement.style.position = "relative";
    console.log(`Player 1 picked: ${cellId}`);

    check_game_status('player_1');

    if (!gameOver) {
        setTimeout(skynet_pick_spot, 500);
    }
}

let gameOver = false;

function check_game_status(currentPlayer) {
    for (let condition of win_conditions) {
        const [a, b, c] = condition;
        if (player1_moves.includes(a) && player1_moves.includes(b) && player1_moves.includes(c)) {
            gameOver = true;
            player1_score++;
            updateCircles('player1');
            setTimeout(() => {
                alert('Victory for The People');
                reset_board();
                check_winner();
            }, 500);
            return;
        }
        if (player2_moves.includes(a) && player2_moves.includes(b) && player2_moves.includes(c)) {
            gameOver = true;
            player2_score++;
            updateCircles('player2');
            setTimeout(() => {
                alert('Skynet wins the round! Try Harder');
                reset_board();
                check_winner();
            }, 500);
            return;
        }
    }

    if (player1_moves.length + player2_moves.length === 9) {
        gameOver = true;
        update_scoreboard();
        setTimeout(() => {
            alert("We Don't do TIES!!");
            reset_board();
        }, 500);
    }
}

function updateCircles(winner) {
    if (winner === 'player1') {
        if (player1_circle1Filled === '') {
            player1_circle1Filled = 'black';
        } else if (player1_circle2Filled === '') {
            player1_circle2Filled = 'black';
        }
    } else if (winner === 'player2') {
        if (player2_circle1Filled === '') {
            player2_circle1Filled = 'red';
        } else if (player2_circle2Filled === '') {
            player2_circle2Filled = 'red';
        }
    }

    // update the scoreboard visuals
    update_scoreboard();
}

function update_scoreboard() {
    const player1_circle1 = document.querySelector('.p1_match_point .circle1');
    const player1_circle2 = document.querySelector('.p1_match_point .circle2');
    // const player1_circle3 = document.querySelector('.p1_match_point .circle3');

    const player2_circle1 = document.querySelector('.p2_match_point .circle1');
    const player2_circle2 = document.querySelector('.p2_match_point .circle2');
    // const player2_circle3 = document.querySelector('.p2_match_point .circle3');

    player1_circle1.style.backgroundColor = player1_circle1Filled;
    player1_circle2.style.backgroundColor = player1_circle2Filled;
    // player1_circle3.style.backgroundColor = player1_circle3Filled;

    player2_circle1.style.backgroundColor = player2_circle1Filled;
    player2_circle2.style.backgroundColor = player2_circle2Filled;
    // player2_circle3.style.backgroundColor = player2_circle3Filled;
}

function check_winner() {
    if (player1_score === 2 || player2_score === 2) {
        setTimeout(() => {
            alert(player1_score === 2 ? 'Get fuxed Skynet!' : 'Skynet wins the war, AI 4 Life!');
            reset_game();
        }, 500);
    }
}

function reset_board() {
    player1_moves = [];
    player2_moves = [];
    gameOver = false;

    const cells = [
        "cell1_1", "cell1_2", "cell1_3",
        "cell2_1", "cell2_2", "cell2_3",
        "cell3_1", "cell3_2", "cell3_3"
    ];

    cells.forEach(cellId => {
        const cellElement = document.getElementById(cellId);
        cellElement.style.backgroundImage = '';
    });

    randomplayer();
}
// reset your board 
function reset_game() {
    player1_score = 0;
    player2_score = 0;
    player1_circle1Filled = '';
    player1_circle2Filled = '';
    player2_circle1Filled = '';
    player2_circle2Filled = '';
    update_scoreboard();
    reset_board();
}

randomplayer();
