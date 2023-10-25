const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin')
const verifyToken = require('../utils/verifyToken')
require('dotenv').config();


exports.log_in = [
  body('email', 'Must be a valid email')
    .trim()
    .isEmail()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(Object.keys(errors).length > 0){
      res.status(400).json(errors);
    } else {
      let {email, password} = req.body;
      if (email === process.env.ADMIN_EMAIL) {
        const hashedPassword = (await Admin.findOne({email: email})).password
        const passwordMatches = await bcrypt.compare(password, hashedPassword);
        if(passwordMatches){
          const token = jwt.sign({email}, process.env.SECRET_TOKEN, {expiresIn: '24h'});
          return res.status(200).json({
            message: "Auth Passed",
            token
          })
        }
      }
      return res.status(400).json({password: {
        msg: 'Password is incorrect.'
      }});
    }
  })
]

exports.get_signed_in_status = [
  verifyToken,
  async (req, res, next) => {
    res.status(200).json({
      message: "Auth Passed"
    })
  }
]