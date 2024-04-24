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
// for history
let key_holding = [];
// math PEMDAS
let key_prison = [];
// this to stop the number from going off screen
let maxinput = 52;
// Function to handle click events
function key_click(event) {
  const buttonValue = event.target.textContent;
  const operation_ish = ["+", "-", "/", "x", "*"];

  // Check if '=' button has been used
  if (buttonValue === "=") {
    // Filter out the equal signs from key_jail
    const key_jail_filtered = key_jail.filter((item) => item !== "=");

    if (key_jail_filtered.length < 3) {
      // If less than three entries in key_jail after removing '=' sign, handle error
      document.getElementById(equationIDs[1]).textContent =
        "At least three entries required for calculation";
      document.getElementById(equationIDs[1]).style.textAlign = "center";
      return; // Exit the function early
    }

    // Check if one of the operation symbols from operation_ish is used between two numbers
    let numbersBeforeOperation = false;
    let operationFound = false;
    for (let i = 0; i < key_jail_filtered.length; i++) {
      if (!isNaN(key_jail_filtered[i])) {
        // If current element is a number
        numbersBeforeOperation = true; // Set flag to true when encountering a number
      } else if (operation_ish.includes(key_jail_filtered[i])) {
        // If current element is an operation symbol
        if (!numbersBeforeOperation) {
          // If an operation symbol is found before any number, handle error
          document.getElementById(equationIDs[1]).textContent =
            "Invalid expression: Operation symbol before number";
          document.getElementById(equationIDs[1]).style.textAlign = "center";
          return; // Exit the function early
        }
        operationFound = true;
        numbersBeforeOperation = false; // Reset flag after encountering an operation symbol
      } else if (
        key_jail_filtered[i] === "." &&
        (!numbersBeforeOperation || i === 0)
      ) {
        // If current element is a '.' and there's no number before it
        // or it's the first element in the array, insert '0' before the '.'
        key_jail_filtered.splice(i, 0, "0");
        // Increment the loop counter to account for the inserted '0'
        i++;
      } else if (key_jail_filtered[i] === "." && numbersBeforeOperation) {
        // If current element is a '.', and it's after a number
        // and before an operation symbol, insert '0' behind the '.'
        key_jail_filtered.splice(i, 0, "0");
        // Increment the loop counter to account for the inserted '0'
        i++;
      }
    } // Check if there's at least one operation symbol present
    if (!operationFound) {
      // If no operation symbol is found, handle error
      document.getElementById(equationIDs[1]).textContent =
        "Can't cook with no fire!";
      document.getElementById(equationIDs[1]).style.textAlign = "center";
      return;
    }
    // this should make it possibel to call function?
    const result = Math_ish(key_jail_filtered, operation_ish);
    // display results
    document.getElementById(equationIDs[3]).textContent = result;
    document.getElementById(equationIDs[3]).style.textAlign = "center";
  }

  // key prison holding
  let key_prison = key_jail.slice();

  if (buttonValue === "Back Space") {
    if (key_jail.length > 0) {
      // Remove the last entry from key_jail and add it to key_holding
      const removedKey = key_jail.pop();
      key_holding.push(removedKey);

      // Update equation text content to remove the last character
      equationIDs.forEach((id, index) => {
        const equationDiv = document.getElementById(id);
        const startIndex = index * 13;
        const endIndex = startIndex + 13;
        equationDiv.textContent = key_jail
          .slice(startIndex, endIndex)
          .join(" ");
      });
    }
  } else {
    // Add the new character to key_jail
    key_jail.push(buttonValue);

    // Check for maximum input length
    if (key_jail.length >= maxinput) {
      clear_everything();
      document.getElementById(equationIDs[1]).textContent =
        "This Aint no TI 83 boi";
      document.getElementById(equationIDs[1]).style.textAlign = "center";
    } else {
      equationIDs.forEach((id, index) => {
        const equationDiv = document.getElementById(id);
        const startIndex = index * 13;
        const endIndex = startIndex + 13;
        equationDiv.textContent = key_jail
          .slice(startIndex, endIndex)
          .join(" ");
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

// Lets do the math part this code shouldnt effect th cal
let numbers = [];
let ops = [];
// of function time
function Math_ish(numbers, ops) {
  // we have to do all the switch cases
  const calculator = (num1, oop, num2) => {
    switch (oop) {
      case "^":
        return Math.pow(num1, num2);
      case "x":
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      default:
        console.error("your case switch clocked out loser")
        return NAN
      // document.getElementById(equationIDs[1]).style.textAlign = "center";
    }
    key_jail_filtered[0], key_jail_filtered[1], key_jail_filtered[2];
    return calculator;
  };
  //  dealing with parenthesis
  while (key_prison.length > 0) {
    let par_start = key_prison.indexOf("(");
    if (par_start !== -1) {
      let par_end = key_prison.indexOf(")");
      if (par_end === -1) {
        // error message
        document.getElementById(equationIDs[1]).textContent = "Missing (fool)";
        document.getElementById(equationIDs[1]).style.textAlign = "center";
        console.error("Missing closing parenthesis");
        return NaN;
      }
      // let figure out what is th solution inside paranthesis
      let solution = Math_ish(
        numbers.slice(par_start + 1, par_end),
        key_prison.slice(par_start + 1, par_end)
      );
      // replace the solution with ish in parantheesis
      numbers.splice(par_start, par_end - par_start + 1, solution);
      // remove () from key prison to solve equation
      key_prison.splice(par_start, par_ens - par_start + 1);
    } else {
      // now we can handle PEMDAS
      let index = key_prison.indexOf("^");
      if (index !== -1) {
        let solution = calculator(numbers[index], "^", numbers[index + 1]);
        numbers.splice(index, 2, solution);
        key_prison.splice(index, 1);
        index = ops.indexOf("^");
      }
      // handle multiple
      index = ops.indexOf("*");
      // thi may need to have x and *
      if (index === -1) index = ops.indexOf("/");
      while (index !== -1) {
        const solution = calculator(
          numbers[index],
          ops[index],
          numbers[index + 1]
        );
        numbers.splice(index, 2, solution);
        numbers.splice(index, 1);
        // this may need to be x
        index = ops.indexOf("*");
        if (index === -1) index = ops.indexOf("/");
      }
      // handle the addition and subtraction
      index = ops.indexOf("+");
      if (index === -1) index = ops.indexOf("-");
      while (index !== -1) {
        const solution = calculator(
          numbers[index],
          ops[index],
          number[index + 1]
        );
        numbers.splice(index, 2, solution);
        ops.splice(index, 1);
        index = ops.indexOf("+");
        if (index === -1) index = ops.indexOf("-");
      }
      return numbers[0];
    }
  }
}
