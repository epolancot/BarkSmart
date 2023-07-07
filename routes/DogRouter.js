const router = require('express').Router()
const controller = require('../controllers/DogController')
const middleware = require('../middleware')

router.get('/', controller.GetAll)
router.get('/:dog_id', controller.GetDog)
router.post('/', controller.CreateDog)
router.put('/:dog_id', controller.UpdateDog)
router.delete('/:dog_id',            
                middleware.stripToken, 
                middleware.verifyToken,  
                controller.DeleteDog)

module.exports = router
