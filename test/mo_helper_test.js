const mongoose = require('mongoose');
mongoose.promise = global.promise; //ES6 -promise

//hooks
before((done) => {

    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });

    mongoose.connection
        .once("open", () => {
            // console.log("Connected");
            done();
        })
        .on("error", error => {
            console.log("Your Error", error);
        });
});

beforeEach((done)=>{
 mongoose.connection.collections.students.drop(()=>{
     done();
 });
});

