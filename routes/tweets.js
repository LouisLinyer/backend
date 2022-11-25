var express = require('express');
var router = express.Router();
var Tweet = require('../models/tweets');

//Récupération des tweets
router.get('/tweet', (req, res) => {
  Tweet.find({username: req.body.username})
    .then(data => {
      let message = data.message;
      res.json({message: data.message});
      return {message};
    });
});

module.exports = router;


