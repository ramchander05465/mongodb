const asserts = require('assert');
const UserModel = require('../src/user');

describe('Inserting Sub Documents', () => {
    it('Should insert sub document', (done)=>{
        const user = new UserModel({firstName:'Sonu', posts:[]});
        user.save()
            .then(()=> UserModel.findOne({firstName:'Sonu'}))
            .then((result) => {
                result.posts.push({title:'Student'});
                return result.save();
            })
            .then(()=> UserModel.findOne({firstName:'Sonu'}))
            .then((result)=>{
                asserts(result.posts[0].title='Student');
                done();
            })
    })

    after('Cleaning user document', ()=>{
        UserModel.remove({}).then((res)=> console.log('remove status', res));
    })
})
