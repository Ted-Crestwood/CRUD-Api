const express = require('express');
const {createUser,getUser, signInUser, getUserById} = require('../controllers/user.controller');
const router = express.Router();

router.post('/', createUser);
router.get('/',getUser)
router.post('/',signInUser)
router.get('/',getUserById)
module.exports = router;