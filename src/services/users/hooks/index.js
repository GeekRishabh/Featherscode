'use strict';

const globalHooks = require('../../../hooks');

const hooks = require('feathers-hooks');


function otpRemove(){

  return function (hook) {
    console.log(hook.data);
    hook.params.provider = 'rest';
    return hook;
  };
}

// function customResponse(hook) {
//   console.log('custom Response', hook);
//   const respData = {
//     success: true,
//     message: 'Works Fine',
//   };

//   // const t = Object.assign(hook.result, respData);
//   // console.log(t);
//   return respData;
// }


exports.before = {
  all: [],
  find: [],
  get: [],
  create: [otpRemove()],
  update: [],
  patch: [],
  remove: [],
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [hooks.remove('otp')],
  update: [],
  patch: [],
  remove: [],
};
