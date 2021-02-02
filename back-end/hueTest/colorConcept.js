let RGBconverter = require('@q42philips/hue-color-converter')

let green = 50;
let blue = 50;
let red = 50;

let defaultAddValue = 20;
let defaultSubtractValue = -7;

let totalAddValue = 15;
let;

let timer = 30000;

export class Button{
    addValues(){
        green += greenValue;
        blue += blueValue;
        red += redValue;
    }
}

export class GreenButton extends Button{
    constructor() {
        greenValue = defaultAddValue;
        redValue = defaultSubtractValue;
        blueValue = defaultSubtractValue;
    };
}
export class RedButton extends Button{
    constructor() {
        greenValue = defaultSubtractValue;
        redValue = defaultAddValue;
        blueValue = defaultSubtractValue;
    };
}

export class BlueButton extends Button{
    constructor() {
        greenValue = defaultSubtractValue;
        redValue = defaultSubtractValue;
        blueValue = defaultAddValue;
    }
}

export class YellowButton extends Button{
    constructor() {
        greenValue = -totalAddValue;
        redValue = -totalAddValue;
        blueValue = -totalAddValue;
    }
}

export class WhiteButton extends Button{
    constructor() {
        greenValue = totalAddValue;
        redValue = totalAddValue;
        blueValue = totalAddValue;
    }
}



//if(blueButton == onDown) blueButton.addValues();




setInterval(event => {
    let hueXY = RGBconverter(red,green,blue);
}, timer);