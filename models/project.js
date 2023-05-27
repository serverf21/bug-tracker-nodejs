const mongoose = require('mongoose');

//write the schema for project
const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            required: true,
        },
        issues: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Issue',
            },
        ],
        labels: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

//creating a model
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;