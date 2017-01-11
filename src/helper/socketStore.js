/**
* SocketStore class is used to add socket to store, remove socket from store and emit socket event.
*/
// const socket = require('feathers-socketio');
const store = []; // Store keep tracks of userId and its corresponding socket.
class SocketStore {

  static addByUserId(userId, socketObj) {
  // console.log("i m in addByUserId");
    const newObj = {
      id: userId,
      socket: socketObj,
    };
    if (store.length === 0) {
      store.push(newObj);
    } else {
      for (let i = 0; i < store.length; i++) {
        if (store[i].id === userId) {
          store[i].socket = socketObj;
          return socketObj;
        }
      }
      store.push(newObj);
    }
  }

  static getByUserId(userId) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].id.toString() === userId.toString()) {
       // console.log(store[i].socket);
        // return store[i].socket ;
        const t = store[i].socket.id;
        console.log('here in getByUserId > userId >>', userId, 'socketId >>', t);

         // console.log("here in getByUserId socket >>",t);
      }
    }
  }

  static display() {   // console.log("i m in display" ,store.length);
    for (let i = 0; i < store.length; i++) {
    //  for (let j = 0; j < store[i].socket.length; j++) {
      console.log('In display store > userId >>', store[i].id, 'socketId >>', store[i].socket.id);
      // }
    }
  }
  static emitByUserId(userId, eventName, payload) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].id.toString() !== userId.toString()) {
        const socketObject = store[i].socket;
        console.log('here in emitByUserId >>', socketObject.id, userId);
        socketObject.emit(eventName, payload);


             // console.log(socketArrayObject[j]);
             // io.broadcast.to(socketArrayObject.id).emit('eventName', payload);

           // console.log(eventName ,payload); WORKING FINE
      }
    }
  }

}
module.exports = SocketStore;
