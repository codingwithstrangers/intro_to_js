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
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

// Function to update the position and scale of the sun
function updateSunPosition() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Calculate position and scale based on the current time
    let sunLeft, sunTop, sunScale;

    if (hours >= 6 && hours < 12) {
        // Morning: 6am to 12pm
        const percentProgress = ((hours - 6) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 6am to 12pm
        sunLeft = -1 + percentProgress * (46 - (-1)); // Interpolate between -1% and 46%
        sunTop = 80 - percentProgress * (80 - 10); // Interpolate between 80% and 10%
        sunScale = 2 + percentProgress; // Scale increases from 2 to 3
    } else if (hours >= 12 && hours < 18) {
        // Afternoon: 12pm to 6pm
        const percentProgress = ((hours - 12) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 12pm to 6pm
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
    sun.style.left = sunLeft + '%';
    sun.style.top = sunTop + '%';
    sun.style.transform = `scale(${sunScale})`;
}

// Function to update the position and scale of the moon
function updateMoonPosition() {
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    const hours = 0;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Calculate position and scale based on the current time
    let moonLeft, moonTop, moonScale, moonRotate;

    if (hours >= 6 && hours < 18) {
        // Moon hidden during daytime
        moonLeft =106;
        moonTop = 83;
        moonScale = 1;
        moonRotate = 0;
    } else {
        // Moon visible from 6pm to 6am
        if (hours >= 6 && hours < 12) {
            // Evening: 6pm to 12am
            const percentProgress = ((hours - 6) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 6pm to 12am
            moonTop = 87 + percentProgress * (87 + 14); // Interpolate between -14% and 87%
            moonLeft = 43 - percentProgress * (97 - 43); // Interpolate between 97% and 43%
            moonScale = 3 - percentProgress * (2 - 3); // Interpolate between 2 and 3
            moonRotate = 251;
        } else {
            // Midnight to 6am
            const percentProgress = ((hours - 18) * 3600 + minutes * 60 + seconds) / (6 * 3600); // Total seconds from 12am to 6am
            moonTop = 83 - percentProgress * (87 + 21); // Interpolate between 87% and -21%
            moonLeft = 106 + percentProgress * (-14 - 43); // Interpolate between 43% and -14%
            moonScale = 2 - percentProgress * (3 - 1); // Interpolate between 3 and 1
            // moonRotate = 251 - percentProgress * (251 - 188); // Interpolate between 251deg and 188deg
        }
    }

    // Update the CSS properties of the moon
    moon.style.left = moonLeft + '%';
    moon.style.top = moonTop + '%';
    moon.style.transform = `scale(${moonScale}) rotate(${moonRotate}deg)`;
}

// Function to update background based on the time of day
function updateBackground() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    

    if (hours >= 6 && hours < 18) {
        // Daytime: Transition to day background
        document.body.style.setProperty('--transition-background', 'var(--day-background)');
    } else {
        // Nighttime: Transition to night background
        document.body.style.setProperty('--transition-background', 'var(--night-background)');
    }
}

// Call the functions initially
updateSunPosition();
updateMoonPosition();
updateBackground();

// Update positions, moon, and background every second
setInterval(() => {
    updateSunPosition();
    updateMoonPosition();
    updateBackground();
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
