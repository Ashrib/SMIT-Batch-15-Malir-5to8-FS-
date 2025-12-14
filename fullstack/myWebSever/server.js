import express from "express"
import "dotenv/config"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import cors from 'cors'
import usersRoutes from "./routes/users.js";
import messageRoutes from "./routes/messages.js";
import { Server } from "socket.io";
import { createServer } from "http";

var corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express(); //server
app.use(express.json())
app.use(cors(
    corsOptions
))

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
});



let db_url = process.env.MONGODB_URL;

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)
app.use('/messages', messageRoutes(io))

app.get('/', (req, res) => {
    res.send('app is running')
})

mongoose.connect(db_url).then(() => {
    console.log("mongodb successfully connected")
}).catch((error) => {
    console.log("error in mongodb connection")
    console.error(error)
})


io.on('connection', (socket) => {
    console.log("user is connected....", socket.id);

    socket.on("test", (data) => {
        console.log("user test", data)
    })

    socket.on("userUpdate", (data) => {
        console.log("user updated", data)
    })


    socket.on("disconnect", () => {
        console.log("user disconnected"); // false
    });
})

server.listen(3000, () => {
    console.log(`this server is listening at port ${3000}`)
})