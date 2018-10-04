const express = require("express");
const bodyParser = require("body-parser");
const router = require('./routes/routes');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test'){
    mongoose.connect('mongodb://localhost/AppDemo')
}

const app = express();
app.use(bodyParser.json());

router(app) 
app.use((err, req, res, next) => {
    res.status(422).send({error:err.message})
})

module.exports = app;