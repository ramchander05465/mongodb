const asserts = require('assert');
const UserModel = require('../src/user');

describe('Valding User Records', () => {
    /*let user
    beforeEach((done)=> {
        user = new UserModel({firstName:'Chander'});
        user.save()
        .then((user)=>{
            console.log(user);
            done();
        })
    });*/

    it('Validating user name', (done)=>{
        const user = new UserModel({firstName:'Chander'});
        const validationResult = user.validateSync();
        done()
        console.log(validationResult.errors['firstName'].message)
        /*user.save().then((user)=>{
            console.log(user);
            done();
        })*/
    })
})