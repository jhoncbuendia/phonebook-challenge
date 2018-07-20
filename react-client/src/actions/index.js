import {GET_CONTACTS, ADD_CONTACTS} from '../constants';

export const getContacts = () => {
    const action =  {
        type: GET_CONTACTS,
        payload: {}
    }
    return action;
}

export const addContacts = (contactList) => {
    const action =  {
        type: ADD_CONTACTS,
        payload: contactList
    }
    return action;
}