const asserts = require('assert');
const LoginModel = require('../src/login');

describe('updating user in logins collection', () => {
  let joe;

  beforeEach((done)=> {
    joe = new LoginModel();
    joe.save({userName:'Soniya', userPassword:'123456'})
    .then((user)=>{
        done()
    })
  })

  it('model instance set', (done)=>{
    joe.set('userName','Soniya')
    joe.set('userPassword','2222222')
    joe.save()
        .then(()=> LoginModel.find({}))
        .then((users)=> {
            asserts(users.length === 1)
            asserts(users[0].userPassword==='2222222');

            console.log(users)
            done()
        })
    })

  /*it('class method update', (done)=>{
    LoginModel.updateOne({userName:'Soniya'}, {$set:{userName:'Soni', userPassword:'12345'}})
        .then(()=> LoginModel.find({}))
        .then((res) => {
            console.log(res)
            //asserts(user.userName === 'raja');
            done();
        })      
    })*/

  /*it('class method find one and update', (done)=>{
    LoginModel.findOneAndUpdate({userName:'Soniya'}, {userName:'Monika'})
        .then(()=> {
            LoginModel.find().then((res) => {
                done();
                console.log(res)
            })
        })        
  })*/

  it('class method find By ID and update', (done)=>{
    LoginModel.findByIdAndUpdate(joe._id, {userName:'Monika'}, {upsert: true})
        .then(()=> {
            LoginModel.find().then((res) => {
                done();
                console.log(res)
            })
        })        
  })
})
