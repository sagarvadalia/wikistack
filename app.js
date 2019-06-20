const express = require('express');
const app = express();
const morgan = require('morgan');
// const index = require('./views/index');
const layout = require('./views/layout')
const { db } = require('./models');
const models = require('./models');
const wikis = require('./routes/wiki');
const user = require('./routes/user');


app.use('/wiki', wikis);
app.use('./user', user)
app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.send(layout(""));
});

// app.get('/', (req, res, next) => {
//   res.redirect('/');
// });

db.authenticate().
then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

const init = async () => {
  await models.db.sync({force: true});
  app.listen(PORT, () => {
    console.log('App listening');
});
}

init();
