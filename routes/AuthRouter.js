const router = require('express').Router()
const userController = require('../controllers/UserController')
const trainerController = require('../controllers/TrainerController')
const middleware = require('../middleware')

router.get('/session', 
middleware.stripToken, 
middleware.verifyToken,
userController.CheckSession)

router.post('/login', userController.Login)
router.post('/register', userController.Register)

router.post('/trainers/login', trainerController.Login)
router.post('/trainers/register', trainerController.Register)

module.exports = router
