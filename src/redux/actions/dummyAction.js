/* eslint-disable import/prefer-default-export */
import { SET_TEXT } from '../types/types';

export const dummyAction = data => ({
  type: SET_TEXT,
  payload: {
    data
  }
});
