module.exports = function (srv) {
  const companies = require('../../src/controller/companiesController')
  srv.post('/api/company', companies.create)
  srv.get('/api/companies', companies.get_All)
  srv.get('/api/company/:_id', companies.get_One)
  srv.put('/api/company/:_id', companies.update)
  srv.get('/api/companies/name/:name', companies.find_By_Name)
  srv.delete('/api/company/:_id', companies.delete)
}
