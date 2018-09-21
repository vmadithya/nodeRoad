console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (err) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log('adding note', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    };

   
};


var getNote = (title) => {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note) => note.title === title); 
    
    if (filteredNotes.length){
        var tempNote = JSON.parse(filteredNotes);
        console.log(`Title is  ${title} -- Body is ${tempNote.body}`);
        return true;
    };
        
};



var getall = () => {
    var notes = fetchNotes();

    return notes;
};



var remove = (title) => {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note) => note.title !== title); 
    saveNotes(filteredNotes);
    if (notes.length !== filteredNotes.length){
        console.log('Removing the ', title);
        return true;
    }
        
};

module.exports = {
    // addNote : addNote
    addNote,
    getall,
    remove
};