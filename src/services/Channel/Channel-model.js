'use strict';

// Channel-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  channelName: { type: String },
  senderMobile: { type: String, required: true },
  receiverMobile: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const ChannelModel = mongoose.model('Channel', ChannelSchema);

module.exports = ChannelModel;
