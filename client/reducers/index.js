import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './Posts';
import comments from './Comments';

export const rootReducer=combineReducers({posts,
    comments,
    routing:routerReducer});
