// // Variable for time
// const current_time = new Date();
// const current_hour = current_time.getHours();
// const current_min = current_time.getMinutes();

// // get reference for sun and moon
// const sun_element = document.querySelector('.sun');
// const moon_element = document.querySelector('.moon');

// // Define the % for the animation progress for the sun
// let sun_percent;
// //math for the sun from 6am to 6p
// if(current_hour >= 6 && current_hour<18){
//     sun_percent = ((current_hour -6)/12)*100;
// } else{
//     // it must be night time so sun animation can be 0
//     sun_percent = 0;
// }

// // calculate the same for the moon
// let moon_percent;
// if (current_hour>=6 && current_hour <18 ){
//     // this means it is day time so night is 0%
//     moon_percent = 0;
// }else{
//     moon_percent = ((current_hour - 6)/12)*100;
// }

// // set animation
// sun_element.style.left = `${sun_percent}%`;
// moon_element.style.left = `${moon_percent}%`;

// Get references to the sun and moon elements
// const sun = document.querySelector('.sun');
// const moon = document.querySelector('.moon');

// // Function to update the position of the sun and moon
// function updateSunAndMoonPosition() {
//     const currentDate = new Date();
//     const hours = currentDate.getHours();

//     // Calculate position based on the current time
//     let sunLeft, sunTop, sunScale;

//     if (hours >= 6 && hours < 12) {
//         // Morning: 6am to 12pm
//         const percentProgress = (hours - 6) / 6; // Calculate progress from 6am to 12pm
//         sunLeft = 3 + percentProgress * (46 - 3); // Interpolate between 3% and 46%
//         sunTop = 80 - percentProgress * (80 - 10); // Interpolate between 80% and 10%
//         sunScale = 2 - percentProgress; // Scale decreases from 2 to 1
//     } else if (hours >= 12 && hours < 18) {
//         // Afternoon: 12pm to 6pm
//         const percentProgress = (hours - 12) / 6; // Calculate progress from 12pm to 6pm
//         sunLeft = 46 + percentProgress * (83 - 46); // Interpolate between 46% and 83%
//         sunTop = 10 + percentProgress * (80 - 10); // Interpolate between 10% and 80%
//         sunScale = 1 + percentProgress;
//     } else {
//         // Evening: 6pm to 6am
//         sunLeft = 83;
//         sunTop = 80;
//         sunScale = 2;
//     }

//     // Update the CSS properties of the sun and moon
//     sun.style.left = sunLeft + '%';
//     sun.style.top = sunTop + '%';
//     moon.style.transform = `scale(${3 - sunScale})`;
//     // Assume the moon follows the opposite path
//     moon.style.left = (100 - sunLeft) + '%';
//     moon.style.top = (100 - sunTop) + '%';
// }

// // Call the function initially
// updateSunAndMoonPosition();

// // Update the position every second
// setInterval(updateSunAndMoonPosition, 1000);
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

// Function to update the position and scale of the sun
function updateSunPosition() {
  const currentDate = new Date();
//   const hours = currentDate.getHours();
  const hours = currentDate.getSeconds() % 24;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Calculate position and scale based on the current time
  let sunLeft, sunTop, sunScale;

  if (hours >= 6 && hours < 12) {
    // Morning: 6am to 12pm
    const percentProgress =
      ((hours - 6) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 6am to 12pm
    sunLeft = -1 + percentProgress * (46 - -1); // Interpolate between -1% and 46%
    sunTop = 80 - percentProgress * (80 - 10); // Interpolate between 80% and 10%
    sunScale = 2 + percentProgress; // Scale increases from 2 to 3
  } else if (hours >= 12 && hours < 18) {
    // Afternoon: 12pm to 6pm
    const percentProgress =
      ((hours - 12) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 12pm to 6pm
    sunLeft = 46 + percentProgress * (106 - 46); // Interpolate between 46% and 106%
    sunTop = 10 + percentProgress * (83 - 10); // Interpolate between 10% and 83%
    sunScale = 3 - percentProgress; // Scale decreases from 3 to 2
  } else {
    // Evening: 6pm to 6am
    sunLeft = 106;
    sunTop = 83;
    sunScale = 2;
  }

  // Update the CSS properties of the sun
  sun.style.left = sunLeft + "%";
  sun.style.top = sunTop + "%";
  sun.style.transform = `scale(${sunScale})`;
}

// Function to update the position and scale of the moon
function updateMoonPosition() {
  const currentDate = new Date();
//   const hours = currentDate.getHours();
// const hours =1;
  const hours = currentDate.getSeconds() % 24;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // Calculate position and scale based on the current time
  let moonLeft, moonTop, moonScale, moonRotate;
// Calculate total time in seconds
const totalSeconds = hours * 3600 + minutes * 60 + seconds;

// Moon visible from 6pm to 6am
if (totalSeconds >= 18 * 3600 && totalSeconds < 24 * 3600) {
    // First 6 hours
    const elapsedSeconds = totalSeconds - 18 * 3600;
    moonLeft = 106 - (63 / 6) * (elapsedSeconds / 3600); // 106 - 43 = 63
    moonTop = -26 + (110 / 6) * (elapsedSeconds / 3600); // -26 + 110 = 84
    moonScale = 1 + (2 / 6) * (elapsedSeconds / 3600); // 3 - 1 = 2
    moonRotate = elapsedSeconds * 45 / 3600 + 'deg';
} else if (totalSeconds >= 0 && totalSeconds <= 6 * 3600) {
    // Next 6 hours
    const elapsedSeconds = totalSeconds;
    moonLeft = 43 - (57 / 6) * (elapsedSeconds / 3600); // 43 - 57 = -14
    moonTop = 84 - (102 / 6) * (elapsedSeconds / 3600); // 84 - 102 = -18
    moonScale = 3 - (2 / 6) * (elapsedSeconds / 3600); // 1
    moonRotate = 299 +'deg'//+ (66 * (elapsedSeconds / 3600)) + 'deg'; // Adding rotation
} else {
    // Last 12 hours
    // const elapsedSeconds = totalSeconds - 6 * 3600;
    moonLeft = -14 //+ (120 / 12) * (elapsedSeconds / 3600); // -14 + 120 = 106
    moonTop = -18 //- (8 / 12) * (elapsedSeconds / 3600); // -18 - 8 = -26
    moonScale = 1;
    moonRotate = 349+'deg'// + (84 * (elapsedSeconds / 3600) / 12) + 'deg'; // Adding rotation
}


// Update the CSS properties of the moon
moon.style.left = moonLeft + '%';
moon.style.top = moonTop + '%';
moon.style.transform = 'scale(' + moonScale + ') rotate(' + moonRotate + ')';
}


// Function to update background based on the time of day
function changeBackground() {
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const hours = currentDate.getSeconds() % 24

    // Calculate total time in seconds
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    let gradient;

    // Transition background from 6:00 to 17:00
    if (totalSeconds >= 6 * 3600 && totalSeconds < 17 * 3600) {
        // Linear interpolation for gradient colors
        const percent = (totalSeconds - 6 * 3600) / (17 * 3600 - 6 * 3600);
        gradient = `linear-gradient(91deg, #48c6f8, #fbfddf, #05b8ff)`;
    }
    // Start transitioning background from 17:00 to 18:00
    else if (totalSeconds >= 17 * 3600 && totalSeconds < 18 * 3600) {
        // Linear interpolation for gradient colors
        const percent = (totalSeconds - 17 * 3600) / (18 * 3600 - 17 * 3600);
        gradient = `linear-gradient(91deg, #48c6f8, #fbfddf, #05b8ff, #18067b, #5762b6, #1f143b)`;
    }
    // From 18:00 onwards, use the second gradient
    else if (totalSeconds >= 18 * 3600 || totalSeconds < 6 * 3600) {
        gradient = `linear-gradient(91deg, #18067b, #5762b6, #1f143b)`;
    }

    // Update the CSS background image property
    document.body.style.backgroundImage = gradient;
}




// Call the functions initially
updateSunPosition();
updateMoonPosition();
changeBackground();

// Update positions, moon, and background every second
setInterval(() => {
  updateSunPosition();
  updateMoonPosition();
  changeBackground();
}, 1000);

// // easter egg
// // JavaScript
// const emailInput = document.querySelector('.email');
// const passwordInput = document.querySelector('.password');
// const loginButton = document.querySelector('.login_button');
// const stranger = document.querySelector('.stranger');

// // Function to perform a 360-degree rotation
// function doBarrelRoll() {
//     stranger.style.transform = 'rotate(360deg)';
// }

// // Add event listener for login button click
// loginButton.addEventListener('click', function() {
//     const emailValue = emailInput.value.toLowerCase(); // Convert email value to lowercase for case-insensitive comparison
//     const passwordValue = passwordInput.value.trim(); // Trim password value to remove any leading/trailing spaces

//     // Check if email input contains the phrase "Do a barrel roll" and password input is empty
//     if (emailValue.includes('do a barrel roll') && passwordValue === '') {
//         doBarrelRoll(); // Perform 360-degree rotation
//     }
// });

// // Optional: You can also trigger the barrel roll if the user presses Enter in the password field
// passwordInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         const emailValue = emailInput.value.toLowerCase(); // Convert email value to lowercase for case-insensitive comparison
//         const passwordValue = passwordInput.value.trim(); // Trim password value to remove any leading/trailing spaces

//         // Check if email input contains the phrase "Do a barrel roll" and password input is empty
//         if (emailValue.includes('do a barrel roll') && passwordValue === '') {
//             doBarrelRoll(); // Perform 360-degree rotation
//         }
//     }
// });
