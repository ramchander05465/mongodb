const assert = require('assert');
const request = require('supertest');

const app = require('../app');

describe('The express app', () => {
  it('handle a get request to /api', (done)=>{
      request(app)
        .get('/api')
        .end((err, response)=>{
            console.log('done ')
            assert(response.body.hi==='welcome')
            done()
        })
  })
})