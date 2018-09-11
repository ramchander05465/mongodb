const mongoose = require('mongoose');
//import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/MongodbPOC');
mongoose.connection
    .once('open', () => console.log('good to go'))
    .on('error', (error) => {
        console.warn('warning', error)
    })