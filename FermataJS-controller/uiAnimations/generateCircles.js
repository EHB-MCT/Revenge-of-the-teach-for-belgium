import context from "./context.js";
import * as Utils from "./utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let animateValue = 0;
let colors = ["#E83C40", "#3E75BA", "#91579E", "#0CA552", "#FDD823"];

generate();

export function generate() {
    let randomX = Math.random() * width - 100;
    let randomY = Math.random() * height - 100;
    let chooseColor = colors[Math.floor(Math.random() * 5)];
    console.log(chooseColor);

    animateCicle(randomX, randomY, chooseColor);
}

//generateBackground();

function generateBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

function generateCircles(x, y, radius, chooseColor) {
    let color = chooseColor;
    context.filter = "blur(10px)";
    context.fillStyle = color;
    Utils.fillCircle(x, y, radius);
}

function animateCicle(randomX, randomY, chooseColor) {
    generateBackground();
    generateCircles(randomX, randomY, animateValue, chooseColor);
    if (animateValue <= 100) {
        animateValue += 1;
        requestAnimationFrame(animateCicle);
    }
}





// export class Animation {
//     constructor() {
//         let width = context.canvas.width;
//         let height = context.canvas.height;
//         let animateValue = 0;
//         let randomX = Math.floor(Math.random() * width) - 150;
//         let randomY = Math.floor(Math.random() * height) - 150;
//         let colors = ["#E83C40", "#3E75BA", "#91579E", "#0CA552", "#FDD823"];
//         let chooseColor = colors[Math.floor(Math.random() * 5)];
//     }
//     generateBackground() {
//         context.fillStyle = "black";
//         context.fillRect(0, 0, this.width, this.height);
//     }
//     generateCircles(x, y, radius) {
//         context.filter = "blur(10px)";
//         context.fillStyle = this.chooseColor;
//         Utils.fillCircle(x, y, radius);
//     }
//     animateCicle() {
//         this.generateBackground();
//         this.generateCircles(this.randomX, this.randomY, this.animateValue);
//         if (this.animateValue < 100) {
//             this.animateValue += 10;
//             requestAnimationFrame(animateCicle);
//         }

//     }
// }