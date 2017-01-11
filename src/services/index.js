'use strict';

const channelMessages = require('./channelMessages');

const channel = require('./Channel');

const users = require('./users');

const mongoose = require('mongoose');

module.exports = function () {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;
  app.configure(users);
  app.configure(channel);
  app.configure(channelMessages);
};
