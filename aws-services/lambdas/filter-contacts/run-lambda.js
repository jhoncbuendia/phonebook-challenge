let lambda = require('./index');
let event = {
    "word": "7",
};

lambda.handler(event, {}, (err, response) => {
    if(err) console.log(err);
    else console.log(response);
});