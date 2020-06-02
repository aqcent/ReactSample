import { createStore, combineReducers } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer
});

let store = createStore(reducers)

export default store