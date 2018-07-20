const mongoose = require('mongoose');
const async = require('async');
const schema = require('./schema');

class Database {

    constructor() {

    }

    connect(callback) {
        mongoose.connect(
            'mongodb://test:test6674889@ds143451.mlab.com:43451/jhon-dev', 
            { useNewUrlParser: true },
            (err) => {
                if(err) return callback(err);
                else callback(null);
            }
        );
    }


    close(callback) {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection is disconnected through app termination');
            callback(null);
        });
    }
}

class DataModel {

    constructor() {
        this.dataBase = new Database();
    }

    performDataBaseOperation(callback, operation) {

        let dataBase = this.dataBase;
        async.series([
            function(internalCallback) {
                dataBase.connect((err) => {
                    if(err) internalCallback(err);
                    else internalCallback(null);
                });
            },
            function(operationCallback) {
                operation(operationCallback);
            },
            function(internalCallback) {
                dataBase.close((err)=> {
                    if(err) internalCallback(err);
                    else  internalCallback(null);
                });
            }
        ],
        // optional callback
        function(err, results) {
            if(err) {
                console.log('db error', err);
                callback(err); }
            else  callback(results[1]);
        });
    }

    createContact(contact, callback) {

        var contact = new schema.Contact({firstName : contact.firstName, LastName : contact.LastName, phone: contact.phone });

        this.performDataBaseOperation(callback, operationCallback => {
            contact.save((err, obj) => {
                if(err) operationCallback(err);
                else operationCallback(null, obj);
            });
        })
    }

    getContact(callback) {

        this.performDataBaseOperation(callback, operationCallback => {
            schema.Contact.find({
            }).
            limit(10)
            .sort({createAt: 'desc'})
            .exec((err, obj) => {
                if(err) operationCallback(err);
                else operationCallback(null, obj);
            });
        })
    }

    filter(callback, word) {

        this.performDataBaseOperation(callback, operationCallback => {
            schema.Contact.find(
                { $or: [ 
                    { firstName:{$regex:word, $options:"$i"} }, 
                    { lastName:{$regex:word, $options:"$i"} },
                    { phone:{$regex:word, $options:"$i"} }
                    ] 
                }
            ).
            limit(10)
            .exec((err, obj) => {
                if(err) operationCallback(err);
                else operationCallback(null, obj);
            });
        })
    }
}

module.exports = DataModel;