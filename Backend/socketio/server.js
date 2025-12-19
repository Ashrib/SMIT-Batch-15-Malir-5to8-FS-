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
    console.log("user connected with id: ", socket.id)
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on("chat message", (msg) => {
        console.log('user msg: ', msg);
        io.emit('chat message',msg );  //broadcast
    })
})

server.listen(3000, () => {
    console.log('server running at port 3000');
});