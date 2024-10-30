const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')
const countryRouter = require('./country.router')

// colocar las rutas aquí
router.use(userRouter)
router.use(countryRouter)

module.exports = router;