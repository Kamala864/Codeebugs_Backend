//using the path of User Model
const User = require('../../models/student');
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

describe('User Schema test For inserting', () => {
   
    it('to test the delete user is working or not', async () => {
        const status = await User.deleteOne({_id :Object('621c5a5e7f377f12069957cd')});
        expect(status.ok);
       });
    })