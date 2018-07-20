let DataModel = require('./index');
let dataModel = new DataModel();

dataModel.createContact(
    (err, obj) => {
        if(err) console.log(err);
        else console.log(obj);
    }, 
    {
        firstName: 'juan',
        LastName: 'ac',
        phone: 123,
    }
);

dataModel.getContact((err, obj) => {
    if(err) console.log(err);
    else console.log(obj);
});

dataModel.filter((err, obj) => {
    if(err) console.log(err);
    else console.log(obj);
}, 'j');
