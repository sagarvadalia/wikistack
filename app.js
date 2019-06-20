const express = require('express');
const app = express();
const morgan = require('morgan');
// const index = require('./views/index');
const layout = require('./views/layout')
const { db } = require('./models');
const models = require('./models');
app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.get('/', (req, res) => {
  res.send(layout(""));
})
db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

const init = async () => {
  await models.User.sync();
  await models.Page.sync();

  app.listen(PORT, () => {
    console.log('App listening');
});
}

init();
