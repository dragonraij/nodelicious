console.log('Starting notesjs');


var addNote = (title, body) => {
    console.log('addedNote', title, body);
    return 'New Note';
};

module.exports = {
    addNote
};

