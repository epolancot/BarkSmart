const { Schema } = require('mongoose')

const userSchema = new Schema(
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
    email: { 
      type: String
    },
    avatar: { 
      type: String
    },
    passwordDigest: { 
      type: String 
    },
    dogs: [{
      type: Schema.Types.ObjectId,
      ref: 'Dog'
    }]
  },
  { timestamps: true }
)

module.exports = userSchema
