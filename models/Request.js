const { Schema } = require('mongoose')

const requestSchema = new Schema(
  {
    status: { type: String, required: true },
    user: { type: String, required: true },
    trainer: { type: String, required: true },
    dog: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = requestSchema
