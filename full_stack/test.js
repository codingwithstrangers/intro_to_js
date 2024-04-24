// // function addOne(num) {
// //     return num + 1;
// //   }
// //   const arr = [1, 2, 3, 4, 5];
// //   const mappedArr = arr.map(addOne);
// //   console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// //     let pl_arr = [1, 2, 3, 4, 5]
// //     let new_arr=[]
// //     for (let i = 0; i < pl_arr.length; i++){
// //         new_arr.push(pl_arr[i]+1);
// //     console.log(new_arr)
// //     }

// // function sumOfTripledEvens(array) {
// //   let sum = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     // Step 1: If the element is an even number
// //     if (array[i] % 2 === 0) {
// //       // Step 2: Multiply this number by three
// //       const tripleEvenNumber = array[i] * 3;

// //       // Step 3: Add the new number to the total
// //       sum += tripleEvenNumber;
// //     }
// //   }
// //   return sum;
// // }

// console.log(eval("4 * 5 / 7 + 5"));

//   we need a variable to split the sentence into words
//   we need a function to go through words to find acronyms
//   we need way of proofing ALL CAP more the an 3 and way tell if it is in list of known_acronyms
//   if statement with an else
//returns string without known acronyms or highlights unknown acronyms
function acronymBuster(string){
    let known_acronym={
      'KPI': "key performance indicators",
      'EOD' : "the end of the day",
      'TBD' : "to be decided",
      'WAH' : "work at home",
      'IAM' : "in a meeting",
    'OOO': "out of office",
    'NRN' : "no reply necessary",
     'CTA' : "call to action",
   'SWOT' : "strengths, weaknesses, opportunities and threats"
    };
  
  //   we need a variable to split the sentence into words
  //   we need a function to go through words to find acronyms
  //   we need way of proofing ALL CAP more the an 3 and way tell if it is in list of known_acronyms
  //   if statement with an else 
//returns string without known acronyms or highlights unknown acronyms
function acronymBuster(string){
    let known_acronym = {
      'KPI': "key performance indicators",
      'EOD' : "the end of the day",
      'TBD' : "to be decided",
      'WAH' : "work at home",
      'IAM' : "in a meeting",
      'OOO': "out of office",
      'NRN' : "no reply necessary",
      'CTA' : "call to action",
      'SWOT' : "strengths, weaknesses, opportunities and threats"
    };
  
    let words = string.split(" ");
    let results = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let punctuation = "";
      if (word.endsWith(".") || word.endsWith("!") || word.endsWith("?") || word.endsWith(",")) {
        punctuation = word.slice(-1);
        word = word.slice(0, -1);
      }
      if (known_acronym.hasOwnProperty(word)) {
        if (i > 0 && words[i - 1].endsWith('.')) {
          results += known_acronym[word][0].toUpperCase() + known_acronym[word].slice(1) + punctuation + ' ';
        } else {
          results += known_acronym[word] + punctuation + ' ';
        }
      } else if (word == word.toUpperCase() && word.length >= 3) {
        return `${word} is an acronym. I do not like acronyms. Please remove them from your email.`;
      } else {
        results += word + punctuation + ' ';
      }
    }
    return results.trim();
  }}