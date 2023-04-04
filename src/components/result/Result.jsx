import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { percentageScore } from "../../redux/reducer";
import {useEffect} from "react";
import SummaryScore  from "./SummaryScore";
import ShareNow from "./ShareNow";


const Result = () => {
  const {questions, score, percentage} = useSelector((state) => state.game);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const backToGameSettings = () => {
     navigate("/", {replace: true})
     window.location.reload();
  };

 useEffect(() => {
  if(questions.length){
  const totalScore = ((score/questions.length)*100);
  const wholeNumber = Math.round(totalScore);
  dispatch(percentageScore(wholeNumber));
  }     
 }, [score])
 
       
  return (
    <div className="setting-card w-full absolute flex flex-col justify-center items-center h-screen">  
        <SummaryScore 
        score={score}
        questions={questions}
        percentage={percentage}
        />
        <div className="mb-6 w-18 h-18">
         <button 
         type="button"         
         className='flex w-16 hover:scale-110 active:scale-75 h-16 font-extrabold justify-center items-center cursor-pointer rounded-full bg-green-600'
         onClick={backToGameSettings}
         > Play Again
         </button>
        </div>
         <ShareNow />     
    </div>
  )
}

export default Result;