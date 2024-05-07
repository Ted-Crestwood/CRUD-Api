const express = require('express');
const router = express.Router();
const {createApplication, getApplications} = require('../controllers/application.controller');

router.get('/',getApplications)
router.post('/',createApplication)
module.exports = router;