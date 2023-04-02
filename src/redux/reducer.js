import axios from 'axios';
import { FETCH_QUESTION_SUCCESS } from "./actionTypes";
import { fetchQuestions } from './actions';

const initialState = {
questions: [],
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions
      };

      default:
        return state;
  }
}

export const getQuestionsApi = (categories, difficulty, number) => async (dispatch) =>{
try{
  // 
  const {data} = await axios.get(`${process.env.REACT_APP_QUESTIONS_API}${categories}&limit=${number}${difficulty}`);
  console.log(data, 'dat');         
  dispatch(fetchQuestions(data));
} catch (error) {
  console.log(error);
}
}

// export const questionPage = (questionData) => {
//   const organizedQuestions = [];
//   questionData.forEach((obj) => {
//     const newDetail = {
//       id: obj.id,
//       category: obj.category,
//       correctAnswer: obj.correctAnswer,      
//       incorrectAnswers: obj.incorrectAnswers,
//     };
//     organizedCrptoDetail.push(newDetail);
//   });
//   return {
//     type: FETCH_MARKET_DETAIL_SUCCESS,
//     organizedCrptoDetail,
//     id,
//   };
// };

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
