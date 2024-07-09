
// import './home.css';

// export function loadhome() {

    // you have to make all containers function and close at the end
    // top to bottom build for JS
function creatercontainer(id){
    const container = document.createElement('div');
    container.id = id;
    return container;
}

    document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    // clear old content
    // content.innerText

    const welcomecontainer = creatercontainer('welcomecontainer')
    // const bannercontainer = creatercontainer('bannercontainer');
    const heading = document.createElement('welcome');
    heading.textContent = 'Welcome to #1 Naji Food Truck!';

    const image = document.createElement('img');
    image.src = 'path_to_your_image.jpg'
    image.alt = 'keys'

    // content.appendChild(bannercontainer);

    const contentinfo  = document.createElement('content_info');
    contentinfo.textContent = 'This is the Greate Naji No Da Play Food Truck serving the great people of centrel city since 2005!'
    welcomecontainer.appendChild(heading);
    welcomecontainer.appendChild(image);
    welcomecontainer.appendChild(contentinfo);

    // containers
    content.appendChild(welcomecontainer);


    // second block
    const workinghours = creatercontainer('workinghours');
    const workinghours2 = creatercontainer('workinghours2');
    const hours = document.createElement('hours_title');
    hours.textContent = 'Hours';

    const hoursimg = document.createElement('hours_img');
    const days = document.createElement('days');
    days.textContent = 'Monday - Friday';
    const times = document.createElement('times');
    times.textContent = '09:00 - 21:00 CST';
    const hoursinfo = document.createElement('hours');
    hours.textContent = 'Closed the day before or after all major Nigerian/American Holidays';
    workinghours.appendChild(hours);
    workinghours.appendChild(hoursimg);
    workinghours.appendChild(days);
    workinghours.appendChild(times);
    workinghours.appendChild(hoursinfo);

    // containers
    content.appendChild(workinghours)
    content.appendChild(workinghours2)

    // third block
    const locationcontainer = creatercontainer('locationcontainer');
    const contacttitle = document.createElement('contact_title');
    contacttitle.textContent = 'Contact';

    const contactimg = document.createElement('contact_img');
    const address = document.createElement('adress');
    address.textContent = 'Location: 123 Forest Drive, Forestville, Maine';
    const phone = document.createElement('phone');
    phone.textContent = 'Phone: 123-456-7890';
    const email = document.createElement('email');
    email.textContent = 'Email: @NoDaPlay';
    // locationcontainer.appendChild(phone);
    locationcontainer.append(address,phone,email,contacttitle, contactimg);
    // locationcontainer.appendChild(contactimg);
    // locationcontainer.appendChild(address);
    // locationcontainer.appendChild(phone);
    // locationcontainer.appendChild(email);
    
    // containers
    content.appendChild(locationcontainer)


});
// }