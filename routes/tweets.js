var express = require('express');
// const { default: user } = require('../../frontend/reducers/user');
var router = express.Router();
var Tweet = require('../models/tweets');
var User = require('../models/users');

//Récupération des tweets
router.get('/tweet', (req, res) => {
  Tweet.find({username: req.body.username})
    .then(data => {
      let message = data.message;
      res.json({message: data.message});
      return {message};
    });
});

router.post('/newTweet', (req, res) => {
  // const tweet = useSelector((state) => state.tweet.value);
  // const user = useSelector((state) => state.user.value);
  if(!users.token === null){
    const newTweet = new Tweet({
    firstname: req.body.firstname,
    username: req.body.username,
    message: req.body.message,
    token: users.token,
  })
}

  else {
   
  }
  
  newTweet.save();
  }
);

module.exports = router;


