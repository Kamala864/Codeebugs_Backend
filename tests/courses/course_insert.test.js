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
   //  Testing for inserting student 
     it('Add Courses testing inserting', () => {
     const courses = {
       
     'courseTitle': 'Python',
     'courseDescription' : "description",
     'coursePrice' : "1000",
     'tutorName': 'David'
     };
     return Courses.create(courses)
     .then((pro_ret) => {
     expect(pro_ret.courseTitle).toEqual('Python');
     });
     });

    
      
    })