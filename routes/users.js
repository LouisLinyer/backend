var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
	if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username }).then(data => {
    if (data === null) {
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
      });

      newUser.save().then(() => {
        res.json({ result: true });
      });
    } else {
      res.json({ result: false, error: 'Utilisateur existe deja' });
    }
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Champ vide ou manquant' });
    return;
  }

  User.findOne({firstname: req.body.firstname, username: req.body.username, password: req.body.password }).then(data => {
    if (data) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: 'Utilisateur non trouvé' });
    }
  });
});

module.exports = router;