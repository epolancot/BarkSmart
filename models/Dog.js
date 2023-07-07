const { Schema } = require('mongoose')

const dogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        breed: {
            type: String
        },
        age: {
            type: String
        },
        weight: {
            type: Number
        },
        height: {
            type: Number
        },
        comments: [{
            by: {
                type: String
            },
            date: {
                type: String
            },
            body: {
                type: String
            }
        }],
        owner: {
            type: String
        },
        trainer: {
            type: String
        },
    },
    { timestamps: true }
)
module.exports = dogSchema
