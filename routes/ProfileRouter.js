const router = require('express').Router()
const userController = require('../controllers/UserController')
const trainerController = require('../controllers/TrainerController')

router.get('/users/', userController.GetAll)
router.get('/users/:user_id', userController.GetProfile)
router.put('/users/:user_id', userController.UpdateProfile)
router.get('/trainers/', trainerController.GetAll)
router.get('/trainers/:trainer_id', trainerController.GetProfile)
router.put('/trainers/:trainer_id', trainerController.UpdateProfile)

module.exports = router
