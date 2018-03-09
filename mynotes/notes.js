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
        return note;
    }



};

var getAll = () => {
    return  fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    return notes.filter((note) => note.title === title);
    
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var note = null;
    for (var i =0; i < notes.length; i++)
    if (notes[i].title === title) {
        note = notes[i];
        notes.splice(i,1);
        saveNotes(notes);
       break;
    }
    return note;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};


