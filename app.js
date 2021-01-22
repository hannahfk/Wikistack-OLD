const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const app = express();
module.exports = app;
const { db } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
  res.send(layout(''));
});

app.listen(3000, () => {
  console.log(`App listening in port 3000`);
});