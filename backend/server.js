const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const usersRouter = require('./routes/users');

// app.use('/users', usersRouter);


const schema = new mongoose.Schema({
    name: String,
  });

// const admin = mongoose.model('telelmarket', schema);

// app.get('/', async (req, res) => {
//   admin.find()
//   .then(users => res.json(users))
//   .catch(err => res.status(400).json('Error: ' + err));
// });



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});