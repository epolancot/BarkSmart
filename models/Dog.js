const { Schema } = require('mongoose')

const dogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/N3Jp11y.png'
        },
        breed: {
            type: String
        },
        dob: {
            type: Date
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
        accountType: {
            type: String,
            default: "dog"
        }
    },
    { timestamps: true }
)
module.exports = dogSchema
