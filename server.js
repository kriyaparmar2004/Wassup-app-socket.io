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
});
io.on('connection', (socket) => {
    console.log('A user connected');
});
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// const PORT = process.env.PORT || 3000;

// http.listen(PORT, () => {
//     console.log(`Listening to port ${PORT}`);
// });

// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Example: Emit a welcome message to the connected client
//     socket.emit('welcome', 'Welcome to the server!');

//     // Example: Listen for messages from the connected client
//     socket.on('clientMessage', (data) => {
//         console.log('Received message from client:', data);
//         // Process the received data or perform actions accordingly
//     });
// });
