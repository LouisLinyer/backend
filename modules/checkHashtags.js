function checkHashtag() {
  const hashtag = [];
  const tweetPosted = `${message}`
  const pattern = /(^|\s)([#][a-z\d-]+)/ig;

  (tweetPosted.match(pattern)).push(hashtag);

  return hashtag;
}

module.exports = { checkHashtag };