console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');


var res = notes.addNote();
// var user = os.userInfo();

var args = yargs.argv
var command = args._[0];

if (command === 'add'){
    notes.addNote(args.title, args.body)
}
else if (command === 'list') {
    notes.getAll();
  } else if (command === 'read') {
    notes.getNote(args.title);
  } else if (command === 'remove') {
    notes.removeNote(args.title);
  } else {
    console.log('Command not recognized');
  }
  

//fs.appendFile('greetings.txt', 'Hello Worlds!');