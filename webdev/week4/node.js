const express = require('express');
const app = express();

// route
app.get('/',function(req,res) {
    res.send("Hello World!");
})
app.get('/asd',function(req,res) {
    res.send("Hello World from asd!");
})
app.post('/',function(req,res) {
    res.send("Hello World from post!");
})
app.listen(3100);