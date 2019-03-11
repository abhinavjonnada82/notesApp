const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongoose
mongoose
   .connect(db, {useNewUrlParser: true})
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err))

   
const Note = require('./NotesSchema')
const router = express.Router()
// Use Routes
app.use('/notes', router)
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

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`) )