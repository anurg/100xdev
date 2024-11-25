"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    // @ts-ignore
    socket.on("message", (data) => {
        var _a;
        const parsedData = JSON.parse(data.toString());
        if (parsedData.type === 'join') {
            console.log(`user joined room: ${parsedData.payload.roomId}`);
            allSockets.push({
                socket: socket,
                room: parsedData.payload.roomId
            });
        }
        if (parsedData.type === 'chat') {
            const userRoom = (_a = allSockets.find(x => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            console.log(`user joined room: ${userRoom}`);
            allSockets.map((u) => {
                if (u.room == userRoom) {
                    u.socket.send(parsedData.payload.message);
                    console.log(`message broadcasted`);
                }
            });
        }
    });
    socket.on("close", () => {
        allSockets = allSockets.filter(u => u.socket != socket);
    });
});
