var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var userNames = [];

server.listen(3000);

app.get('/',function(request,response){

  response.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection',function(socket){

  io.emit('new-user',"A new user has joined the chat");

  socket.on('user-name',function(name){
    socket.username = name;

    userNames.push(socket.username);
    io.sockets.emit('usernames',userNames);
  });

  socket.on('send message',function(data){
    io.sockets.emit('new message',{msg: data, name: socket.username});
  });

  socket.on('user-typing',function(typing){
    socket.broadcast.emit('typing',typing)
  });


  socket.on('disconnect',function(socket){
    io.emit("leave-chat","A user has left the chatroom");
    userNames.splice(userNames.indexOf(socket.username),1)
    io.emit('usernames',userNames);
  });

});


