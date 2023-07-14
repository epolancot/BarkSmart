const { Schema } = require('mongoose')

const requestSchema = new Schema(
  {
    status: { 
      type: String, 
      default: 'pending'
    },
    senderId: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    senderName: {
      type: String,
    },
    recipientId: { 
      type: Schema.Types.ObjectId,
      ref: 'Trainer',
    },
    recipientName: {
      type: String,
    },
    phone: {
      type: String
    },
    message: { 
      type: String, 
    },
    participants: [{
      type: String
    }]
  },
  { timestamps: true }
)

module.exports = requestSchema
