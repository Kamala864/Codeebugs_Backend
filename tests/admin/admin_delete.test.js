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
   it('to test the delete user is working or not', async () => {
    const status = await Admin.deleteOne({_id :Object('621c675814af3f26a3929b25')});
    expect(status.ok);
   });

    
      
    })