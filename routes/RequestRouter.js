const router = require('express').Router()
const controller = require('../controllers/RequestController')
const middleware = require('../middleware')

router.get('/', controller.GetRequests)
router.get('/:request_id', controller.GetRequest)
router.post('/',
            controller.CreateRequest)
router.put('/:request_id',             
            middleware.stripToken, 
            middleware.verifyToken,  
            controller.UpdateRequest)
router.delete('/:request_id',            
                middleware.stripToken, 
                middleware.verifyToken,  
                controller.DeleteRequest)

module.exports = router
