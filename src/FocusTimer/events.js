import { handleTimeFocus } from './TimeFocus.js';
import { controls } from './elements.js';
import { setTime } from './TimeInput.js';
import * as actions from './actions.js'
import * as el from './elements.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
        return
    }
    actions[action]()
    })
}

  export function setMinutes() {
    handleTimeFocus(el.minutes, el.seconds);
    setTime(el.minutes, 'minutes');
  }
  
  export function setSeconds() {
    handleTimeFocus(el.seconds, null);
    setTime(el.seconds, 'seconds');
  }  