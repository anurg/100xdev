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

const fetchRes = fetch('https://reqres.in/api/users/', {
    method:'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify({ 
        id: 7,
        email: 'test@yahoo.com',
        first_name: 'test',
        last_name: 'test',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
    })
});
// console.log(fetchRes)
fetchRes.then(res=>{
    if (!res.ok) {
        console.log("Some Error")
    } else {
        console.log("All Good!")
    }
    return res.json()}).then(x=>console.log(x))

console.log("Done")

  