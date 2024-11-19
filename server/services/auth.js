const express = require('express');
const router = express.Router();

router.post("/signup", (req, res, next) => {
  try {
    console.log('Signup attempt received:', {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // Log other relevant fields but exclude sensitive data
    });
  } catch (error) {
    // Handle the error here
  }
});