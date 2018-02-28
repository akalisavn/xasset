import { LOGGED_IN, LOGGED_OUT, LOGIN_FAIL } from '../actions/LoginActions';

const initialState = {
    loggedin: false,
    loginfailcount: 0    
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGGED_IN:
            return {
                ...state,
                loggedin: true,
                loginfailcount: 0
            }
        case LOGGED_OUT:
            return {
                ...state,
                loggedin: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loginfailcount: state.loginfailcount + 1,
            }
        default: 
            return state;
    }
}