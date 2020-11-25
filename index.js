// Import stylesheets
import './style.css';
import {timings} from './timings.js';
import {animate} from './animate';

const timingsEl = document.querySelector('.timings');
for (var key in timings) {
  timingsEl.insertAdjacentHTML('beforeend', 
  `<div>
    <input type="radio" name="timing" 
      id="${key}" onclick="setTiming('${key}')">
      <label for="${key}">${key}</label>
  </div>`);
}

let duration = 2000, timing;

const carEl = document.querySelector('.car');
const roadEl = document.querySelector('.road');
const msgEl = document.querySelector('#message');
const draw = function drawFn(pct) {
  carEl.style.left = pct * (roadEl.offsetWidth-100) + 'px';
}
const showMessage = _ => msgEl.innerHTML = 'DONE';

window.setDuration = function(value) {
  document.querySelector('#duration').innerHTML = value;
  document.querySelector('#a-d').innerHTML = value;
  duration = value;
  msgEl.innerHTML = '&nbsp;';
  animate({duration, timing, draw}).then(showMessage);
}

window.setTiming = function(value) {
  document.querySelector('#a-t').innerHTML = value;
  timing = value;
  msgEl.innerHTML = '&nbsp;';
  animate({duration, timing, draw}).then(showMessage);
}

setTiming('bounce-ease-out');


