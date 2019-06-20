const express = require('express');
const router = express.Router();
const { addPage } = require('./../views');


router.get('/', (req, res, next) => {
  res.redirect('/');
});


router.post('/', (req, res, next) => {
  res.send('first post request');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});



module.exports = router;
