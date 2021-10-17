const Companies = require('../model/companies')
// create one Company
exports.create = function (req, res) {
  const company = new Companies({
    name: req.body.name,
    description: req.body.description
  })
  company.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// get all company
exports.get_All = function (req, res) {
  Companies.find().then(Companies => {
    res.send(Companies)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
// get a company
exports.get_One = function (req, res) {
  Companies.findById(req.params._id).then(company => {
    if (!company) {
      return res.status(404).send({
        message: 'Company not found with id ' + req.params._id
      })
    }
    res.send(company)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Company not found with id ' + req.param._id
      })
    }
    return res.status(500).send({
      message: res.status(500).send({
        message: 'Error retrieving Company with id ' + req.params._id
      })
    })
  })
}
// find a Company by name
exports.find_By_Name = (req, res) => {
  Companies.find({ name: req.params.name }).then(
    company => {
      res.send(company)
    }).catch(err => { res.status(500).send('Error -> ' + err) })
}
// update a Company
exports.update = (req, res) => {
  Companies.replaceOne({ _id: req.params._id }, {
    name: req.body.name,
    description: req.body.description,
    active: req.body.activate
  }, { new: true })
    .then(company => {
      if (!company) {
        return res.status(404).send({
          message: 'Company not found with id ' + req.params._id
        })
      }
      res.send(company)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Company not found with id ' + req.params._id
        })
      }
      return res.status(500).send({
        message: 'Error updating customer with id ' + req.params._id
      })
    })
}
// delete a company
exports.delete = (req, res) => {
  Companies.findByIdAndRemove(req.params._id).then(company => {
    if (!company) {
      return res.status(404).send({
        message: 'Company not found with id ' + req.params._id
      })
    }
    res.send({ message: 'Company deleted successfully!' })
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Company not found with id ' + req.params._id
      })
    }
    return res.status(500).send({
      message: 'Could not delete customer with id ' + req.params._id
    })
  })
}
