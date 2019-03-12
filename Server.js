const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const router = require('./api/MongoEP');
const cors = require('cors');
const app = express();


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const serviceAccount = require('./config/ServiceAccountKey.json')
const db = require('./config/keys').mongoURI

// Connect to Firebase
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
})

var dbFB = admin.firestore()
// GET reterive notes form FB

router.get('/fb', (req, res) => {
   dbFB.collection('users').get()
  .then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
       // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
   })
})})


// Post adding notes from FB
router.post('/addfb',(req, res) => {
   var addDoc = dbFB.collection('users').add({
      description: req.body.description,
      name: req.body.name,
      priority: req.body.priority
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
})









// Connect to Mongoose
mongoose
   .connect(db, {useNewUrlParser: true})
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err))

   

// Use Mongoose Routes
app.use('/notes', router)



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`) )