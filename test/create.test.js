const asserts = require('assert');
const LoginModel = require('../src/login')

describe('Create functionality', () => {
  it('login info', ()=>{
      const joy = new LoginModel({userName:'cram', userPassword:'12345'})
      joy.save()
  })
})