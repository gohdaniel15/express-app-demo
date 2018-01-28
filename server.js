const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// To interact with the `Note` model, require it first at `./models/note.js`

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://my-mongodb-app:123123123@ds215388.mlab.com:15388/my-mongodb-app');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000...');
  });
});

app.get('/', (req, res) => {
  res.render('index');
})

// TODO_1:
// Create a route to receive a post request from `index.handlebars`

// TODO_2:
// Create a route to display all notes
