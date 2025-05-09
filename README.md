# Dream Team Episode 3: Revenge of the Teach for Belgium

This repository is the home of our team's ambitions for an interactive installation in the form of bits, bytes and mostly running code. Feel free to look around, take in the stress and tears, junk food and hours of morning commute to campus.

Contributers:

- Farah Amri
- Ibrahim Burak Gozen
- Nick Nijskens
- Joke Van 't Veld
- Pim Tournaye

Special thanks to Sean Rosseel for the huge help throughout the weeks.

[Link to GitHub Repository](https://github.com/EHB-MCT/Revenge-of-the-teach-for-belgium)

## Setup

To run our code, you need to be able to run a Node.js server> Navigate the to `./FermataJS-controller` folder, open your terminal and run the following commands.

```
npm install
node index.js
```

Since the funb doesn't stop there, be sure to do the same for `./back-end`. If you wanna hear how music generated through a Markov chain sounds, you can navigate to `./back-end/FermataJS Markov` and run the `test.js` file. Be sure to change the soundfilePath in Button.js to your absolute path of the `notes` folder.

## Technologies used

### Electronics:

- Arduino Mega
- [Firmata Protocol](https://github.com/firmata/arduino)
- [Johnny Five](http://johnny-five.io/)
- [Socket.io](https://socket.io/)
- [Phillips Hue](https://developers.meethue.com/)

### AI:

- [Magenta (Piano Genie)](https://magenta.tensorflow.org/)
- Markov chain (Generative algorithm applied to chord progressions, modes, keys and intervals)

### Back-end:

- [Node.js](https://nodejs.org/en/)
- Some MIDI library we still need to look for if we end up going for that.
- [Typescript](https://www.typescriptlang.org/)

### Inspiration

This project would not have existed without the wonderful work of Rich Vreeland, more specifically his tool called 'January'. Give it a try yourself, it's relaxing.

- [January by Rich Vreeland / Disasterpiece](https://disasterpeace.com/blog/january/january)
- [Link to the most recent source](https://github.com/richvreeland/hf-january)

Check out his other work if you have the time, it's worth it.
[Disasterpiece.com](https://disasterpeace.com/)
