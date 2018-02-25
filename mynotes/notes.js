console.log('Starting notesjs');

const fs = require('fs');

var fetchNotes = () => {
    var notes =[]
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'))
    } catch (error) {
        return [];   
    }

    return notes;

}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    return 'New Note';
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var duplicateNotes= notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        console.log("writing file")
        notes.push(note);
        saveNotes(notes);
    }



};

var getAll = () => {
    console.log("Returning all nodes");
}

var getNote = (title) => {
    console.log("Getting note", title);
}

var removeNote = (title) => {
    console.log("Removing note", title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};


