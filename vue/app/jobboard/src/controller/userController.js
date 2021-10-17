const User = require('../model/user')
// create one Company
exports.create = function (req, res) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numTel: req.body.numTel,
    description: req.body.description
  })
  user.save().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

// get all user
exports.get_All = function (req, res) {
  User.find().then(user => {
    res.send(user)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}
// get a user
exports.get_One = function (req, res) {
  User.findById(req.params._id).then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'user not found with id ' + req.params._id
      })
    }
    res.send(user)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'user not found with id ' + req.param._id
      })
    }
    return res.status(500).send({
      message: res.status(500).send({
        message: 'Error retrieving user with id ' + req.params._id
      })
    })
  })
}
// find a User by email
exports.find_By_Email = (req, res) => {
  User.find({ email: req.params.email }).then(
    user => {
      res.send(user)
    }
  ).catch(err => {
    res.status(500).send('Error -> ' + err)
  })
}

// log
exports.login = (req, res) => {
  User.find({ email: req.params.email, password: req.params.password }).then(
    user => {
      res.send(user._id)
    }
  ).catch(err => {
    res.status(500).send('Error ->' + err)
  })
}

// update a user
exports.update = (req, res) => {
  User.update({ _id: req.params._id }, {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numTel: req.body.numTel,
    description: req.body.description
  }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        })
      }
      res.send(user)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params._id
        })
      }
      return res.status(500).send({
        message: 'Error updating User with id ' + req.params._id
      })
    })
}
// delete a user
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params._id).then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'User not found with id ' + req.params._id
      })
    }
    res.send({ message: 'User deleted successfully!' })
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'User not found with id ' + req.params._id
      })
    }
    return res.status(500).send({
      message: 'Could not delete User with id ' + req.params._id
    })
  })
}
