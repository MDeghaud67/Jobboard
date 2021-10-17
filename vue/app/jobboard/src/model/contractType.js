const mongoose = require('mongoose')

const contractTypeSchema = new mongoose.Schema({
  label: { type: String, required: true }
})

module.exports = mongoose.model('ContractType', contractTypeSchema)
