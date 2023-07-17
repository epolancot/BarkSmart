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
                email: user.email,
                accountType: user.accountType,
                username: user.username
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
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

const GetAll = async (req, res) => {
    try {
        const trainers = await Trainer.find(
            {}, 
            {
                _id:1,   
                username:1,
                name:1,
                lastName:1,
                avatar:1,
                email:1,
                bio:1,
                experience:1,
                zipCodes:1,
                rating:1,
            })
        res.send(trainers)
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

const GetByQuery = async (req, res) => {
    try {
        const profile = await Trainer.find(
            {$or: [ { name: req.params.query},
                    { lastName: req.params.query},
                    { username: req.params.query},
                    { city: req.params.query}
            ]},
            {
                _id:1,
                username:1,
                name:1,
                lastName:1,
                avatar:1,
                rating:1,
                city:1
            })
        res.send(profile)
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

const GetByZipCode = async (req, res) => {
    try {
        const profile = await Trainer.find(
                        {zipCodes: req.params.zip},
                        {
                            _id:1,
                            username:1,
                            name:1,
                            lastName:1,
                            avatar:1,
                            rating:1,
                            zipCodes:1
                        })
        res.send(profile)
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

const GetProfile = async (req, res) => {
    try {
        const profile = await Trainer.findById(req.params.trainer_id)
        res.send(profile)
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

const UpdateProfile = async (req, res) => {
    try {
        const profile = await Trainer.findByIdAndUpdate(req.params.trainer_id, req.body, { new: true })
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
    GetByQuery,
    GetByZipCode,
    UpdateProfile
}
