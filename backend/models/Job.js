const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    positionTitle: {
        type: String,
        required: true
    },
    dateApplied: {
        type: Date,
        required: true
    },
    submissionType: {
        type: String,
        required: true,
        enum: ['Resume', 'Cover Letter', 'Resume and Cover Letter', 'Compadre']
    },
    sentDocuments: {
        type: String,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Job', JobSchema);