const router = require('express').Router()
const controller = require('../controllers/DogController')
const middleware = require('../middleware')

router.get('/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAll)
router.get('/:dog_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetDog)
router.get('/owner/:owner_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetDogByOwnerId)
router.post('/', 
    middleware.stripToken, 
    middleware.verifyToken,  
    controller.CreateDog)
router.put('/:dog_id', 
    middleware.stripToken, 
    middleware.verifyToken,  
    controller.UpdateDog)
router.delete('/:dog_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteDog)

module.exports = router
