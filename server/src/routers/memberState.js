const express = require("express");
const router = express.Router();
const { getMemberStates } = require('../controllers/memberStateController')
router.get('/',getMemberStates )

module.exports = router;