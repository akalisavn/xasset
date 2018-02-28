import {combineReducers} from 'redux';
import assetsReducer from './AssetsReducer';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers( { assets: assetsReducer, login: loginReducer });

export default rootReducer


