const router = require('express').Router();
let Job = require('../models/Job');

// Get all Jobs
router.get('/', (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Add new Job
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

// Get Single Job
router.get('/:id', (req, res) => {
    Job.findById(req.params.id)
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Update Single Job
router.put('/update/:id', (req, res) => {
    Job.findById(req.params.id)
        .then(jobs => {
            jobs.companyName = req.body.companyName;
            jobs.positionTitle = req.body.positionTitle;
            jobs.submissionType = req.body.submissionType;
            jobs.sentDocuments = req.body.sentDocuments;
            jobs.dateApplied = Date.parse(req.body.dateApplied);
            jobs.user = req.body._id;

            jobs.save()
                .then(() => res.json('Job updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Delete Single Job
router.delete('/:id', (req, res) => {
    Job.findByIdAndDelete(req.params.id)
        .then(() => res.json('Job Deleted!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;