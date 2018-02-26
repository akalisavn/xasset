import {combineReducers} from 'redux';
import assetsReducer from './AssetsReducer';

const rootReducer = combineReducers( { assetsReducer });

export default rootReducer


