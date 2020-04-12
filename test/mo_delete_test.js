const Student = require('../mapp/student');
///import Student from '../mapp/student';
const assert = require("assert");

describe("Delete Test", () => {

    let deleter;
    beforeEach((done) => {

        deleter = new Student({ name: "Deleter" });
        deleter.save()
            .then(() => {
                done();
            });
    });

    it("A Delete test for deleter", (done) => {

        //Student.deleteOne({name:"Deleter"})
        Student.findByIdAndDelete(deleter._id)
         .then(()=> Student.findOne({name:"Deleter"}))
         .then((student)=>{
             assert(student===null);
             done();
         });

    });

});