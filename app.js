const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.get('/', (req, res) => {
  res.send('hello');
})
const PORT = 1000;
app.listen(PORT, () => {
  console.log('App listening');
})
