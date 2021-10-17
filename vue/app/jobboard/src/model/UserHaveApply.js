const mongoose = require('mongoose')
const UserSchema = require('./user')
const AdvSchema = require('./advertisements')

const PeopleHaveAdvertisementsSchema = new mongoose.Schema({
  _idUser: [{ type: mongoose.Types.ObjectId, ref: UserSchema._id }],
  _idAdvertisements: [{ type: mongoose.Types.ObjectId, ref: AdvSchema._id }],
  letter: String,
  CreatedAt: Date
})

module.exports = mongoose.model('PeopleHaveAdvertisements', PeopleHaveAdvertisementsSchema)
