import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

io.on("connection", (socket) => {
    console.log("user connected with id: ", socketid)

    socket.broadcast.emit("a new user connected") // except that certain user

    socket.on('joinRoom1', () => { // for room2 join
        socket.join("room1");
        console.log('joined room 1');
        io.to("room1").emit("room1Chat", {
            text: "this room 1 chat"
        });
    })

    socket.on("sendRoom1", (text) => { // send msg to room1
        io.to("room1").emit("room1Chat", { // broadcast to room 1
            text: text
        });
    })

    socket.on('joinRoom2', () => {// for room1 join
        socket.join("room2");
        console.log('joined room 2');
    })

    socket.on('joinBothRoom', () => { // for both rooms join
        socket.join("room1");
        socket.join("room2");
        console.log('joined room 1 and 2');
    })

    socket.on("leaveRoom1", () => {
        socket.leave("room1")
    })

    socket.on("chat message", (msg) => {
        console.log('user msg: ', msg);
        io.emit('chat message', msg);  //broadcast to all
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

server.listen(3001, () => {
    console.log('server running at port 3001');
});
