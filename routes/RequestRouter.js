const router = require('express').Router()
const controller = require('../controllers/RequestController')
const middleware = require('../middleware')

router.get('/user/:username', 
            middleware.stripToken, 
            middleware.verifyToken, 
            controller.GetRequests)
            
router.get('/id/:request_id', 
            controller.GetRequest)

router.post('/',     
            middleware.stripToken, 
            middleware.verifyToken,  
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
