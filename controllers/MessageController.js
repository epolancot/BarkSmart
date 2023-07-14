const { Message } = require('../models')


const GetMessages = async (req, res) => {
  try {
    const messages = await Message.find({})
    res.send(messages)
  } catch (error) {
    throw error
  }
}

const GetMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.message_id)
    const options = {}
    const response = {}
    const date = new Date(message.createdAt)

    if (message.participants[0] === req.params.username) {
        options.cardTitle = `Message to @${message.participants[1]}`
        options.replySection = false
        options.direction = "Sent"
        options.date = date
    } else {
        options.cardTitle = `Message from @${message.participants[0]}`
        options.replySection = true
        options.direction = "Received"
        options.date = date
    }

    response.message = message
    response.options = options

    res.send(response)
  } catch (error) {
    throw error
  }
}

const GetUserMessages= async (req, res) => {
  try {
      const messages = await Message.find({ participants: req.params.username })
      res.send(messages)
  } catch (error) {
      res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
  }
}

const CreateMessage = async (req, res) => {
  try {
    const message = await Message.create({ ...req.body })
    res.send(message)
  } catch (error) {
    throw error
  }
}

const UpdateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.message_id, req.body, {new: true})
    res.send(message)
  } catch (error) {
    throw error
  }
}

const DeleteMessage = async (req, res) => {
  try {
    await Message.deleteOne({ _id: req.params.message_id })
    res.send({ msg: 'Request Deleted', payload: req.params.message_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMessages,
  GetUserMessages,
  GetMessage,
  CreateMessage,
  UpdateMessage,
  DeleteMessage
}
