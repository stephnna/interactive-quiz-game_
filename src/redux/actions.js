import { FETCH_QUESTION_SUCCESS } from "./actionTypes";

export const fetchQuestions = (questions) => ({
  type: FETCH_QUESTION_SUCCESS,
  questions  
});