const express = require('express')
const app = express()
const {Server} = require('socket.io')
const http = 3000

const server = app.listen(http,(req,res)=>{
    console.log("Server Started")
})

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

const io = new Server(server)

io.on('connection',(socket)=>{
    // console.log("Socket connected")
    // get message from textarea and send messgare to other connected device except sender
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})