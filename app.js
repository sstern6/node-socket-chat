var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io =require('socket.io').listen(server);


app.get('/',function(request,response){

  response.sendFile(__dirname + '/index.html');
})

server.listen(3000);