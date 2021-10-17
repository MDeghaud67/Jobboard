const Advertisements = require('../model/advertisements')
// create one Company
exports.create = function (req, res) {
  const advertisements = new Advertisements({
    title: req.body.title,
    description: req.body.description,
    remote: req.body.remote,
    createAt: Date.now(),
    isActive: true,
    location: req.body.location,
    _companiesId: req.body._companiesId,
    _contractTypeId: req.body._contractTypeId
  })
  advertisements.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// get all company
exports.get_All = function (req, res) {
  Advertisements.find().then(advertisements => {
    res.send(advertisements)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
// get a company
exports.get_One = function (req, res) {
  Advertisements.findById(req.params._id).then(advertisements => {
    if (!advertisements) {
      return res.status(404).send({
        message: 'advertisement not found with id ' + req.params._id
      })
    }
    res.send(advertisements)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Advertisements not found with id ' + req.param._id
      })
    }
    return res.status(500).send({
      message: res.status(500).send({
        message: 'Error retrieving Advertisements with id ' + req.params._id
      })
    })
  })
}
// find a Advertisements by title dans company ID
exports.find_By_Title_Comp = (req, res) => {
  Advertisements.find({ title: req.params.title, _companiesId: req.params._companiesId }).then(
    advertisements => {
      res.send(advertisements)
    }
  ).catch(err => {
    res.status(500).send('Error -> ' + err)
  })
}
// update a Company
exports.update = (req, res) => {
  Advertisements.update({ _id: req.params._id }, {
    title: req.body.title,
    description: req.body.description,
    remote: req.body.remote,
    createAt: Date.now(),
    isActive: true,
    location: req.body.location,
    _companiesId: req.body._companiesId,
    _contractTypeId: req.body._contractTypeId
  }, { new: true })
    .then(advertisements => {
      if (!advertisements) {
        return res.status(404).send({
          message: 'advertisements not found with id ' + req.params._id
        })
      }
      res.send(advertisements)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'advertisements not found with id ' + req.params._id
        })
      }
      return res.status(500).send({
        message: 'Error updating Advertisements with id ' + req.params._id
      })
    })
}
// delete a advertisement
exports.delete = (req, res) => {
  Advertisements.findByIdAndRemove(req.params._id).then(advertisement => {
    if (!advertisement) {
      return res.status(404).send({
        message: 'Advertisement not found with id ' + req.params._id
      })
    }
    res.send({ message: 'advertisement deleted successfully!' })
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Advertisements not found with id ' + req.params._id
      })
    }
    return res.status(500).send({
      message: 'Could not delete Advertisements with id ' + req.params._id
    })
  })
}
