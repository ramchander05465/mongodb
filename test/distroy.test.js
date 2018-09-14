const asserts = require('assert');
const LoginModel = require('../src/login');

describe('removing user from logins collection', () => {
  let joe;

  beforeEach((done)=> {
    joe = new LoginModel();

    joe.save({userName:'Soniya', userPassword:'123456'})
    .then((user)=>{
        done()
    })
  })

  it('model instance remove', (done)=>{
    joe.remove()
        .then(()=> LoginModel.findOne({userName:'Soniya'}))
        .then((res) => {
            asserts(res === null);
            done();
        })
  })

  it('class method remove', (done)=>{
    LoginModel.remove({userName:'Soniya'})
        .then(()=> LoginModel.findOne({userName:'Soniya'}))
        .then((res) => {
            asserts(res === null);
            done();
    })
  })

  it('class method findAndRemove', (done)=>{
    LoginModel.findOneAndRemove({userName:'Soniya'})
        .then(()=> LoginModel.findOne({userName:'Soniya'}))
        .then((res) => {
            asserts(res === null);
            done();
        })
  })

  it('class method findByIdRemove', (done)=>{
    LoginModel.findByIdAndRemove(joe._id)
        .then(()=> LoginModel.findOne({_id:joe._id}))
        .then((res) => {
            asserts(res === null);
            done();
        })
  })
})
