import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

// Connect our store to the reducers
export default createStore(rootReducer, applyMiddleware(thunk));