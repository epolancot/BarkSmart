const { Schema } = require('mongoose')

const requestSchema = new Schema(
  {
    status: { 
      type: String, 
      required: true 
    },
    user: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true 
    },
    trainer: { 
      type: Schema.Types.ObjectId,
      ref: 'Trainer',
      required: true 
    },
    dog: { 
      type: Schema.Types.ObjectId,
      ref: 'Dog',
      required: true 
    },
    message: { 
      type: String, 
    }
  },
  { timestamps: true }
)

module.exports = requestSchema
