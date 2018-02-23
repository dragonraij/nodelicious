console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');


var res = notes.addNote();
// var user = os.userInfo();

var args = yargs.argv
console.log('yargs', args);
var command = process.argv[2];

if (command === 'add'){
    notes.addNote(args.title, args.body)
}
else if (command === 'remove'){
    console.log("note added");
}

//fs.appendFile('greetings.txt', 'Hello Worlds!');