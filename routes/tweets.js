var express = require('express');
var router = express.Router();
require('../models/connection');

const fetch = require('node-fetch');
const { find } = require('../models/users');

const CONNECTION_STRING = process.env.CONNECTION_STRING;

//Récupération des tweets
router.get('/tweet', (req, res) => {
  fetch(`https://${CONNECTION_STRING}`)
  Tweet.find({username: req.body.username})
    .then(response => response.json())
    .then(data => {
      let message = req.body.message;
      if (message.length > 280) {
        message = message.substring(0, 280) + '...';
      }
      res.json({message: data});
      return;
    });
});

module.exports = router;



