let RGBconverter = require('@q42philips/hue-color-converter')

let green = 50;
let blue = 50;
let red = 50;

let timer = 30000;

class Button{
    addValues(){
        green += greenValue;
        blue += blueValue;
        red += redValue;
    }
}

class GreenButton extends Button{
    constructor() {
        greenValue = 20;
        redValue = -7;
        blueValue = -7;
    };
}
class RedButton extends Button{
    constructor() {
        greenValue = -7;
        redValue = 20;
        blueValue = -7;
    };
}

class BlueButton extends Button{
    constructor() {
        greenValue = -7;
        redValue = -7;
        blueValue = 20;
    }
}

class YellowButton extends Button{
    constructor() {
        greenValue = -15;
        redValue = -15;
        blueValue = -15;
    }
}

class WhiteButton extends Button{
    constructor() {
        greenValue = 15;
        redValue = 15;
        blueValue = 15;
    }
}



//if(blueButton == onDown) blueButton.addValues();




setInterval(event => {
    event.RGBconverter(red,green,blue);
}, timer);