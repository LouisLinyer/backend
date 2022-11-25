var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
	if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

// Vérifie si l'utilisateur n'a pas déjà été créé
  User.findOne({ firstname: req.body.firstname, username: req.body.username }).then(data => {
    if (data === null) {
      console.log(data);
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token: uid2(32),
        deleteTweet: true,
      });

      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token });
      });
    } else {
      // l'utilisateur existe déjà dans la base de donnée
      res.json({ result: false, error: 'Utilisateur existe deja' });
    }
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['firstname','username', 'password'])) {
    res.json({ result: false, error: 'Champ vide ou manquant' });
    return;
  }

  User.findOne({firstname: req.body.firstname, username: req.body.username}).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'Utilisateur non trouvé' });
    }
  });
});

module.exports = router;