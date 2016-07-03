import { combineReducers } from 'redux';
// import other reducers for the app here

const rootReducer = combineReducers({
    placeholder: (state, action) => state || {}
});

export default rootReducer;
