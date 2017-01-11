'use strict';

const service = require('feathers-mongoose');
const channelMessages = require('./channelMessages-model');
const hooks = require('./hooks');
const socketio = require('feathers-socketio');

const socketStore = require('../../helper/socketStore.js');

module.exports = function () {
  const app = this;

  const options = {
    Model: channelMessages,
    paginate: {
      default: 5,
      max: 25
    },
  };
  // Initialize our service with any options it requires
  app.use('/channelMessages', service(options));

  // Get our initialize service to that we can bind hooks
  const channelMessagesService = app.service('/channelMessages');


  app.configure(socketio(function (io) {
    io.on('connection', function (socket) {
       // console.log("In channelMessagesService socketId>", socket.id);
      socket.emit('getuser', (userObj) => {
        socketStore.addByUserId(userObj.id, socket);
       // console.log("In channelMessagesService userObj >",userObj);
        socketStore.display();
        socketStore.getByUserId(userObj.id);
       // socketStore.emitByUserId(userObj.id ,"text", "messages");
      });
    }
   );
  }
)
 );


  // Set up our before hooks
  channelMessagesService.before(hooks.before);

  // Set up our after hooks
  channelMessagesService.after(hooks.after);
};
