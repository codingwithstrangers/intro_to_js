
// //ask age via console and math 
// let rlSync= require('readline-sync');
// let current_age =Number( rlSync.question('How old are you Stranger?\n'))

// console.log(`You are ${current_age} years old mother lover!`)
// console.log(`In ${10} years you will be ${current_age+10} years old!`)


//ask age via console and math 
// let rlSync= require('readline-sync');
// let current_age = parseInt( rlSync.question('How old are you Stranger?\n'))

// console.log(`You are ${current_age} years old mother lover!`)
// console.log(`In ${10} years you will be ${current_age+10} years old!`)

// We want to use a 4 loop to run this ish 
let rlSync = require('readline-sync');
let current_age = Number(rlSync.question("How old are you Lil Bro?\n"));

for (let i = 10; i<=40; i+=10){
    let newage = current_age + i;
    console.log(`In ${i} years, you will be ${newage} years old`)
}