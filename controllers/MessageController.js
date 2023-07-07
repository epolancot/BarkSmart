const { Message } = require('../models')


const GetMessages = async (req, res) => {
  try {
    const messages = await Message.find({})
    res.send(messages)
  } catch (error) {
    throw error
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
  CreateMessage,
  UpdateMessage,
  DeleteMessage
}
