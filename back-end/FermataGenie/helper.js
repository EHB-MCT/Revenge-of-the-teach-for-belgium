const mvae = require('@magenta/music/node/music_vae');
const core = require('@magenta/music/node/core');

const CONSTANTS = {
    NUM_BUTTONS: 25,
    NOTES_PER_OCTAVE: 12,
    WHITE_NOTES_PER_OCTAVE: 7,
    LOWEST_PIANO_KEY_MIDI_NOTE: 21,
    GENIE_CHECKPOINT: 'https://storage.googleapis.com/magentadata/js/checkpoints/piano_genie/model/epiano/stp_iq_auto_contour_dt_166006'
}

class Player {
    constructor() {
        this.player = new core.mm.Player('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
        this.midiOut = [];
        this.midiIn = []
        this.usingMidiOut = false;
        this.usingMidiIn = false;
        this.loadAllSamples();
    }


    loadAllSamples() {
        const seq = {
            notes: []
        };
        for (let i = 0; i < CONSTANTS.NOTES_PER_OCTAVE * OCTAVES; i++) {
            seq.notes.push({
                pitch: CONSTANTS.LOWEST_PIANO_KEY_MIDI_NOTE + i
            });
        }
        this.player.loadSamples(seq);
    }

    playNoteDown(pitch, button) {
        // Send to MIDI out or play with the Magenta player.
        if (this.usingMidiOut) {
            this.sendMidiNoteOn(pitch, button);
        } else {
            mm.Player.tone.context.resume();
            this.player.playNoteDown({
                pitch: pitch
            });
        }
    }

    playNoteUp(pitch, button) {
        // Send to MIDI out or play with the Magenta player.
        if (this.usingMidiOut) {
            this.sendMidiNoteOff(pitch, button);
        } else {
            this.player.playNoteUp({
                pitch: pitch
            });
        }
    }

    // MIDI bits.
    midiReady(midi) {
        // Also react to device changes.
        midi.addEventListener('statechange', (event) => this.initDevices(event.target));
        this.initDevices(midi);
    }

    initDevices(midi) {
        this.midiOut = [];
        this.midiIn = [];


        const outputs = midi.outputs.values();
        for (let output = outputs.next(); output && !output.done; output = outputs.next()) {
            this.midiOut.push(output.value);
        }

        const inputs = midi.inputs.values();
        for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
            this.midiIn.push(input.value);
            // TODO: should probably use the selected index from this.selectInElement for correctness
            // but i'm hacking this together for a demo so...
            input.value.onmidimessage = (msg) => this.getMIDIMessage(msg);

        }

        // No MIDI, no settings.
        //btnSettings.hidden = (this.midiOut.length === 0 && this.midiIn.length === 0);
        this.selectInElement.innerHTML = this.midiIn.map(device => `<option>${device.name}</option>`).join('');
        this.selectOutElement.innerHTML = this.midiOut.map(device => `<option>${device.name}</option>`).join('');
    }

    sendMidiNoteOn(pitch, button) {
        // -1 is sent when releasing the sustain pedal.
        if (button === -1) button = 0;
        //const msg = [0x90 + button, pitch, 0x7f];    // note on, full velocity.
        const msg = [0x90, pitch, 0x7f]; // note on, full velocity.
        this.midiOut[this.selectOutElement.selectedIndex].send(msg);
    }

    sendMidiNoteOff(pitch, button) {
        // -1 is sent when releasing the sustain pedal.
        if (button === -1) button = 0;
        //const msg = [0x80 + button, pitch, 0x7f];    // note on, middle C, full velocity.
        const msg = [0x80, pitch, 0x7f]; // note on, middle C, full velocity.
        this.midiOut[this.selectOutElement.selectedIndex].send(msg);
    }

    getMIDIMessage(msg) {
        if (!this.usingMidiIn) {
            return;
        }
        const command = msg.data[0];
        const button = msg.data[1];
        const velocity = (msg.data.length > 2) ? msg.data[2] : 0; // a velocity value might not be included with a noteOff command

        switch (command) {
            case 0x90: // note on
                window.buttonDown(button, false);
                break;
            case 0x80: // note off
                window.buttonUp(button);
                break;
        }
    }
}