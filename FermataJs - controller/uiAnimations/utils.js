"use strict";
import context from "./context.js";
/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l, a) {
    return "hsl(" + h + "," + s + "%," + l + "%," + a + ")";
}

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 * @param {number} a the alpha value (opacity) in percentage
 */
export function hsla(h, s, l, a) {
    return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
}

/** function that formats an rgb value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

/** function that formats an rgba value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 * @param {number} a the alpha value(opacity) in percentage
 */
export function rgba(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + "%)";
}

/** function that converts an angle in degrees to radians
 * @param {number} degrees 
 */
export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}
/**
 * function that calculates the distance in pixels between two given points
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */
export function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * returns a random value between two numbers
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * draws a circle and fills it
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinate of the center of the circle
 * @param {number} radius radius of the circle
 */
export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}

/**
 * draws a circle and strokes it
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinate of the center of the circle
 * @param {number} radius radius of the circle
 */
export function strokeCircle(x, y, radius) {
    strokeEllipse(x, y, radius, radius);
}

/**
 * draws an ellipse and fills it
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinate of the center of the circle
 * @param {number} radiusX x radius of the ellipse
 * @param {number} radiusY y radius of the ellipse
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/**
 * draws an ellipse and strokes it
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinate of the center of the circle
 * @param {number} radiusX x radius of the ellipse
 * @param {number} radiusY y radius of the ellipse
 */
export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}