module.exports = function (srv) {
  const contract = require('../../src/controller/contractController')
  srv.post('/api/contract', contract.create)
  srv.get('/api/contracts', contract.get_All)
  srv.get('/api/contract/:_id', contract.get_One)
  srv.put('/api/contract/:_id', contract.update)
  srv.get('/api/contract/name/:label', contract.find_By_Label)
  srv.delete('/api/contract/:_id', contract.delete)
}
