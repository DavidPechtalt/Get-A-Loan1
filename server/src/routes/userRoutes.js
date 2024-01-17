// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.logIn);
router.get('/login', userController.checkSession )
module.exports = {router};
