const yargs = require('yargs')
const chalk = require('chalk');
const log = console.log;

const { getNotes, readNote, addNote, removeNote, listNotes } = require('./notes');
//  const { string } = require('yargs');
yargs.version("1.0.1")

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read one note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

yargs.parse()

// log(process.argv)
// log(yargs.argv)