import {sum,subtract} from "./math";
import Calculator from "./calculator";
function getFirstElement<T>(arr:T[]):T {
    return arr[0];
}

console.log(getFirstElement<number>([1,2,3]))
const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())
console.log(sum(3,5))
console.log(subtract(4,2))