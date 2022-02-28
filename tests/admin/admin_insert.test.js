//using the path of User Model
const Admin = require('../../models/admin');
const mongoose =  require('mongoose');

// using abs_test as the test database
const url = 'mongodb://localhost:27017/codebugs_student';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
//  useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Admin Schema test For inserting', () => {
   //  Testing for inserting student 
     it('Add Admin testing inserting', () => {
     const admin = {
     'username': 'admin',
     'email' : "admin@gmail.com",
     'password': 'admin_password'
     };
     return Admin.create(admin)
     .then((pro_ret) => {
     expect(pro_ret.username).toEqual('admin');
     });
     });

    
      
    })