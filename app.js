// console.log('Starting app.js');

// const fs = require('fs');
// const _ = require('lodash');
// const notes = require('./notes');
// const yargs = require('yargs');


// const argv = yargs.argv;


// if(process.argv[2] === 'add'){
    
//     var putNotes = notes.addNote(argv.title,argv.body);
//     if(putNotes){
//         console.log('Note created');
//         console.log(argv.title +' -- '+ argv.body);
//     }
//     else{
//         console.log('Note already exists');
//     }
// }else if(process.argv[2] === 'remove'){
//     if(notes.remove(argv.title)){
//         console.log(`Notes with ${argv.title} successfully deleted`);
//     };
// }else if(process.argv[2] === 'read'){
//     var status = notes.getNote(argv.title);
//     if(status){
//         console.log(`Notes with ${argv.title} successfully got`);
//     };
// }else if(process.argv[2] === 'list'){
//     var listNodes = notes.getall();
//     console.log(`Printing ${listNodes.length} note(s)`);
//     listNodes.forEach((note) => console.log(note));
// }
// else {
//     console.log('NO command');
// };

