import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './redux/greeting';

const reducer = combineReducers({
    greetings: greetingReducer,
});


const store = createStore(reducer, applyMiddleware(thunk));
export default store;