// // function sum(a,b) {
// //     return a+b;
// // }
// const arr = [{name:"a"},{name:"b"}];

// // const newArr = arr.map(x=>x*2);
// console.log(arr)
// const newArr = []
// arr.forEach(x=> {
    
//    x = 'Mr. '+x.name;
//    newArr.push(x);
// });

// console.log(newArr)
// console.log(arr)

// const arr1 =[2,4,6,7,8,9,10,11,13,14]
// const filterArr = arr1.filter(x=>x%2==0)
// console.log('filtered Array ' + filterArr);

// function findSum(x) {
//     let sum =0;
//     for (let i=0;i<=x;i++) {
//         sum = sum + i;
//     }
//    console.log(sum);
//     return sum;
// }
// function callback() {
//     findSum(10000);
// }
// setTimeout(callback,0);
// // const sum1to10000 = findSum(10000);
// // console.log(sum1to10000);
// console.log("Done");

// const fs = require('fs');
// const data = fs.readFile('node.js','utf-8',function(err,data){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// });
// console.log(data)
// console.log("File Read!")

// const fetchRes = fetch('https://reqres.in/api/users/', {
//     method:'POST',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ 
//         id: 7,
//         email: 'test@yahoo.com',
//         first_name: 'test',
//         last_name: 'test',
//         avatar: 'https://reqres.in/img/faces/1-image.jpg'
//     })
// });
// // console.log(fetchRes)
// fetchRes.then(res=>{
//     if (!res.ok) {
//         console.log("Some Error")
//     } else {
//         console.log("All Good!")
//     }
//     return res.json()}).then(x=>console.log(x))

// console.log("Done")

/* Week 3 - Functions, Callbacks, Async jS */


//   function sum(a,b) {
//     return a+b;
//   }

// const sum = function (a,b) {
//     return a+b;
// }
//   function minus(a,b) {
//     return a-b;
//   }
//   function multiply (a,b) {
//     return a*b;
//   }
//   function divide (a,b) {
//     return a/b
//   }
//   function calculator (a,b,op) {
//     return op(a,b);
//   }
//   console.log(calculator(4,2,sum));
//   console.log(calculator(4,2,minus));
//   console.log(calculator(4,2,multiply));
//   console.log(calculator(4,2,divide));

//   const fs = require('fs');
//   const data=fs.readFile('node.js','utf-8',function (err, content){
//     console.log(content);
//   });

// console.log(data);

// setTimeout(function() {
//     console.log("I will be printed after some delay")
// },1000);
// function print(x) {
//     console.log(x);
// };
// const helloFn = function () {
//     return print("Hello World!") 
// }
// setTimeout(helloFn,1000);

// function sum(n) {
//     let sum = 0;
//     for (let i=0;i<=n; i++) {
//         sum = sum+i;
//     }
//     return sum;
// }
// console.log(sum(100000));
// console.log(sum(555000));
// console.log(sum(666000));

/* Week 4 - Promises */

// class Rectangle {
//     constructor (width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area () {
//         return this.width * this.height;
//     }
//     paint () {
//         console.log(`Rectangle is ${this.color} color`)
//     }
// }


// class Circle {
//     constructor (radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }
//     area () {
//         return this.radius * this.radius * Math.PI;
//     }
//     paint () {
//         console.log(`This Circle is color ${this.color}`)
//     }
// }


//   class Shape {
//     constructor (color) {
//         this.color = color;
//     }
//     paint () {
//         console.log(`Painting shape with color ${this.color}`)
//     }
//     area () {
//         throw new Error(`The area method must be implemented in the subclass.`)
//     }
//     getDescription () {
//         return `This shape is of color ${this.color} `

//     }
//   }

//   class Rectangle extends Shape {
//     constructor (width, height, color) {
//         super(color);
//         this.width = width;
//         this.height = height;
        
//     }
//     area () {
//         return this.width * this.height;
//     }
//     getDescription () {
//         return `A Rectangle with the width ${this.width} and height ${this.height} and color ${this.color}`
//     }
// }

// class Circle extends Shape {
//     constructor (radius,color) {
//         super(color);
//         this.radius = radius;
//     }
//  area () {
//     return this.radius * this.radius * Math.PI;
//  }
//  getDescription () {
//     return `This is a Circle with radius ${this.radius} and color ${this.color}`;
//  }
// }

// const rect = new Rectangle(3,4,'orange')
// const area = rect.area();
// console.log(area)
// rect.paint();
// console.log(rect.getDescription());

// const circle1 = new Circle(5,'red');
// const areaCircle = circle1.area();
// console.log(circle1.area());
//   circle1.paint();
//   console.log(circle1.getDescription());

// // Predefined Clasess Date, Map
// const now = new Date()
// console.log(now.toISOString());

// const map = new Map();
// map.set('name','Alice');
// map.set('age',30);
// // console.log(map.get('name'));
// for ([key,value] of map) {
//     console.log(`key : ${key} value: ${value}`)
// }
// for (const key of map.keys()) {
//     console.log(key);
// }
// for (const value of map.values()) {
//     console.log(value)
// }
// for (const [key,value] of map.entries()) {
//     console.log(`key : ${key} value: ${value}`)
// }

// map.forEach((value,key)=> console.log(`${key} = ${value}`))
// const arr = [1,2,3,4,5]
// console.log(...arr)

// //Rest and Spread Operators
// Spread Operator
// const numbers1 = [1,2,3]
// const numbers2 = [4,5,6]

// console.log([...numbers1,...numbers2])
// const copyNumbers1 = [...numbers1]
// copyNumbers1.push(5)
// console.log(copyNumbers1)

// // Rest Operator
// function sumRest (...numbers) {
//     return numbers.reduce((sum,x)=>sum+x,0)
// }

// console.log(sumRest(1,2,3,4,5,6,7))
// const [first, second, ...rest] = [1,2,3,4,5,6,7];
// console.log(rest);

// // Promise
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve=> {
//        setTimeout(resolve,ms);
//     })
// }
// function callback() {
//     console.log("Promised resolved after 1 second.")
// }
// setTimeoutPromisified(1000).then(callback);

// // Callback Hell
// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function() {
//         console.log("hello!");
//         setTimeout(function() {
//             console.log("Hello There!")
//         },5000)
//     },3000)
// },1000)

// Promisified Callback hell

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }
// console.log("Begin")
// setTimeoutPromisified(1000).then(function() {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function() {
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function() {
//             console.log("hello there!")
//         })
//     })
// })

// setTimeoutPromisified(1000).then(function() {
//     console.log('hi');
//     return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function() {
//     console.log("hello there......")
// })

// console.log("End")

// // Async Await
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }

// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hello there..!")
// }
// solve();

const fs = require('fs');
// const { resolve } = require('path');
// function cleanFile(filepath,cb) {
//     fs.readFile(filepath,'utf-8',function (err,data) {
//         data = data.trim();
//         fs.writeFile(filepath,data,function(){
//             cb();
//         });
//     });
// }
// function onDone() {
//     console.log("file has been cleaned!")
// }
// cleanFile('node.js',onDone);

// async function main() {
//     await cleanFile("a.txt");
//     console.log("Done File cleaning!");
// }
// function cleanFile(filepath) {
//     return new Promise(function (resolve) {
//         fs.readFile(filepath,'utf-8',function(err,data) {
//             data = data.split('\n').map(x=> x.trimStart()).join('\n');
//             fs.writeFile(filepath,data,function() {
//                 resolve();
//             })
//         })
//     })
// }

// main()

// const fs = require('fs');
// fs.readFile('a.txt','utf-8',function(err,data) {
//     if (err) {
//         console.log("Error opening file.")
//     } else {
//         console.log(data);
//     }
// })
function readFilePromisified(filepath) {
    return new Promise( function (resolve,reject) {
        fs.readFile(filepath,'utf-8',function(err,data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
function onDone(data) {
    console.log(data);
}
function onError(err) {
    console.log("Error:" + err)
}
readFilePromisified('1a.txt').then(onDone).catch(onError);