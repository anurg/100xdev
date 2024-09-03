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


http.createServer(app).listen(3000,function() {
    console.log("Server started at port 3000.")
});
https.createServer(app).listen(3001,function () {
    console.log("3001 port secure login.")
})