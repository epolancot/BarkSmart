const { Schema } = require('mongoose')

const dogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/UEKW2rz.png'
        },
        breed: {
            type: String
        },
        dob: {
            type: Date
        },
        weight: {
            type: String
        },
        height: {
            type: String
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
        }
    },
    { timestamps: true }
)
module.exports = dogSchema
