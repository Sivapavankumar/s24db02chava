const mongoose = require("mongoose")
const BankSchema = mongoose.Schema({
Bank_name: String,
Bank_place: String,
limit: Number
})
module.exports = mongoose.model("Bank",
BankSchema)