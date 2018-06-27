import { combineReducers } from 'redux';
import postComments from './post-comments-reducer';

const rootReducer = combineReducers({
  postComments
});

export default rootReducer;