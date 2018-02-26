console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');

var args = yargs.argv
var command = args._[0];

if (command === 'add'){
    var note = notes.addNote(args.title, args.body)
    if(note){
      console.log("Note was added. Title: ", note.title, " Body : ", note.body)
    }else{
      console.log("Note title already exists")

    }
}
else if (command === 'list') {
    notes.getAll();
  } else if (command === 'read') {
    notes.getNote(args.title);
  } else if (command === 'remove') {
    var note = notes.removeNote(args.title);
      if(note){
        console.log("Note was removed. Title: ", note.title, " Body : ", note.body)
      }else{
        console.log("Note not found. Title: ", note.title)

      }
  } else {
    console.log('Command not recognized');
  }
  

//fs.appendFile('greetings.txt', 'Hello Worlds!');