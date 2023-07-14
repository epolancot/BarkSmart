const { Schema } = require('mongoose')

const trainerSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/ixuv8kb.png'
        },
        email: {
            type: String,
            required: true
        },
        passwordDigest: {
            type: String
        },
        bio: {
            type: String
        },
        experience: {
            type: Number
        },
        dogs: [{
            type: Schema.Types.ObjectId,
            ref: 'Dog'
        }],
        messages: [{
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }],
        zipCodes: [{
            type: Number
        }],
        rating: {
            type: Number
        },
        accountType: { 
            type: String,
            default: "trainer"
        }
    },
    { timestamps: true }
)

module.exports = trainerSchema
