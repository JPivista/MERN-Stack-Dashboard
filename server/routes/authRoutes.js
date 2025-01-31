// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, authUser, createAdmin } = require('../controllers/authController'); // Ensure the correct import

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/createadmin', createAdmin); // Ensure this is the correct handler

module.exports = router;
