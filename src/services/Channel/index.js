'use strict';

const service = require('feathers-mongoose');
const Channel = require('./Channel-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: Channel,
    paginate: {
      default: 5,
      max: 25
    },
  };

  // Initialize our service with any options it requires
  app.use('/Channels', service(options));

  // Get our initialize service to that we can bind hooks
  const ChannelService = app.service('/Channels');

  // Set up our before hooks
  ChannelService.before(hooks.before);

  // Set up our after hooks
  ChannelService.after(hooks.after);
};
