
const MemberState = require('../models/memberState');

module.exports.getMemberStates = async (req, res, next)=>{
    try{
        const memberState = await MemberState.find({});
        res.status(200).send(memberState)
    }catch(error){
        next(error)
    }
}