const mongoose = require('mongoose')
const CompaniesSchema = require('./companies')
const ContractTypeSchema = require('./contractType')

const AdvertisementsSchema = new mongoose.Schema({
  title: String,
  description: String,
  remote: Boolean,
  createAt: Date,
  isActive: Boolean,
  location: String,
  _companiesId: [{ type: mongoose.Types.ObjectId, ref: CompaniesSchema._id }],
  _contractTypeId: [{ type: mongoose.Types.ObjectId, ref: ContractTypeSchema._id }]
})
module.exports = mongoose.model('Advertisements', AdvertisementsSchema)
