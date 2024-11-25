import {WebSocket, WebSocketServer} from "ws"

const wss = new WebSocketServer({port:8081})

// TODO -- Use Maps & Records in Typescript
/*****  This will be the all Sockets Object like in new version */
// let allSockets = {
//     "room123":[socket1,socket2,socket3],
//     "123123" :[socket],
//     "RoomX": [socket1,socket2,socket3]
// }
//  Another Approach, Define User Interface
//  interface User {
//     sokcet:WebSocket,
//     room:String
//       } 
// and allSockets as array of Users
let allSockets:WebSocket[] = [];
wss.on("connection",(socket)=>{
    const current_socket = socket;
    allSockets.push(socket);
    // Inform all that someone joined
    allSockets.map((s)=>{
        s.send("joined")
 })

// On getting message, Broadcast to all except sender
    socket.on("message",(data)=>{
        console.log(data.toString())
        allSockets.map((s)=>{
            if (s != current_socket) {
                s.send(data.toString())
            } 
    })
    
    })
    socket.on("close",()=>{
        allSockets= allSockets.filter(s=>s!=socket) 
        allSockets.map((s)=>{
            s.send("Disconnected")
        })
    })
})
