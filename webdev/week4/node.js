// const express = require('express');
// const app = express();

// // route
// app.get('/',function(req,res) {
//     res.send("Hello World!");
// })
// app.get('/asd',function(req,res) {
//     res.send("Hello World from asd!");
// })
// app.post('/',function(req,res) {
//     res.send("Hello World from post!");
// })
// app.listen(3100);
// const http = require('http');
// const https = require('https');

// const express = require('express');
// const app = express();

// function isOldEnoughMiddleware(req,res,next) {
//     const age = req.query.age;
//     if (age >14) {
//         next();
//     } else {
//         res.json({msg: `You are underage ${age}`})
//     }
// }

// app.use(isOldEnoughMiddleware);

// app.get('/ride2',function(req,res){
//     res.json({ msg: "You have successfully ridden the ride2."})
// });

// app.get('/ride1',function(req,res){
//     res.json({ msg: "You have successfully ridden the ride1."})
// });

// http.createServer(app).listen(3000,function() {
//     console.log("Server started at port 3000.")
// });
// https.createServer(app).listen(3001,function () {
//     console.log("3001 port secure login.")
// })

// const fs = require("fs");
// const csv = require("csv-parser");
// const filepath = "sample.csv";
// const results = [];

// fs.createReadStream(filepath)
//   .pipe(csv(["Name", ,]))
//   .on("data", (data) => {
//     results.push(data);
//   })
//   .on("end", () => {
//     console.log(results);
//   });

const rewardCategories = [
  { name: "1st Category", count: 5, dailyTarget: 0.5 },
  { name: "2nd Category", count: 2, dailyTarget: 0.2 },
  { name: "3rd Category", count: 1000, dailyTarget: 100 },
  { name: "4th Category", count: 2000, dailyTarget: 200 },
  { name: "5th Category", count: 20000, dailyTarget: 2000 },
];
let dailyDistribution = rewardCategories.reduce(
  (acc, category) => {
    acc[category.name] = 0;
    return acc;
  },
  { "Better Luck Next Time": 0 }
);
console.log(dailyDistribution);

const categoryCounters = rewardCategories.reduce((acc, category) => {
  acc[category.name] = 0;
  return acc;
}, {});
console.log(categoryCounters);
