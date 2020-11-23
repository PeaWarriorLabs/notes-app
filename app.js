const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function(params){
    console.log(chalk.blue('Title: ' + params.title));
    console.log(chalk.blue('Body: ' + params.body));
  }
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log(chalk.blue('Removing note'));
  }
});

// list
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function() {
    console.log(chalk.blue('Listing all notes'));
  }
});

// read
yargs.command({
  command: 'read',
  decribe: 'Read note',
  handler: function() {
    console.log(chalk.blue('Reading note'));
  }
});

yargs.parse();