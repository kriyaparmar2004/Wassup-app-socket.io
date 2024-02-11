const express=require('express')
const { send } = require('process')
// const {socket} = require('socket.io')
const app=express()
const http=require('http').createServer(app)

const PORT=process.env.PORT||3000
http.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})

app.use(express.static(__dirname+'/public'))      //kaa nhii kar rha had to put public

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})
//socket

const io=require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('connected...');
    socket.on('message',(msg)=>{
        // console.log(msg)
        socket.broadcast.emit('message',msg)
    })
});

