const mongoose = require('mongoose')
const userSchema = require('./User')
const dogSchema = require('./Dog')
const requestSchema = require('./Request')
const trainerSchema = require('./Trainer')

const User = mongoose.model('User', userSchema)
const Request = mongoose.model('Request', requestSchema)
const Trainer = mongoose.model('Trainer', trainerSchema)
const Dog = mongoose.model('Dog', dogSchema)

module.exports = {
  User,
  Request,
  Trainer,
  Dog
}


