"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// wss.on('connection',function(socket) {
//     console.log("User Connected!");
//     // socket.send("hello");
//     setInterval( ()=> {
//         socket.send(`The current price of Solana is ${Math.random()}`)
//     },500
//     )
//     socket.on("message",(e)=>{
//         console.log(e.toString())
//     })
// })
wss.on('connection', function (socket) {
    console.log("User Connected!");
    socket.on("message", (e) => {
        if (e.toString() === "Ping") {
            socket.send("Pong");
        }
    });
});
