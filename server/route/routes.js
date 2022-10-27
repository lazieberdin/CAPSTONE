// import express
import express from 'express'

// import function from controller
import { showUsers, userLogin } from '../controller/UserController.js'

// init express router
const router = express.Router()

router.get('/users', showUsers)
router.post('/login', userLogin)

export default router
