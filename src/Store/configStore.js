import {createStore} from 'redux';
import { combineReducers } from 'redux';
import authReducer from 'reducer/authReducer'

const store = createStore(combineReducers({
    authReducer
}));

export default store;
