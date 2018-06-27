import {
  ADD_COMMENT
} from './types';

export const addComment = (text, parent) => {
  //i know that it has very hard algorythm :))))..By the way + symbol same with getTime() method.
  const id = + new Date();
  const item = { name: 'John Doe', date: 'February 13 2018', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', id, text, parent }
  return {type: ADD_COMMENT, payload: { ...item }};
};