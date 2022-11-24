const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firsName: String,
  username: String,
  password: String,
  token: String,
  deleteTweet: Boolean,
});

const User = mongoose.model('users', userSchema);

module.exports = User;