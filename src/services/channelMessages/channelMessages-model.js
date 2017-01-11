'use strict';

// channelMessages-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelMessagesSchema = new Schema({
  channelId: { type: String, required: true },
  sendBy: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const channelMessagesModel = mongoose.model('channelMessages', channelMessagesSchema);

module.exports = channelMessagesModel;
