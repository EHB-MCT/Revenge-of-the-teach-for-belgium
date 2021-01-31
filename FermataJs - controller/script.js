import {
    Player,
    constants
} from './app.js';

import * as generateCircles from "./uiAnimations/generateCircles.js"

const mapping_8 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7
};
const buttons_device = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
const buttons_makey = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'w', 'a', 's', 'd'];

let octaves = 7;
let num_buttons = 8;
let button_mapping = mapping_8;

let keyWhitelist;
let temperature = getTemperature();
console.log(controls);

let sustaining = false;
let sustainingNotes = [];

let mouseDownButton = null;
let isUsingMakey = false;

const player = new Player();
const genie = new mm.PianoGenie(constants.genie_checkpoint);


initEverything();

function initKeyWhitelist() {
    const bonusNotes = octaves > 6 ? 4 : 0; // starts on an A, ends on a C.
    const totalNotes = constants.notes_per_octave * octaves + bonusNotes;
    const totalWhiteNotes = constants.white_notes_per_octave * octaves * octaves + (bonusNotes - 1);

    keyWhitelist = Array(totalNotes).fill().map((x, i) => {
        if (octaves > 6) {
            return i;
        }
        // Starting 3 semitones up on small screens (on a C), and a whole octave up.
        return i + 3 + constants.notes_per_octave;
    });
}

function initEverything() {
    genie.initialize().then(() => {
        console.log('🧞‍♀️ ready!');
    });

    showMainScreen();
    initKeyWhitelist();
}

console.log(player);

//temperature settings
function getTemperature() {
    const hash = parseFloat(parseHashParameters()['temperature']) || 0.25;
    const newTemp = Math.min(1, hash);
    console.log('🧞‍♀️ temperature = ', newTemp);
    return newTemp;
}

function parseHashParameters() {
    const hash = window.location.hash.substring(1);
    const params = {};
    hash.split('&').map(hk => {
        let temp = hk.split('=');
        params[temp[0]] = temp[1];
    });
    return params;
}


// event listeners
function showMainScreen() {
    document.addEventListener('keydown', onKeyDown); //toetsenbord
    document.addEventListener('keyup', onKeyUp);

    const hasTouchEvents = ('ontouchstart' in window);
    if (!hasTouchEvents) {
        controls.addEventListener('mousedown', (event) => doTouchStart(event));
        controls.addEventListener('mouseup', (event) => doTouchEnd(event));
    }

    genie.resetState();
}

function doTouchStart(event) {
    event.preventDefault();
    mouseDownButton = event.target;
    buttonDown(event.target.dataset.id, true);
}

function doTouchEnd(event) {
    event.preventDefault();
    if (mouseDownButton && mouseDownButton !== event.target) {
        buttonUp(mouseDownButton.dataset.id);
    }
    mouseDownButton = null;
    buttonUp(event.target.dataset.id);
}

//Key-events

function onKeyDown(event) {
    // Keydown fires continuously and we don't want that.
    if (event.repeat) {
        return;
    }
    if (event.key === '0' || event.key === 'r') {
        console.log('🧞‍♀️ resetting!');
        genie.resetState();
    } else {
        const button = getButtonFromKeyCode(event.key);
        if (button !== null) {
            buttonDown(button, true);
            generateCircles.generate();
        }
    }
}

function onKeyUp(event) {
    if (event.key === ' ') { // sustain pedal
        sustaining = false;

        // Release everything.
        sustainingNotes.forEach((note) => player.playNoteUp(note, -1));
        sustainingNotes = [];
    } else {
        const button = getButtonFromKeyCode(event.key);
        if (button !== null) {
            buttonUp(button);
        }
    }
}

//Mouse-events
function buttonDown(button, fromKeyDown) {
    const el = document.getElementById(`btn${button}`);
    if (!el)
        return;
    el.setAttribute('active', true);
    console.log(button, button_mapping[button], keyWhitelist, temperature);
    const note = genie.nextFromKeyWhitelist(button_mapping[button], keyWhitelist, temperature);
    const pitch = constants.lowest_note + note;

    // Hear it.
    player.playNoteDown(pitch, button);
}

function buttonUp(button) {
    const el = document.getElementById(`btn${button}`);
    if (!el)
        return;
    el.removeAttribute('active');

    const note = genie.nextFromKeyWhitelist(button_mapping[button], keyWhitelist, temperature);

    const pitch = constants.lowest_note + note;
    if (!sustaining) {
        player.playNoteUp(pitch, button);
    } else {
        sustainingNotes.push(constants.lowest_note + note);
    }
}


//Helper functions
function getButtonFromKeyCode(key) {
    // 1 - 8
    if (key >= '1' && key <= String(num_buttons)) {
        return parseInt(key) - 1;
    }

    const index = isUsingMakey ? buttons_makey.indexOf(key) : buttons_device.indexOf(key);
    return index !== -1 ? index : null;
}