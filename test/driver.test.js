const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const Driver = mongoose.model('driver');

describe('Driver controllers', () => {
  it('Post a "/api/drivers" creates a new driver', (done) => {
    Driver.countDocuments().then(count => {
      request(app)
        .post('/api/drivers')
        .send({email:'test@drivers.com'})
        .end(()=>{
          Driver.countDocuments().then(newCount => {
            assert(count+1 === newCount);
            done();
          });            
        });
    });     
  });

  it('Put to /api/driver/id edit an existing driver', (done)=>{
    const driver = new Driver({email:'t@t.com', driving:false});
    driver.save().then(()=>{
      request(app)
      .put(`/api/drivers/${driver._id}`)
      .send({driving:true})
      .end(()=>{
        Driver.findOne({email:'t@t.com'})
          .then(driver => {
            assert(driver.driving===true);
            done()
          })
      })
    })    
  });

  it('Delete to /api/drivers/id can be delete', (done) => {
    const driver = new Driver({email:'test@test.com', driving:false});
    driver.save().then(()=>{
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(()=>{
          Driver.findOne({email:'test@test.com'})
            .then(result=>{
              assert(result===null);
              done()
            })
        })
    })
  });

  it('Get to /api/drivers find drivers in a location', done => {
    const driverOne = new Driver({
      email:"driverOne@one.com",
      geoMetry:{type:"Point", coordinates:[-122.4759902, 47.6147628]}
    });
    const driverTwo = new Driver({
      email:"drivertwo@two.com",
      geoMetry:{type:"Point", coordinates:[-8.253, 25.791]}
    })

    Promise.all([driverOne.save(), driverTwo.save()])
      .then(()=>{
        request(app)
          .get('/api/drivers?lng=80&lat=25')
          .end((err, response)=>{
            console.log(response);
            done()
          })
      })
  })
});
