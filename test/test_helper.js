const assert = require('assert');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before( done => {
    mongoose.connect('mongodb://localhost/AppDemo');
    mongoose.connection
        .once('open', ()=>done())
        .on('error', err => {
            console.warn('Warning' ,err)
        })
});

beforeEach(done=>{
    const {drivers} = mongoose.connection.collections;
    drivers.drop()
        .then(()=>{
            drivers.ensureIndex({'geoMetry.coordinates':'2dsphare'})
        })
        .then(()=>done())
        .catch(()=>done())
})
