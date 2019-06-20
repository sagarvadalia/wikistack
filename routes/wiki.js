const express = require('express');
const router = express.Router();
const { addPage } = require('./../views');
const { Page } = require("../models");

// parses url-encoded bodies
router.use(express.urlencoded({ extended: false }));

// parses json bodies
router.use(express.json())

router.get('/', (req, res, next) => {
  res.redirect('/');
});


router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content:req.body.pageContent,
    authorName:req.body.authorName,
    authorEmail:req.body.authorEmail,
    pageStatus : req.body.pageStatus
  })
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});
router.get('/add', (req, res, next) => {
  res.send(addPage());
});
router.get('/:slug', (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});



module.exports = router;
