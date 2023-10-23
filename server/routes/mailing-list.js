const express = require('express');
const router = express.Router()
const mailingListController = require('../controllers/mailingListController')

router.post('/subscribe', mailingListController.subscribe_mailing_list);
router.post('/unsubscribe/:emailId', mailingListController.unsubscribe_mailing_list)

module.exports = router;