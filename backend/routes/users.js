const router = require('express').Router();
let User = require('../models/User');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));

});

router.post('/add', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email,
        password,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;