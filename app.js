var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var router = express.Router();
var userNames = [];

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Mongoose DB creation

mongoose.connect('mongodb://localhost/chat',function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Connect to DB');
  }
});

// Mongo Schema

var chatRoomSchema = mongoose.Schema({
  chatroom: String,
  create:{type: Date, default: Date.now}
});

// MODEL

var chatRoom = mongoose.model('Room',chatRoomSchema)

// ROUTES

app.use(bodyParser());

app.get('/',function(request,response){
  response.render('homepage')

})

app.post('/',function(request,response){
  var newRoom = new chatRoom({chatroom: request.body.roomName});
  newRoom.save();

  response.redirect('/chatroom/'+newRoom.chatroom)
});

app.get('/chatroom/:name',function(req,res){
  res.render('index',{chatRoomName:req.params.name});
});


server.listen(3000);

// SOCKETS

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


