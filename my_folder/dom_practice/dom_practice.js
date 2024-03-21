// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);



// const container = document.querySelector("#container");
// make that p do some ish while red 
// const p_element = document.createElement("p");
// p_element.style.color = "red";
// p_element.textContent = "Get wrecked Mike!!"
// document.body.appendChild(p_element);

// // make h3 using blue text whats lostnote
// const h3_element = document.createElement("h3");
// h3_element.style.color = "blue";
// h3_element.textContent = "Get wrecked LostNote you though you was safe!!!"
// document.body.appendChild(h3_element);

// // a <div> with a black border and pink background color 
// // with the following elements inside of it:
// // another <h1> that says “I’m in a div”
// // a <p> that says “ME TOO!” 

// const div_element = document.createElement('div');

// div_element.style.border = "3px solid black";
// div_element.style.background = "pink";

// const h1_element = document.createElement('h1');
// h1_element.textContent =  "I’m in a div";
// // document.body.appendChild(h1_element);
// div_element.appendChild(h1_element)


// const pinside_element = document.createElement('p');
// pinside_element.textContent =  "I have a PLAN";
// div_element.appendChild(pinside_element);


// document.body.appendChild(div_element)
// this version is used to track a specific spot in the html container example
const container = document.querySelector('#container');
const pelement  = document.createElement('p');
pelement.style.color= 'green'
pelement.textContent = "Get wrecked Mike!!"
container.appendChild(pelement)

// make h3 using blue text whats lostnote
const h3element = document.createElement("h3");
h3element.style.color = "blue";
h3element.textContent = "Get wrecked LostNote you though you was safe!!!"
container.appendChild(h3element);

// a <div> with a black border and pink background color 
// with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!” 

const divelement = document.createElement('div');
divelement.style.border = "3px solid black";
divelement.style.background = "pink";
container.appendChild(divelement)

const h1element = document.createElement('h1');
h1element.textContent =  "I’m in a div";
// document.body.appendChild(h1element);
divelement.appendChild(h1element)

const pinside_element = document.createElement('p');
pinside_element.textContent =  "I have a PLAN";
divelement.appendChild(pinside_element);


// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");

//   btn.addEventListener("click", alertFunction);

//track clicks in console log
btn.addEventListener("click", function (e) {
console.log(e.target);
});
// this lets you change button collors 
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

//   so if we wanted multiple buttons to all experience the clicks
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
