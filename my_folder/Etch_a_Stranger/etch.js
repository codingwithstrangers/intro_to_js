
// we want to toggle on and of mouse and keyboard
// when button is pressed we wantthe color to change
document.getElementById('change').addEventListener('click', function() {
  // Toggle green_text class for mouse_change element
  document.getElementById('mouse_change').classList.toggle('green_text');
  
  // Toggle green_text class for key_change element
  document.getElementById('key_change').classList.toggle('green_text');
  
  // Check if mouse_change is now green
  if (document.getElementById('mouse_change').classList.contains('green_text')) {
    // Remove green_text class from key_change if present
    document.getElementById('key_change').classList.remove('green_text');
  } else {
    // Remove green_text class from mouse_change if present
    document.getElementById('mouse_change').classList.remove('green_text');
  }
});



// we want a function that makes the div squares of the screen
function grid() {
  let collum = document.getElementById("squares");
  for (let c = 0; c < 16; c++) {
    let row = document.createElement("div");
    row.className = "row";
  
  for (let r = 0; r < 32; r++) {
    let divCell = document.createElement("div");
    divCell.className = "cell";
    divCell.innerText = "";
    row.append(divCell);
    // this will check if mouse is active and you can draw only on mouse
    divCell.onmouseover = function(){
      if(document.getElementById('mouse_change').classList.contains('green_text')){
        divCell.style.backgroundColor= 'red';
      }else{
        divCell.style.backgroundColor= 'color';
      }
    }
    document.addEventListener('keydown', function(event){
      if(document.getElementById('key_change').classList.contains('green_text')){
        if (event.key ==='arrowleft'){
          moveleft(divCell);
        }
      };})

  }


  
  collum.append(row);
}

function moveleft(cell){
  cell.style.backgroundColor= 'black';
}
}
grid();


// make the keys draw
// find key_change
// document.addEventListener('keydown', function(event){
//   const key_change= document.getElementById('key_change');
//   const key_active = key_change.classList.contains('green_text');
//   if(key_active){
//     // const cells = document.querySelectorAll('.cell');
//     // this is how we find the selected cell
//     const selectedCell = document.querySelector('.selected');

//     if (selectedCell) {
//       selectedCell.classList.remove('selected');
//     }
//     // figure out key selections
//     let current_cell;
//     // switch is like if statements and can be used to manage conditions
//     switch(event.key){
//       case 'arrowleft':
//         current_cell = selectedCell.previousElementSibling;

//     case 'arrowup':


//     }

//   }
// })



//lets create a simple color change with mouse
// the mouse moving over the box creates the color aka drawing
//dom manipulation and try and make the background change colors
// console.log(document.querySelectorAll(".cell"));
// write a function to change colors of cell when mouse is hovering over  / color selector
// add listener

//  how to shake it up 
// we need a fuction to handle when button is clicked us button id thanks mike

document.getElementById('shake').addEventListener('click',function(){
  let etch = document.querySelector(".etch");
  
  let gridColor = document.querySelectorAll(".cell");
  gridColor.forEach(function(cell) {
    cell.style.transition = "background-color 0.8s"; 
    cell.style.backgroundColor = "transparent"; 
  });
  
  // Function to move left  right
  function shakeLeftRight() {
    etch.style.transition = "transform 0.2s";
    etch.style.transform = "translateX(-20px)";
    
    
    // Move back to 30 after delay
    setTimeout(function() {
      etch.style.transform = "translateX(30px)";
      
      // Reset reset
      setTimeout(function() {
        etch.style.transition = "transform 0.2s ease-in-out";
        etch.style.transform = "translateX(0)";
      }, 200);
    }, 200);
  }
   
  // Function to move up down
  function shakeUpDown() {
    etch.style.transition = "transform 0.3s";
    etch.style.transform = "translateY(20px)";
    
    // Reset 
    setTimeout(function() {
      etch.style.transition = "none";
      etch.style.transform = "translateY(0)";
    }, 300);
  }

  // Function to move up and down
  function shakeUpDown() {
    etch.style.transition = "transform 0.4s ease-in-out";
    etch.style.transform = "translateY(-200px)";
    
    // Move 30y
    setTimeout(function() {
      etch.style.transform = "translateY(30px)";
      
      // Reset 
      setTimeout(function() {
        etch.style.transition = "transform 0.6s ease-in-out";
        etch.style.transform = "translateY(0)";
      }, 200);
    }, 200);
  }

  // Call the functions in sequence
  shakeLeftRight();
  setTimeout(shakeUpDown, 400);
});


  `
  function makeGreen() {button.setColor(green): button, setEventListener(makeRed()} function makeRed() {button.setColor(red); button.setEventListener(makeGreen()}`