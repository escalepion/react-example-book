import { combineReducers } from 'redux';
import postComments from './postComment/post-comments-reducer';

const rootReducer = combineReducers({
  postComments
});

export default rootReducer;