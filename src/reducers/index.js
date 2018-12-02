import {combineReducers} from 'redux';
import dateReducer from './reducerDate';

const allReducers = combineReducers({
    dateReducer: dateReducer
});

export default allReducers;