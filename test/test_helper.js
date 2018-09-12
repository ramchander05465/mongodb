const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/MongodbPOC');
mongoose.connection
    .once('open', () => console.log('good to go'))
    .on('error', (error) => {
        console.warn('warning', error)
    })

beforeEach((done) => {
    mongoose.connection.collections.logins.drop(()=>{
        done()
    })
})