import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}