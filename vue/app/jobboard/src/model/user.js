const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  numTel: Number
})

module.exports = mongoose.model('User', UserSchema)
