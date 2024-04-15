// ```
// - Fuction to do the Math
// - Function to do the DOM for results
// - Add button clicks
// - add key board support
// - key sound
// - Users can get floating point numbers if they do the math required
// ```
// get keys input
// let keys= document.getElementById('id');


// writing all the math functions
// function add(a,b){
//   return a+b;
// }



const num_key = document.querySelectorAll(".lower_level button");
const his_back_key = document.querySelectorAll(".middle_level");
const equationIDs = ["equation1", "equation2", "equation3", "equation4"];

// arr to hold all inputs
let key_jail = [];
let key_holding = [];
// this to stop the number from going off screen
let maxinput = 52;
// Function to handle click events
function key_click(event) {
  const buttonValue = event.target.textContent;
  // this is how the math will start 
    if (buttonValue === '=') {
      if(key_jail.length <3){
      let equal_sign = event.target.textContent;
        // find the equal sign by checking the key jail for possible code breakers
        console.log(equal_sign)
        // send error message
        document.getElementById(equationIDs[1]).textContent = "ain't No Numbers bro";
        document.getElementById(equationIDs[1]).style.textAlign ='center'
      }else{
      // }else{we need to make for loop to check for + in key jail
      // need to check plus is not in front of number 
      let has_plus = false;
      for(let i =0; i<key_jail.length - 1;i++){
        if(key_jail[i]==='+'){
          has_plus=true 
        }
      }
      // if the + is not surrounded by a number send error message
      

      }
    }

  if (buttonValue === 'Back Space') {
    if (key_jail.length > 0) {
      // Remove the last entry from key_jail and add it to key_holding
      const removedKey = key_jail.pop();
      key_holding.push(removedKey);

      // Update equation text content to remove the last character
      equationIDs.forEach((id, index) => {
        const equationDiv = document.getElementById(id);
        const startIndex = index * 13;
        const endIndex = startIndex + 13;
        equationDiv.textContent = key_jail.slice(startIndex, endIndex).join(" ");
      });
    }
  } else {
    // Add the new character to key_jail
    key_jail.push(buttonValue);

    // Check for maximum input length
    if (key_jail.length >= maxinput) {
      clear_everything();
      document.getElementById(equationIDs[1]).textContent = "This Aint no TI 83 boi";
      document.getElementById(equationIDs[1]).style.textAlign ='center'
    } else {
      equationIDs.forEach((id, index) => {
        const equationDiv = document.getElementById(id);
        const startIndex = index * 13;
        const endIndex = startIndex + 13;
        equationDiv.textContent = key_jail.slice(startIndex, endIndex).join(" ");
      });
    }
  }
}
// Add click event listeners to all buttons
num_key.forEach((num_key) => {
  num_key.addEventListener("click", key_click);
  his_back_key.forEach((his_back_key) => {
    his_back_key.addEventListener("click", key_click);
  });
});
// making function to clear screen
function clear_everything() {
  equationIDs.forEach((id) => {
    document.getElementById(id).textContent = "";
  });
}
