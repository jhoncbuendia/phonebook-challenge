let lambda = require('./index');
let event = {
    "firstName": "test2",
    "LastName": "test",
    "phone": 1234
};

lambda.handler(event, {}, (err, response) => {
    if(err) console.log(err);
    else console.log(response);
});