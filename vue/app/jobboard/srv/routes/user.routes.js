module.exports = function (srv) {
  const user = require('../../src/controller/userController')
  srv.post('/api/user', user.create)
  srv.get('/api/user', user.get_All)
  srv.get('/api/user/:_id', user.get_One)
  srv.put('/api/user/:_id', user.update)
  srv.get('/api/user/email/:email', user.find_By_Email)
  srv.delete('/api/user/:_id', user.delete)
}
