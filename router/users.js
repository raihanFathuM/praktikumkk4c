const express = require('express')
const user = require('../controller/users')
const router = express.Router()

const usercontroller = require('../controller/users')

router.get('/users', usercontroller.index)
router.get('/user/:id', usercontroller.show)
  
    router.post('/user', usercontroller.store)
  
    router.put('/user/:id', usercontroller.update)
  
    router.delete('/user/:id', usercontroller.delete)

    module.exports = router