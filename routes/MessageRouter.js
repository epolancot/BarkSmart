const router = require('express').Router()
const controller = require('../controllers/MessageController')
const middleware = require('../middleware')

router.get('/', controller.GetMessages)
router.post('/',
            controller.CreateMessage)
router.put('/:message_id',             
            middleware.stripToken, 
            middleware.verifyToken,  
            controller.UpdateMessage)
router.delete('/:message_id',            
                middleware.stripToken, 
                middleware.verifyToken,  
                controller.DeleteMessage)

module.exports = router
