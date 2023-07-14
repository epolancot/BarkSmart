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
      type: String,
      default: 'https://i.imgur.com/NkxehCJ.png'
    },
    passwordDigest: { 
      type: String 
    },
    dogs: [{
      type: Schema.Types.ObjectId,
      ref: 'Dog'
    }],
    messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }],
    accountType: { 
      type: String,
      default: "user"
    }
  },
  { timestamps: true }
)

module.exports = userSchema
