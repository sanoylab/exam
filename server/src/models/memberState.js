const mongoose = require('mongoose');
const memberStateSchema = new mongoose.Schema({
   countryName: {
       type: String,
       trim: true,
       required: [true, 'Country Name is required.']
   } ,
   dateOfAccession: {
       type: Date,
       requred: [true, 'Accerssion Date is required.']
   }
},{
    timestamps: true
});

const MemberState = mongoose.model('MemberState', memberStateSchema) ;
module.exports = MemberState;