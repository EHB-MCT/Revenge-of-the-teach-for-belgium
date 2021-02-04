import {
    Player,
    constants
} from './app.js';

import * as generateCircles from "../uiAnimations/generateCircles.js"

import {
    PianoGenie
} from './PianoGenie.js';

// Make connection
let socket = io.connect('http://localhost:5000', {
    transports: ['websocket'],
    upgrade: false
});

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

const MAPPING_25 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    20: 20,
    21: 21,
    22: 22,
    23: 23,
    24: 24
};

const buttons_device = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'z', 'e', '§', '!', 't', 'y', 'u', 'i', "o", "p", "q", "w", ' x', 'c', 'v', '&', '$'];

let octaves = 7;
let num_buttons = 25;
let button_mapping = MAPPING_25;

let keyWhitelist;
let temperature = 0.25;
//console.log(controls);

let sustaining = false;
let sustainingNotes = [];

const player = new Player();
const genie = new PianoGenie(constants.genie_checkpoint);

const listener = (data) => {
    console.log(data);

    const note = genie.nextFromKeyWhitelist(data.value, keyWhitelist, temperature); //eerste variabele moet veranderen
    const pitch = constants.lowest_note + note;

    // Hear it.
    player.playNoteDown(pitch, data.value);
};

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

// event listeners
function showMainScreen() {
    document.addEventListener('keydown', onKeyDown); //toetsenbord
    document.addEventListener('keyup', onKeyUp);

    //ARDUINO BUTTON
    socket.off('inputChange', listener);
    socket.on('inputChange', listener);
    socket.on('disconnect', () => {
        console.log('Disconnect');
        socket = null;
    });

    genie.resetState();
}

//Key-events

function onKeyDown(event) {
    // Keydown fires continuously and we don't want that.
    // gaat bekijken welke key wordt ingedrukt via de getButtonFromKeyCode
    console.log(event);
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
    const button = getButtonFromKeyCode(event.key);
    if (button !== null) {
        buttonUp(button);
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
    console.log(key);

    const index = buttons_device.indexOf(key);
    return index !== -1 ? index : null;
}