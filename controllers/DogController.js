const { Dog } = require('../models')


const GetAll = async (req, res) => {
    try {
        const dogs = await Dog.find({})
        res.send(dogs)
    } catch (error) {
        throw error
    }
}

const GetDog = async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.dog_id)
        res.send(dog)
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'An error has occurred! ' + error })
    }
}

const CreateDog = async (req, res) => {
    try {
        const dog = await Dog.create({ ...req.body })
        res.send(dog)
    } catch (error) {
        throw error
    }
}

const UpdateDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndUpdate(req.params.dog_id, req.body, { new: true })
        res.send(dog)
    } catch (error) {
        throw error
    }
}

const DeleteDog = async (req, res) => {
    try {
        await Dog.deleteOne({ _id: req.params.dog_id })
        res.send({ msg: 'Request Deleted', payload: req.params.dog_id, status: 'Ok' })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAll,
    GetDog,
    CreateDog,
    UpdateDog,
    DeleteDog
}
