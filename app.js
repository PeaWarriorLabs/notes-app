// in order to use a module, you must require it
const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);