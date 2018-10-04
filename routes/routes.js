const ctrl = require('../controllers/driverCtrl'); 
module.exports = (app) => {
    app.get('/api', ctrl.greeting),
    app.post('/api/drivers', ctrl.create),
    app.put('/api/drivers/:id', ctrl.edit),
    app.delete('/api/drivers/:id', ctrl.delete)
    app.get('/api/drivers', ctrl.index)
}