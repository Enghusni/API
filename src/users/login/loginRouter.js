// loginRouter.js

// Example login router to define login-related routes

const express = require('express');
const router = express.Router();
const { login } = require('./loginController');

// POST /api/users/login
router.post('/', login);

module.exports = router;
