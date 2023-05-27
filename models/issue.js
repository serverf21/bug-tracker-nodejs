const mongoose = require('mongoose');

//making the schema
const issueSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        labels: [
            {
                type: String,
                trim: true,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

//model of schema
const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;