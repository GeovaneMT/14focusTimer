import * as el from './elements.js'

export function setTime(inputElement, timeType, nextInputElement = null) {

  inputElement.addEventListener('blur', () => {

    let time = parseInt(inputElement.textContent)

    time = Math.min(60, Math.max(0, time || 0))
    inputElement.textContent = time.toString().padStart(2, '0')
    state[timeType] = time

  })

  inputElement.addEventListener('input', () => {
    inputElement.textContent = inputElement.textContent.replace(/\D/g, '')
  })

  inputElement.addEventListener('blur', () => {
    if (inputElement.textContent === 'NaN' || inputElement.textContent === '0') {
      inputElement.textContent = '00'
    }
  })

  el.buttonaddMinutes.addEventListener('click', function () {
    el.minutes.textContent = Number(el.minutes.textContent) + 2.5
    if (Number(el.minutes.textContent) >= 60) {
      el.minutes.textContent = '60';
      el.seconds.textContent = '00';
    }
  })
  
  el.buttonDecreaseMinutes.addEventListener('click', function () {
    if (Number(el.minutes.textContent) >= 5) {
      el.minutes.textContent = Number(el.minutes.textContent) - 2.5;
    } else {
      el.minutes.textContent = '00';
      el.seconds.textContent = '00';
    }
  })

}