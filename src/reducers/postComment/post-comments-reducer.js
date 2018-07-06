import {
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../../actions/types';
import { commentData } from '../../components/postComment/commentData';

const INITIAL_STATE = {
  commentData
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, commentData: [...state.commentData, action.payload] };
    case REMOVE_COMMENT:
      const commentData = state.commentData.filter(item => item.id !== action.payload);
      return { ...state, commentData };
    default:
      return state;
  }
};
