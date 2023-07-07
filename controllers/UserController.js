const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {

  try {
    const { username, password, confirmPassword, name, lastName, email } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).send("Username not available!")
    } else {
      const user = await User.create({ username, passwordDigest, name, lastName, email })
      res.send(user)
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
  }
}

const GetAll = async (req, res) => {
  try {
      const users = await User.find({})
      res.send(users)
  } catch (error) {
      res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
  }
}

const GetProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.params.user_id)
    res.send(profile)
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
  }
}

const UpdateProfile = async (req, res) => {
  try {
    const profile = await User.findByIdAndUpdate(req.params.user_id, req.body, {new: true})
    res.send(profile)
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
  }
}


module.exports = {
  Login,
  Register,
  GetAll,
  GetProfile,
  UpdateProfile
}
