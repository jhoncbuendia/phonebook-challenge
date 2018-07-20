import axios from 'axios';

class Services {
    constructor() {
        this.API_URL = "https://l47qsunt0m.execute-api.us-east-1.amazonaws.com/dev/";
        
    }

    getContacts(callback) {
        
        fetch(this.API_URL + 'contact/', {
            method: 'get',
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('data', data);
            callback(null, data);
        });
    }

    addContact(contact, callback) {

        fetch(this.API_URL + 'contact/', {
            method: 'post',
            body: JSON.stringify(contact),
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('data', data);
            callback(null, data);
        });
    }

    filterContact(word, callback) {
        fetch(this.API_URL + 'contact/filter', {
            method: 'post',
            body: JSON.stringify({word: word}),
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('data', data);
            callback(null, data);
        });
    }
}

export default Services;