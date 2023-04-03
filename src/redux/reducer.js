import axios from 'axios';
import { FETCH_QUESTION_SUCCESS, SCORED_POINT, PERCENTAGE_SCORE } from "./actionTypes";

const initialState = {
questions: [],
score: 0,
percentage: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions,
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


export const getQuestionsApi = (categories, difficulty, number) => async (dispatch) =>{
try{
  // 
  const {data} = await axios.get(`${import.meta.env.VITE_APP_QUESTIONS_API}${categories}&limit=${number}${difficulty}`);
  dispatch(fetchQuestions(data));
} catch (error) {
  console.log(error);
}
}




// export const fetchMarketFailure = (error) => ({
//   type: FETCH_MARKET_FAILURE,
//   error,
// });

// export const getDetailPage = (id, name, symbol) => async (dispatch) => {
//   dispatch(loadingMarket());
//   try {
//     // const resultDet = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
//     // const resultMar = await axios.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`);
//     const { data: socials } = await axios.get(`https://api.coinlore.net/api/coin/social_stats/?id=${id}`);

//     const { reddit: redditObj, twitter: twitterObj } = socials;
//     const combinedDetail = [{
//       avg_active_users: redditObj.avg_active_users,
//       subscribers: redditObj.subscribers,
//       followers_count: twitterObj.followers_count,
//       status_count: twitterObj.status_count,
//     }];
//     dispatch(detailPage(combinedDetail, id, name, symbol));
//   } catch (error) {
//     dispatch(fetchMarketFailure(error));
//   }
// };

export default gameReducer;
