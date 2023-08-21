import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
    
}

export function set() {
    state.isRunning = document.documentElement.classList.remove('running')
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
}

export function setSec() {
    state.isRunning = document.documentElement.classList.remove('running')
    el.seconds.setAttribute('contenteditable', true);
    el.seconds.focus();
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute || document.documentElement.classList.contains('fire-theme')) {
        sounds.Lareira.play();
    } else if (state.isMute || document.documentElement.classList.contains('forest-theme')) {
        sounds.Floresta.play();
    } else if (state.isMute || document.documentElement.classList.contains('bar-theme')) {
        sounds.Cafeteria.play();
    } else if (state.isMute || document.documentElement.classList.contains('rain-theme')) {
    } else {
        sounds.Lareira.pause();
    }
}
