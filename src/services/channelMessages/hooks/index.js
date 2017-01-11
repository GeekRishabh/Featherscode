
const globalHooks = require('../../../hooks');

const hooks = require('feathers-hooks');

const SocketStore = require('../../../helper/socketStore.js');

function socketTest() {
  return function(hook) {
    console.log(SocketStore.display());
    console.log( hook.data);
    return hook;
  };
}


exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [
  // socketTest()
    SocketStore.emitByUserId(hooks.data, 'eventName', hooks.data)
                        // (userId, eventName, payload)
  ],
  update: [],
  patch: [],
  remove: [],
};
