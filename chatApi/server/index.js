'use strict'

const cors = require('cors');
const app = require('express')();
app.use(cors());
const serverHttp = require('http').Server(app);
const io = require('socket.io')(serverHttp);

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    next();
});

const myMessages = [];

io.on('connection', function(socket){
    socket.on('send-message', function(data){
        myMessages.push(data);
        socket.emit('text-event', myMessages);
        socket.broadcast.emit('text-event', myMessages);
    });
});

const PORT = 3000

serverHttp.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});