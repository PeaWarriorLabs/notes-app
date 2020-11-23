const fs = require('fs');

const getNotes = () => {
  return 'Your notes...'
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (!duplicateNotes.length) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New note added!')
  } else {
    console.log('Note title taken.')
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return (JSON.parse(dataBuffer));
  } catch (error) {
    return [];
  }
}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};