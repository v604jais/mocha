const Student = require('../mapp/student');
///import Student from '../mapp/student';
const assert = require("assert");

describe('Create records', () => {
    it('Create a User in DB', () => {

        const vishal = new Student({ name: "vishal" });
        vishal.save()
            .then(() => {
                assert(!vishal.isNew);
            })
            .catch(() => {
                console.log("error");
            })


    })

});