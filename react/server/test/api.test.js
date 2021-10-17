const request = require('supertest');
const app = require('../src/app');


describe('POST /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});