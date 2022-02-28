//using the path of User Model
const Courses = require('../../models/course');
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

describe('Courses Schema test For inserting', () => {
   //  Testing for delete  
  
   it('to test the delete user is working or not', async () => {
    const status = await Courses.deleteOne({_id :Object('621c6373e7c1556b35e8ac38')});
    expect(status.ok);
   });
    
      
    })