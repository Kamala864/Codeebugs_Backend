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


     //Test for updating student 
     it('Test for user update', async () => {
        return User.findOneAndUpdate({_id :Object('621c5a5e7f377f12069957cd')}, 
       {$set : {full_name:'Harry Bahadur'}})
        .then((pp)=>{
        expect(pp.full_name).toEqual('Harry Bahadur')
        })
        
       });
    })