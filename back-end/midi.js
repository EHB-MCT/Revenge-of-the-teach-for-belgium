const JZZ = require("jzz");
require("jzz-midi-smf")(JZZ);


async function playNote() {
    var midi = await JZZ();
    var port = await midi.openMidiOut();
    await port.noteOn(0, 'C5', 127);
    await port.wait(500);
    await port.noteOff(0, 'C5');
    await port.close();
    console.log('done!');
}

playNote();