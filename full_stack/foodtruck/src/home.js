
// import './home.css';

// export function loadhome() {

    // you have to make all containers function and close at the end
    // top to bottom build for JS
    function creatercontainer(id){
        const container = document.createElement('div');
        container.id = id;
        return container;
    }
    
    // clear tab method 
    function clear_tab(){
        const content = document.getElementById('content');
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
    }
    
    // new function to clear and import home
    function load_home(){
        clear_tab()
    
        const content = document.getElementById('content');
    
        // this is the top
        const welcomecontainer = creatercontainer('welcomecontainer')
        const box_1 = creatercontainer('box_1')
        const heading = document.createElement('welcome');
        heading.textContent = 'Welcome to #1 Naji Food Truck!';
        const image = document.createElement('img');
        image.src = 'path_to_your_image.jpg'
        image.alt = 'keys'
        const contentinfo  = document.createElement('content_info');
        contentinfo.textContent = 'This is the Great Naji No Da Play Food Truck serving the great people of Central City since 2005!'
        welcomecontainer.append(heading, image, contentinfo);
        box_1.append(contentinfo, image, heading);
    
        // container
        content.appendChild(welcomecontainer);
        content.appendChild(box_1)
    
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
        hoursinfo.textContent = 'Closed the day before or after all major Nigerian/American Holidays';
        workinghours.append(hours,hoursimg,days,times,hoursinfo);
        workinghours2.append(hours,hoursimg,days,times,hoursinfo);
    
        // containers
        content.appendChild(workinghours)
        content.appendChild(workinghours2)
    
        // third block
        const locationcontainer = creatercontainer('locationcontainer');
        const box_3 = creatercontainer('box_3')
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
        locationcontainer.append(address,phone,email,contacttitle, contactimg, box_3);
        // box_3.append(address,phone,email,contacttitle, contactimg);
    
        // containers
        content.appendChild(locationcontainer)
    }
    
    // this the Menu tab when clicked 
    // create function, listener and
    
    // once clear build new one
    function menu_tab(){
        clear_tab();
    
        const content = document.getElementById('content');
        const menutab = document.createElement('div');
        menutab.id = 'menutab';
    
        // top
        const appcontainer = creatercontainer('app_container');
        const apptitle =  document.createElement('h6');
        apptitle.textContent = 'Apps'; 
        const appitems = document.createElement('div');
        appitems.id ='app_items';
        appitems.innerHTML = `
            <p>Chips & Dip (3 types)</p>
            <p>Starter Plate</p>
            <p>Cheese Fries</p>
        `;
        appcontainer.append(apptitle, appitems);
    
        menutab.append(appcontainer)
        content.appendChild(menutab);
    }
    
    // once clear build new one
    function home_tab(){
        clear_tab();
    
        const content = document.getElementById('content');
        const hometab = document.createElement('div');
        hometab.id = 'hometab';
    
        // top
        const appcontainer = creatercontainer('app_container');
        const apptitle =  document.createElement('h6');
        apptitle.textContent = 'Apps'; 
        const appitems = document.createElement('div');
        appitems.id ='app_items';
        appitems.innerHTML = `
            <p>Welcome Back</p>
            <p>Guess who's Back</p>
            <p>We are Back</p>
        `;
        appcontainer.append(apptitle, appitems);
    
        hometab.append(appcontainer)
        content.appendChild(hometab);
    }
    
    // this is for all the listeners when tabs are clicked
    document.getElementById('menuBtn').addEventListener('click', menu_tab);
    document.getElementById('aboutBtn').addEventListener('click', load_home);
    document.getElementById('homeBtn').addEventListener('click', home_tab);
    
    // load home by default
    document.addEventListener('DOMContentLoaded', load_home);
    