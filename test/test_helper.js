const mongoose = require('mongoose');

mongoose.Promise = global.Promise
before((done)=>{
    mongoose.connect('mongodb://localhost/MongodbPOC');
    mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
        console.warn('warning', error)
    })
})


/*beforeEach((done) => {
    mongoose.connection.collections.logins.drop(()=>{
        done()
    })
    mongoose.connection.collections.users.drop(()=>{
        done()
    })
})*/