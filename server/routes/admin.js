const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.log_in);
router.get('/signed-in-status', adminController.get_signed_in_status);

module.exports = router;