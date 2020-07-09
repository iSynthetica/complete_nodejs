const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Hello world"
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if (findNote) {
        console.log(chalk.green.inverse('Your note:'))
        console.log('title: ' + chalk.green(findNote.title))
        console.log('body: ' + chalk.green(findNote.body))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes .push({
            title: title,
            body: body
        });

        saveNotes(notes)

        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note exists'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)

    if (notes.length === updatedNotes.length) {
        console.log(chalk.red.inverse('Note not exists'))
    } else {
        saveNotes(updatedNotes)

        console.log(chalk.green.inverse('Note "' + title + '" removed'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if (!notes.length) {
        console.log(chalk.red.inverse('No notes'))
    } else {
        console.log(chalk.green.inverse('Your notes:'))

        notes.forEach(note => {
            console.log(chalk.green(note.title))
        });
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJSON)
}

module.exports = {
    readNote: readNote,
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}