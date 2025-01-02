const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("./UserSchema")
const Exercise = require("./ExerciseSchema")
const Log = require("./LogSchema")

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', async function (req, res) {
  
  const userInput = req.body.username


  try {
    const userInDB = await User.findById(User._id)

    if (!userInDB) {
      const newUser = await User.create({
        username: userInput,
      })
    }
  } catch (error) {
    res.status(500).json({error: "Error creating user"})
  }
})

app.post('/api/users/:_id/exercises', async function (req, res) {

})

app.get('/api/users/:_id/logs', async function (req, res) {

})

app.get('/api/users', async function (req, res) {

})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
