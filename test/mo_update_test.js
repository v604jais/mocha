const Student = require('../mapp/student');
const assert = require("assert");

describe('Update Tests', () => {

    let updater;
    beforeEach((done) => {

        updater = new Student({ name: 'Updater' });
        updater.save()
            .then(() => {
                done();

            });
    });

    it('Set n Save test', (done) => {
        updater.set('name',"UpUpdater");
        updater.save()
        .then(()=>Student.find({name:"UpUpdater"}))
        .then(student =>{
            assert(student[0].name !=='Updater');
            done();
        })
     

    });

});

