var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

//Récupération des tweets
router.get('/tweet', (req, res) => {
  fetch('https://${NEWS_API_KEY}')
    .then(response => response.json())
    .then(data => {
      let message = req.body.message;
      if (message.length > 280) {
        message = message.substring(0, 280) + '...';
      }
      return { firstname: req.body.firstname, username: req.body.username, message: req.body.message  };
    });
});

module.exports = router;



