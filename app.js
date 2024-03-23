const express = require('express')
const app = express()
const {Server} = require('socket.io')
const http = 3000

const server = app.listen(http,(req,res)=>{
    console.log("Server Started")
})

const io = new Server(server)

io.on('connection',(socket)=>{
    console.log("Socket connected")
})