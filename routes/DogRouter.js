const router = require('express').Router()
const controller = require('../controllers/DogController')
const middleware = require('../middleware')

router.get('/', controller.GetDogs)
router.post('/',
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
