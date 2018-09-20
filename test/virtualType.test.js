const asserts = require('assert');
const UserModel = require('../src/user');

describe('Virtual type ', () => {
  it('PostCount should return numbers of post', (done)=>{
    const user = new UserModel({
        firstName:'Raja Ram', 
        posts:[{title:'Java Script'}]
    });

    user.save()
        .then(()=> UserModel.findOne({firstName:'Raja Ram'}))
        .then((result) => {
            asserts(result.postCount===1);
            done()
        })
  })
})
