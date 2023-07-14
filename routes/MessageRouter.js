const router = require('express').Router()
const controller = require('../controllers/MessageController')
const middleware = require('../middleware')

router.get('/', 
            middleware.stripToken, 
            middleware.verifyToken, 
            controller.GetMessages
        )
router.get('/s/:username/:message_id',
            middleware.stripToken, 
            middleware.verifyToken,  
            controller.GetMessage)
router.get('/user/:username',
            middleware.stripToken, 
            middleware.verifyToken,  
            controller.GetUserMessages)
router.post('/',
            middleware.stripToken, 
            middleware.verifyToken,         
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
