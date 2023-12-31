const router = require('express').Router()
const userController = require('../controllers/UserController')
const trainerController = require('../controllers/TrainerController')

router.get('/users/', userController.GetAll)
router.get('/users/:user_id', userController.GetProfile)
router.put('/users/:user_id', userController.UpdateProfile)
router.get('/trainers/', trainerController.GetAll)
router.get('/trainers/query/:query', trainerController.GetByQuery)
router.get('/trainers/zip/:zip', trainerController.GetByZipCode)
router.get('/trainers/id/:trainer_id', trainerController.GetProfile)
router.get('/trainers/id/:trainer_id/dogs', trainerController.GetDogs)
router.put('/trainers/id/:trainer_id', trainerController.UpdateProfile)
router.post('/trainers/id/:trainer_id/follow/:dog_id', trainerController.AddDog)

module.exports = router
