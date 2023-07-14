const { Schema } = require('mongoose')

const pictureSchema = new Schema(
    {
        pictureUrl: {
            type: String
        },
        profileType: {
            type: String
        },
        profileId: {
            type: String
        }

    },
    { timestamps: true }
)
module.exports = pictureSchema