const UserHaveApply = require('../model/UserHaveApply')
// create one Company
exports.create = function (req, res) {
  const uha = new UserHaveApply({
    _idUser: req.body._idUser,
    _idAdvertisements: req.body._idAdvertisements,
    letter: req.body.letter,
    cv: req.body.cv,
    CreatedAt: Date.now()
  })
  uha.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// get all Apply
exports.get_All = function (req, res) {
  UserHaveApply.find().then(uha => {
    res.send(uha)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
// get a Apply by Id
exports.get_One = function (req, res) {
  UserHaveApply.findById(req.params._id).then(uha => {
    if (!uha) {
      return res.status(404).send({
        message: 'UserHaveApply not found with id ' + req.params._id
      })
    }
    res.send(uha)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'UserHaveApply not found with id ' + req.param._id
      })
    }
    return res.status(500).send({
      message: res.status(500).send({
        message: 'Error retrieving UserHaveApply with id ' + req.params._id
      })
    })
  })
}
// find a Apply with user and adv
exports.find_By_Adv = (req, res) => {
  UserHaveApply.find({ _idUser: req.body._idUser, _idAdvertisements: req.params._idAdvertisements }).then(
    uha => {
      res.send(uha)
    }
  ).catch(err => {
    res.status(500).send('Error -> ' + err)
  })
}
// update a Company by Id
exports.update = (req, res) => {
  UserHaveApply.update({ _id: req.params._id }, {
    _idUser: req.body._idUser,
    _idAdvertisements: req.body._idAdvertisements,
    letter: req.body.letter,
    cv: req.body.cv
  }, { new: true })
    .then(uha => {
      if (!uha) {
        return res.status(404).send({
          message: 'UserHaveApply not found with id ' + req.params._id
        })
      }
      res.send(uha)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'UserHaveApply not found with id ' + req.params._id
        })
      }
      return res.status(500).send({
        message: 'Error updating UserHaveApply with id ' + req.params._id
      })
    })
}
// delete a company by Id
exports.delete = (req, res) => {
  UserHaveApply.findByIdAndRemove(req.params._id).then(uha => {
    if (!uha) {
      return res.status(404).send({
        message: 'UserHaveApply not found with id ' + req.params._id
      })
    }
    res.send({ message: 'UserHaveApply deleted successfully!' })
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'UserHaveApply not found with id ' + req.params._id
      })
    }
    return res.status(500).send({
      message: 'Could not delete UserHaveApply with id ' + req.params._id
    })
  })
}
