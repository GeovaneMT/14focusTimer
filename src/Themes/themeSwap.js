import * as constants from './themes.js';

for (let key in constants.elements) {
    constants.elements[key].addEventListener('click', () => {
        for (let cls of constants.classes) {
            if (cls === key) {
                constants.elements[key].classList.add(cls);
                document.body.classList.add(`${cls}-theme`);
                document.querySelector('.themes').classList.add(`${cls}-text`);
                document.querySelector('.control').classList.add(`${cls}-bg`);
            } else {
                constants.elements[cls].classList.remove(cls);
                document.body.classList.remove(`${cls}-theme`);
                document.querySelector('.themes').classList.remove(`${cls}-text`);
                document.querySelector('.control').classList.remove(`${cls}-bg`);
            }
        }
    });
}