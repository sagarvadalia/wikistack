const express = require('express');
const app = express();
const morgan = require('morgan');
// const index = require('./views/index');
const layout = require('.views/layout')
app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.get('/', (req, res) => {
  res.send(layout(""));
})

const PORT = 1000;
app.listen(PORT, () => {
  console.log('App listening');
})
