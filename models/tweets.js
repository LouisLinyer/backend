const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  message: String,
  token: { type: mongoose.Schema.Types.ObjectId, ref:'users'},
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;