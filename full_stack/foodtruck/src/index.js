import _ from 'lodash';

// src/index.js
import { loadhome } from './home.js';

document.addEventListener('DOMContentLoaded', () => {
    loadhome();
});

function component() {
    const element = document.createElement('div');
  
    
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    alert('We are good to go')
    console.log('we are good to go')
  
    return element;
  }
  
  document.body.appendChild(component());