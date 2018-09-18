const asserts = require('assert');
const UserModel = require('../src/user');

describe('Validating User model schema', () => {
    it('firstName should be gt 5 char', (done)=>{
        const user = new UserModel({firstName:'Chander'});
        const err = user.validateSync();
        asserts.ok(!err); 
        done();
               
    })

    it('firstName should be lt 5 char', (done)=>{
        const user = new UserModel({firstName:'Chan'});
        const err = user.validateSync();
        asserts.equal(err.errors['firstName'].message, 'Name must be longer than 5 charactors');
        done();        
    })

    it('Validation error handling durring the save', (done)=>{
        const user = new UserModel({firstName:'Chan'})
        user.save()
            .catch((validationResult) => {
                console.log('-=-=-=-=-=-=')
                asserts(validationResult.errors['firstName'].message = 'Name must be longer than 5 charactors');
                done();
            })
    })
})