const fs = require('fs');
const chalk = require('chalk');

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
    console.log(chalk.green('New note added!'));
  } else {
    console.log(chalk.red('Title is in use.'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter(note => note.title !== title);

  if (noteToKeep.length !== notes.length) {
    const noteToKeepJSON = JSON.stringify(noteToKeep);
    fs.writeFileSync('notes.json', noteToKeepJSON);
    console.log(chalk.green(`${title} successfully removed!`));
  } else {
    console.log(chalk.red(`${title} does not exist.`));
  }
  
}

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
  removeNote: removeNote,
};