const express = require('express');
const router = express.Router();

const memberState = require('./memberState');

router.get('/', (req, res)=>{
    res.json({
        message: 'UN Member States Backend API - 🥞'
    })
});
router.use('/member-states', memberState);
module.exports = router;