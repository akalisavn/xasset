import { MAXIMO_HOST, USERID, PASSWORD } from '../constants';

import Realm from 'realm';
import { saveUser, UserSchema, getUserPassword } from '../schemas/RealmUtil';
//import { authenticateUser } from '../actions/LoginActions';

const OSLC_SELECT = 'assetnum,description,status,location,audited,lastauditdate';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_FAIL = 'LOGGED_FAIL';

export function authenticateUser(username, password) {
    return (dispatch) => {
        console.log('Loggin user: ' + username);
        
        getUserPassword(username)
            .then( pwd => {
                if (pwd === password) {
                    dispatch(logIn());
                } else {
                    alert('Incorrect Password');
                    dispatch(failLogIn());
                }
            })
            .catch( err => {
                console.log('Error retrieving user credential from local DB');
                console.log(err);
            });


    }
}

function logIn() {
    return {
        type: LOGGED_IN
    }
}

function logOut() {
    return {
        type: LOGGED_OUT
    }
}

function failLogIn() {
    return {
        type: LOGIN_FAIL
    }
}