const mongoose = require('mongoose')
const userSchema = require('./User')
const trainerSchema = require('./Trainer')
const dogSchema = require('./Dog')
const requestSchema = require('./Request')
const messageSchema = require('./Message')

const User = mongoose.model('User', userSchema)
const Trainer = mongoose.model('Trainer', trainerSchema)
const Dog = mongoose.model('Dog', dogSchema)
const Request = mongoose.model('Request', requestSchema)
const Message = mongoose.model('Message', messageSchema)

module.exports = {
  User,
  Trainer,
  Dog,
  Request,
  Message
}


