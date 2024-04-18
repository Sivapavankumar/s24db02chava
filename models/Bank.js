const mongoose = require("mongoose")
const BankSchema = mongoose.Schema({
Bank_name: 
{
   type: String,
   minlength:2,
   maxlength:20,
},
Bank_place: String,

limit: 
{
    type:Number,
    min:5,
    max:200000000000000000
},
})
module.exports = mongoose.model("Bank",
BankSchema)