const { Request } = require('../models')


const GetRequests = async (req, res) => {
  try {
    const requests = await Request.find({})
    res.send(requests)
  } catch (error) {
    throw error
  }
}

const CreateRequest = async (req, res) => {
  try {
    const request = await Request.create({ ...req.body })
    res.send(request)
  } catch (error) {
    throw error
  }
}

const UpdateRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(req.params.request_id, req.body, {new: true})
    res.send(request)
  } catch (error) {
    throw error
  }
}

const DeleteRequest = async (req, res) => {
  try {
    await Request.deleteOne({ _id: req.params.request_id })
    res.send({ msg: 'Request Deleted', payload: req.params.request_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRequests,
  CreateRequest,
  UpdateRequest,
  DeleteRequest
}
