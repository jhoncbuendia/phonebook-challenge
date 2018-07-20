const mongoose = require('mongoose');
const uuid = require('node-uuid');
require('mongoose-uuid2')(mongoose);
const UUID = mongoose.Types.UUID;

const contactSchema = mongoose.Schema({
    _id: { type: UUID, default: uuid.v4 },
    firstName: String,
    LastName: String,
    phone: String,
    createAt: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      }
    

}, { id: false });

contactSchema.set('toObject', {getters: true});
contactSchema.set('toJSON', {getters: true});

const Contact = mongoose.model('Contact', contactSchema);



exports.Contact = Contact;