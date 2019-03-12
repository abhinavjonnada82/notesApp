const express = require('express');
const router = express.Router()

const Note = require('../models/NotesSchema')


// @route GET  api/Notes
// @desc GET ALL Notes
// @access Public
router.get('/',(req,res) => {
   Note.find()
      .sort({ date: -1 })
      .then(notes => res.json(notes))
})

// @route POST  api/Note
// @desc Create a Note
// @access Public
router.post('/add',(req,res) => {
   const newNote = new Note({
       description: req.body.description,
       name: req.body.name,
       priority: req.body.priority
   })

   newNote.save().then(note => res.json(note))

})


module.exports = router