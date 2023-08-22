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
    const isMusicOn = document.documentElement.classList.toggle('music-on');

    const themes = [
        'fire-theme',
        'rain-theme',
        'bar-theme',
        'forest-theme'
    ];

    const soundsByTheme = {
        'fire-theme': 'Lareira',
        'rain-theme': 'Chuva',
        'bar-theme': 'Cafeteria',
        'forest-theme': 'Floresta'
    };

    if (isMusicOn) {
        themes.forEach(theme => {
            const sound = soundsByTheme[theme];
            const shouldPlay = document.body.classList.contains(theme);

            if (sound) {
                if (shouldPlay) {
                    sounds[sound].play();
                } else {
                    sounds[sound].pause();
                }
            }
        });
    } else {
        Object.values(sounds).forEach(sound => sound.pause());
    }
}

const bodyObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            document.documentElement.classList.remove('music-on');
            sounds.Floresta.pause();
            sounds.Lareira.pause();
            sounds.Chuva.pause();
            sounds.Cafeteria.pause();
        }
    });
});

bodyObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['class'],
    childList: true,
    subtree: true
});