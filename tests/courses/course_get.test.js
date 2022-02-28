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
   //  Testing for get all  
  
   it('to test the get student is working or not', async () => {
    const status = await Courses.find();
    expect(status.ok);
   });
    
      
    })