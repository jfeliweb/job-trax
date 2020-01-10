const router = require('express').Router();
let User = require('../models/User');

// Get all Users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));

});

// Add New User
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

// Get Single User
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Update Single User
// router.put('/update/:id', (req, res) => {
//     User.findById(req.params.id)
//         .then(users => {
//             users.email = req.body.email;
//             users.password = req.body.password;

//             users.save()
//                 .then(() => res.json('User Updated!'))
//                 .catch(err => res.status(400).json(`Error: ${err}`));
//         })
//         .catch(err => res.status(400).json(`Error: ${err}`));
// });

// Delete Single User
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;