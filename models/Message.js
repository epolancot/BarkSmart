const { Schema } = require('mongoose')

const messageSchema = new Schema(
    {
        status: { 
            type: String, 
        },
        senderId: { 
            type: String, 
        },
        senderName: {
            type: String,
        },
        senderType: { 
            type: String, 
        },
        recipientId: {
            type: String,
        },
        recipientName: { 
            type: String, 
        },
        recipientType: { 
            type: String, 
        },
        body: { 
            type: String, 
            required: true 
        },
        participants: [{type: String}]
        
    },
    { timestamps: true }
)

module.exports = messageSchema