// const fs = require("fs");

// function read(err,data) {
//     if (err) {
//         console.log("Error reading file.");
//     } else {
//         console.log(data);
//     }
// }

// const content = fs.readFileSync("a.txt","utf-8");
// console.log(content);
// fs.readFile("b.txt","utf-8",read);
// console.log("Done!")

// const now = new Date();
// console.log(now.toLocaleString());

function random(resolve) {
  resolve();
}

const p = new Promise(random);
function callback() {
  console.log("promise succeeded");
}
console.log(p);
p.then(callback);
