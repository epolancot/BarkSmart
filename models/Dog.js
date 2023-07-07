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
                type: String,
            },
            avatar: {
                type: String,
            },
            date: {
                type: Date
            },
            body: {
                type: String
            }
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        trainer: {
            type: Schema.Types.ObjectId,
            ref: 'Trainer',
        },
    },
    { timestamps: true }
)
module.exports = dogSchema
