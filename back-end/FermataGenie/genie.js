const genie = require('@magenta/music/node/piano_genie');
const core = require('@magenta/music/node/core');

//Button mapping
const MAPPING = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:12, 13:13, 14:14, 15:15, 16:16, 17:17, 18:18, 19:19, 20:20, 21:21, 22:22, 23:23, 24:24};

let OCTAVES = 7;
let NUM_BUTTONS = 8;
let BUTTON_MAPPING = MAPPING;

let keyWhitelist;
//let TEMPERATURE = getTemperature();

let sustaining = false;
let sustainingNotes = [];

const player = new core.Player();
const GENIE = new genie.PianoGenie(CONSTANTS.GENIE_CHECKPOINT);

initEverything();

function initEverything(){
    genie.initialize().then(() => {
        console.log("Ready to jam!");
    });


}