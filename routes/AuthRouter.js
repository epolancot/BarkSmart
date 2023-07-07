const router = require('express').Router()
const userController = require('../controllers/UserController')
const trainerController = require('../controllers/TrainerController')

router.post('/login', userController.Login)
router.post('/register', userController.Register)
router.post('/trainers/login', trainerController.Login)
router.post('/trainers/register', trainerController.Register)

module.exports = router
