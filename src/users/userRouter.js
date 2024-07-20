// userRouter.js

// Example user router to define user-related routes

const express = require('express');
const router = express.Router();
const { getUsers } = require('./userController');

// GET /api/users
router.get('/', getUsers);

module.exports = router;
