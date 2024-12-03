"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
console.log((0, math_1.sum)(3, 5));
console.log((0, math_1.subtract)(4, 2));
