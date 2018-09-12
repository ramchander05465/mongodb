const asserts = require('assert');
const LoginModel = require('../src/login');

describe('Reading user from logins collection', () => {
    let joe;
    beforeEach((done)=>{
        joe = new LoginModel({userName:'shyam', userPassword:'12345'})
        joe.save()
            .then(()=> {
                done()
            })
    })

    it('Find all users in logins collection', (done)=>{
        LoginModel.find()
            .then((users)=>{
                asserts(users[0].id.toString()===joe.id.toString())
                done();
            })
    })

    it('Find a particular user from login collection', (done)=>{
        LoginModel.findOne({_id:joe._id})
            .then((user)=>{
                asserts(user.userName===joe.userName);
                done()
            })
    })
})
