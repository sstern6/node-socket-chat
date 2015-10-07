#Real Time Chat

##Installation

I have included a list of fundamental dependecies to help you run the program I have created.

You will need 2 terminal windows open at one time to run the application successfully.

-First run "$ npm install" to download all of the dependencies I have provided in the packag.json file

-First terminal window from root:
  <code>$ mongod</code>

-Second Terminal Window:
  <code>$ node app.js</code>

-Finally navigate to <code>localhost:3000</code>


##Real Time Chat

This is a project for Phase 2 of Week 2 at Dev Bootcamp. Real Time Chat is a chat app that allows users to join chat rooms and communicate real time using Node.js and socket.io.  Users can see when other users are typing, which user sent a specific message, and the list of users on the right side of the chat room.  Upon entrance or exit of the chat room, other users are notofied on the entrance or the exit of the user.

##Technologies

Real Time Chat is built with Node JS for the backend and MongoDB/Mongoose as the database to allow users to create their own private chat rooms.  I used Express.JS as a middleware for the application as well as socket.io.  Socket.io allows users to chat with each other real time as long as they're on the same destination url extension.

##Collaboration

If you would like to run this program, feel free to clone it onto your computer.  Please be advised you must have Mongodb installed on your computer.

##Resources

