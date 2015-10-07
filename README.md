#Real Time Chat

##Installation

I have included a list of fundamental dependencies to help you run the program I have posted.

You will need two terminal windows open at one time to run the application successfully.

-First run "$ npm install" to download all of the dependencies I have provided in the package.json file

-First in the terminal window from root:
  <code>$ mongod</code>

-Second in the terminal window:
  <code>$ node app.js</code>

-Finally navigate to <code>localhost:3000</code>

##Real Time Chat

This is a project for Week 2 of Phase 2 at Dev Bootcamp. Real Time Chat is a chat app that allows users to join chat rooms and communicate real time using Node.js and socket.io respecitvely.  Users can see when other users are typing, which user sent a specific message, and the list of users on the right side of the chat room.  Upon entrance or exit of the chat room, other users are notified on the entrance or the exit of a user.

##Technologies

Real Time Chat is built with Node JS for the backend and MongoDB/Mongoose as the database to allow users to create their own private chat rooms.  I used Express.JS as a middleware for the application as well as socket.io.  Socket.io allows users to chat with each other real time as long as they're on the same destination URL extension.

##Collaboration

If you would like to run this program, feel free to clone it onto your computer.  Please be advised you must have Mongodb installed and running successfully on your computer.

##Resources

+[Socket.io Chat](http://socket.io/get-started/chat/)
+[Node, Express, and Mongo Tutorial](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)
+[Node and Socket.io tutorial](https://www.youtube.com/playlist?list=PLicY6aYZ8ilpmHfJ8jP1lt7ihPpRWBJ9P)
+[Treehouse Node Basics](http://teamtreehouse.com/library/nodejs-basics)


