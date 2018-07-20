import { GET_CONTACTS, ADD_CONTACTS } from '../constants';

const initialState = {
    contactsList: [
    ]
}


const AppReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_CONTACTS:
            let _state = Object.assign({}, state);
            //_state.filterList.push(action.payload);
            _state.contactsList = action.payload;
            return _state;
            break;
    
        default:
            return state;
            break;
    }
}

export default AppReducer;