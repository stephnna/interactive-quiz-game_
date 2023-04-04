import axios from 'axios';
import { 
  FETCH_QUESTION_SUCCESS, 
  SCORED_POINT, 
  PERCENTAGE_SCORE ,
  FETCH_QUESTION_SUCCESS_BEGINS,
  FETCH_QUESTION_FAILURE,
  BAR_PERCENTAGE
} from "./actionTypes";

const initialState = {
questions: [],
score: 0,
loading: false,
error: null,
bar: 0,
percentage: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS_BEGINS:
      return {
        ...state,        
        loading: true,
        error: null,
      };

    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        loading: false,        
      };

      case FETCH_QUESTION_FAILURE:
        return {
          ...state,
          error: action.error,         
          loading: false,        
        };

      case SCORED_POINT:
      return {
        ...state,
        score: action.score,
      };

      case PERCENTAGE_SCORE:
        return {
          ...state,
          percentage: action.percentage,
        };

      case BAR_PERCENTAGE:
         return {
            ...state,
            bar: action.bar,
          };

      default:
        return state;
  }
};

export const changeScore = (score) => { 
  return {
    type: SCORED_POINT,
    score,    
  };
};

export const updateBar = (bar) => { 
  return {
    type: BAR_PERCENTAGE,
    bar,    
  };
};

export const percentageScore = (percentage) => { 
  return {
    type: PERCENTAGE_SCORE,
    percentage,    
  };
};

export const fetchQuestions = (questionData) => {
  const questions = [];
  questionData.forEach((obj) => {
    const newDetail = {
      id: obj.id,      
      question: obj.question,      
      correctAnswer: obj.correctAnswer,      
      incorrectAnswers: obj.incorrectAnswers,
    };
    questions.push(newDetail);
  });
  
  return {
    type: FETCH_QUESTION_SUCCESS,
    questions,    
  };
};

export const loadingQuestions = () => ({
  type: FETCH_QUESTION_SUCCESS_BEGINS,
});

export const fetchQuestionsFailure = (error) =>({
  type: FETCH_QUESTION_FAILURE,
  error,
})



export const getQuestionsApi = (categories, difficulty, number) => async (dispatch) =>{
dispatch(loadingQuestions());
  try{  
  const {data} = await axios.get(`${import.meta.env.VITE_APP_QUESTIONS_API}${categories}&limit=${number}${difficulty}`);
  dispatch(fetchQuestions(data));
} catch (error) {
  dispatch(fetchQuestionsFailure(error));
}
}

export default gameReducer;
