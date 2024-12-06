"use strict";
// const encode = Buffer.from("Hello").toString('binary');
// console.log(encode)
// const decode = Buffer.from(encode,'binary').toString()
// console.log(decode)
const arr = Array.from("Hello").map(x => x.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
console.log(arr);
