import state from './state.js'
import * as actions from './actions.js'

export function handleTimeFocus(inputElement, nextInputElement) {

  inputElement.addEventListener('focus', () => {
    state.isRunning = document.documentElement.classList.remove('running')
    inputElement.textContent = ''

    inputElement.addEventListener('keyup', (event) => {

      if (event.key === 'Enter' || inputElement.textContent.length === 2) {
        inputElement.blur();
        
        if (nextInputElement) {
          actions.setSec()
        }
      }
    })
  })
}