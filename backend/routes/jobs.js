const router = require('express').Router();
let Job = require('../models/Job');

router.get('/', (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/add', (req, res) => {
    const companyName = req.body.companyName;
    const positionTitle = req.body.positionTitle;
    const submissionType = req.body.submissionType;
    const sentDocuments = req.body.sentDocuments;
    const dateApplied = Date.parse(req.body.dateApplied);
    const user = req.body._id;

    const newJob = new Job({
        companyName,
        positionTitle,
        submissionType,
        sentDocuments,
        dateApplied,
        user,
    });

    newJob.save()
        .then(() => res.json('Job added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;