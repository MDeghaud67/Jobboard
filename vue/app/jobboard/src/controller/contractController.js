const Contract = require('../model/contractType')
// create one Contract
exports.create = function (req, res) {
  const Ctr = new Contract({
    label: req.body.label
  })
  Ctr.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// get all contract
exports.get_All = function (req, res) {
  Contract.find().then(contract => {
    res.send(contract)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
// get a Contract
exports.get_One = function (req, res) {
  Contract.findById(req.params._id).then(contract => {
    if (!contract) {
      return res.status(404).send({
        message: 'Contract not found with id ' + req.params._id
      })
    }
    res.send(contract)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Contract not found with id ' + req.param._id
      })
    }
    return res.status(500).send({
      message: res.status(500).send({
        message: 'Error retrieving Contract with id ' + req.params._id
      })
    })
  })
}
// find a Contract by label
exports.find_By_Label = (req, res) => {
  Contract.find({ label: req.params.label }).then(
    contract => {
      res.send(contract)
    }
  ).catch(err => {
    res.status(500).send('Error -> ' + err)
  })
}
// update a Contract
exports.update = (req, res) => {
  Contract.replaceOne({ _id: req.params._id }, {
    label: req.body.label
  }, { new: true })
    .then(contract => {
      if (!contract) {
        return res.status(404).send({
          message: 'Contract not found with id ' + req.params._id
        })
      }
      res.send(contract)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Contract not found with id ' + req.params._id
        })
      }
      return res.status(500).send({
        message: 'Error updating customer with id ' + req.params._id
      })
    })
}
// delete a contract
exports.delete = (req, res) => {
  Contract.findByIdAndRemove(req.params._id).then(contract => {
    if (!contract) {
      return res.status(404).send({
        message: 'Contract not found with id ' + req.params._id
      })
    }
    res.send({ message: 'Contract deleted successfully!' })
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Contract not found with id ' + req.params._id
      })
    }
    return res.status(500).send({
      message: 'Could not delete Contract with id ' + req.params._id
    })
  })
}
