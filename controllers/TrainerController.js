const { Trainer } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Trainer.findOne({ username })
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
        const { username, password, name, lastName, email } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        let existingUser = await Trainer.findOne({ username })
        if (existingUser) {
            return res.status(400).send("A user with that email has already been registered!")
        } else {
            const user = await Trainer.create({ username, passwordDigest, name, lastName, email })
            res.send(user)
        }
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

module.exports = {
    Login,
    Register
}
