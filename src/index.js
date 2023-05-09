import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Webpack and Microverse', 'This is a powerful excersice'], ' ');
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());