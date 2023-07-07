const { Schema } = require('mongoose')

const messageSchema = new Schema(
    {
        status: { 
            type: String, 
            required: true 
        },
        sender: { 
            type: String, 
            required: true 
        },
        senderType: { 
            type: String, 
            required: true 
        },
        recipient: { 
            type: String, 
            required: true 
        },
        recipientType: { 
            type: String, 
            required: true 
        },
        body: { 
            type: String, 
            required: true 
        }
    },
    { timestamps: true }
)

module.exports = messageSchema