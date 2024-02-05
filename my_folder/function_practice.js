//this is how a function is named
//function = def
// function funcName() {
//     func_body;
//   }


// function showCount(count) {
//   // if count is undefined or null, show "unknown"
//   alert(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

//new function for animal and cars
// let rlSync = require('readline-sync');
// let name = (rlSync.question("What is your name lil bro?\n"));

// function favoriteAnimalandCar(animal, car) {
//   let rlSync = require('readline-sync')
//   let fillin_car =(rlSync.question("What is your favorite car:\n"))
//   let fillin_animal =(rlSync.question("What is your favorite animal:\n"));
//   animal = fillin_animal || 'no text given' //|| = or , && = and, ! = Not
//   car = fillin_car || 'no text given'
//     return [`${name} will tell us two things about themseleves `, animal + " is my favorite animal!",
//     `My favorit car is ${car}`];
//   }

//   console.log(favoriteAnimalandCar('','',''))
// //

// function checkAge(age) {
 
//   if (age >= 18) {
//     return (`${true} this is true`);
//   } else {
//     return ('Do you have permission from your parents?');
//   }
// }
// let userAge= 19;
// console.log(checkAge(userAge))
// let age =(8);

// if ( checkAge(age) ) {
//   console.log( 'Access granted' );
// } else {
//   console.log( 'Access denied' );
// }

// function areYouOldEnough(){
//   let rlSync = require('readline-sync')
//   let fillin_name = (rlSync.question("What is your name lil bro?\n"));
//   let fillin_dob = (rlSync.question("How old are you lil bro?\n"));
  
//   if (fillin_dob>=18)
//   {
//     return true
//   } else {
//     return(`${fillin_name} you arent old enough to be around these parts`)
//   }
// }

//   console.log(areYouOldEnough())

  // function checkAge(age) {
  //   return (age > 18) ? true : confirm('Did parents allow you?');
  // }
  // function checkAge(age) {
  //   return (age > 18) || confirm('Did parents allow you?');
  // }


  //practice questions 1 just add 7 to a number

  // function add7() {
  //   return 7+7
  // }

  // console.log(add7())

  //Now let ask a randowm number and add 7 

  // let rlSync = require('readline-sync');
  // let ask_number = Number(rlSync.question("Give me a number lil bro?\n"));

  // function add_7(){
  //   return ask_number + 7
  // }

  // console.log(add_7())

  //make a function that multplies some ish 
  // let rlSync = require('readline-sync');
  // let ask_1number = Number(rlSync.question("Give me a number lil bro?\n"));
  // let ask_2number = Number(rlSync.question("Give me another number lil bro?\n"));

  // function add_7(){
  //   return ask_1number * ask_2number
  // }

  // console.log(add_7());


  //question 3 Write a function called capitalize 
  //that takes a string and returns that string with only
  //the first letter capitalized. Make sure
  //that it can take strings that are lowercase, UPPERCASE or BoTh.

  // function stopThecap(input_string = "") {
  //   //if empty redo
  //   if (input_string.length === 0){
  //     return ('No value')
  //   }
  //     return input_string.charAt(0).toUpperCase() + input_string.slice(1).toLowerCase()
  // }
  
  // var example1 = stopThecap('HEY')
  // var example2 = stopThecap('HeErO')
  // var example3 = stopThecap('hellp')
  // console.log(example1, example2, example3)

  //get the last letter of the word only
  // function stopThecap(input_string = "") {
  //   //if empty redo
  //   if (input_string.length === 0){
  //     return ('No value')
  //   } 
  //     return input_string.charAt(input_string.length-4)

  // }
  // var example1 = stopThecap('HEY')|| "now value"
  // var example2 = stopThecap('HeErO')
  // var example3 = stopThecap('hellp')
  // console.log(example1, example2, example3)

  //Write a program that takes a user’s
  //input and prints the numbers from one to the
  //number the user entered. However, for multiples
  //of three print Fizz instead of the number and for
  //the multiples of five print Buzz. For numbers which
  //are multiples of both three and five print FizzBuzz.

  
  let rlSync = require('readline-sync');
  let ask_number = Number(rlSync.question("Give me a number lil bro?\n"));
  

  //we need a fuction for fizzbuzz figure out math for 3and5 multi. 
  function Getwrecked(number){
    // this is if the number is / bouth 3 and 5 (eg 15)
    if (number%3 === 0 && number%5 === 0){
      return'FizzBuzz';
    }
    else if (number%3===0){
      return 'Fizz'
    }
    else if (number%5===0){
      return 'Buzz'
    }
    else{ 
    return number.toString();
  }
  }
//this is the loop and you can set the number to start from here using i= number
for (let i =1; i <=ask_number; i++){
  console.log(Getwrecked(i))
}


// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }