const app = require('./app');

app.get('/api', (req, res)=>{
    res.send('welcome')
})

app.listen(3030, ()=> {
    console.log('running on port no 3030')
});