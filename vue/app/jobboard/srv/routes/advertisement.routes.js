module.exports = function (srv) {
  const adv = require('../../src/controller/advertisementController')
  srv.post('/api/advertisement', adv.create)
  srv.get('/api/advertisements', adv.get_All)
  srv.get('/api/advertisement/:_id', adv.get_One)
  srv.put('/api/advertisement/:advertisementId', adv.update)
  srv.delete('/api/advertisement/:advertisementId', adv.delete)
}
