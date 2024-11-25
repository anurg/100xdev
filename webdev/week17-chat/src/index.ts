import {WebSocket, WebSocketServer} from "ws";

const wss = new WebSocketServer({port:8080})

interface User {
    socket:WebSocket,
    room:String
}
let allSockets:User[] = [];

wss.on("connection",(socket)=>{
    
// @ts-ignore
    socket.on("message",(data)=>{
        const parsedData = JSON.parse(data.toString());
        
        if (parsedData.type==='join') {
            console.log(`user joined room: ${parsedData.payload.roomId}`)
            allSockets.push({
                socket:socket,
                room:parsedData.payload.roomId
            })
        } 
        if (parsedData.type==='chat') {
            const userRoom = allSockets.find(x=>x.socket==socket)?.room
            console.log(`user joined room: ${userRoom}`)
            allSockets.map((u)=>{
                if (u.room == userRoom) {
                    u.socket.send(parsedData.payload.message)
                    console.log(`message broadcasted`)
                }
            })
        }
    })
    socket.on("close",()=>{
        allSockets= allSockets.filter(u=>u.socket!=socket) 
    })
})
