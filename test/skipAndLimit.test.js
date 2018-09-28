const asserts = require('assert');
const UserModel = require('../src/user');

describe('Skip and limit functionality', () => {
  it('Skipping first record and reading only 2 rec', (done)=>{
      UserModel.find({})
        .sort({firstName:1})
        .skip(1)
        .limit(2)
        .then((result)=>{
            console.log(result);
            done();
        })
  })
})
