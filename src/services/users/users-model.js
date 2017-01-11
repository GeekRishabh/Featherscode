'use strict';

// users-model.js - A mongoose model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({

  mobile: { type: String, required: true, unique: true },
  fname: { type: String },
  lname: { type: String },
  otp: { type: String, required: true },
  verified: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;
