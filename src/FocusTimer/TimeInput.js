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
}