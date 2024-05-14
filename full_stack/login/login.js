// Variable for time 
const current_time = new Date();
const current_hour = current_time.getHours();
const current_min = current_time.getMinutes();

// get reference for sun and moon 
const sun_element = document.querySelector('.sun');
const moon_element = document.querySelector('.moon');

// Define the % for the animation progress for the sun
let sun_precent;
//math for the sun from 6am to 6p
if(current_hour >= 6 && current_hour<18){
    sun_precent = ((current_hour -6)/12)*100;
} else{
    // it must be night time so sun animation can be 0
    sun_precent = 0;
}

// calculate the same for the moon 
let moon_percent;
if (current_hour>=6 && current_hour <18 ){
    // this means it is day time so night is 0%
    moon_percent = 0;
}else{
    moon_percent = ((current_hour - 6)/12)*100;
}

// set animation 
sun_element.style.transform = `translate(X${sun_percent}%)}`

 