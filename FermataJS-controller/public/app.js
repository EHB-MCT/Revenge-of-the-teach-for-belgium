export const constants = {
    num_buttons: 25,
    notes_per_octave: 12,
    white_notes_per_octave: 7,
    lowest_note: 21,
    genie_checkpoint: 'https://storage.googleapis.com/magentadata/js/checkpoints/piano_genie/model/epiano/stp_iq_auto_contour_dt_166006'
};

let octaves = 7;

export class Player {
    constructor() {
        this.player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
        this.loadAllSamples();
    }

    loadAllSamples() {
        const seq = {
            notes: []
        };
        for (let i = 0; i < constants.notes_per_octave * octaves; i++) {
            seq.notes.push({
                pitch: constants.lowest_note + i
            });
        }
        this.player.loadSamples(seq);
        console.log(seq);
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

    sendMidiNoteOn(pitch, button) {
        // -1 is sent when releasing the sustain pedal. //dit is met de spatiebar is dit relevant?
        if (button === -1) button = 0;
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



