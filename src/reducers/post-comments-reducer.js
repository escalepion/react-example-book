import {
  ADD_COMMENT
} from '../actions/types';
import { commentData } from '../components/postComment/commentData';

const INITIAL_STATE = {
  commentData
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, commentData: [...state.commentData, action.payload] };
    default:
      return state;
  }
};
