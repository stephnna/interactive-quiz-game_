import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { percentageScore } from "../../redux/reducer";
import {useEffect} from "react";

const Result = () => {
  const {questions, score, percentage} = useSelector((state) => state.game);
  const navigate = useNavigate();
  const dispatch = useNavigate();

  const backToGameSettings = () => {
     navigate("/", {replace: true})
     window.location.reload();
  };

 useEffect(() => {
  const totalScore = ((score/questions.length)*100);
  const wholeNumber = Math.trunc(totalScore);
  dispatch(percentageScore(wholeNumber));    
 }, [])
 
       
   
  return (
    <div className="setting-card w-full  absolute flex flex-col justify-center items-center h-screen">  
        <div
        className="mb-3"
        >Your score: {score}/{questions.length}</div>
        <div
        className="mb-3"
        >Percentage score: {percentage}%
        </div>
        <div className='w-18 h-18'>
         <button 
         type="button"         
         className='flex w-16 hover:scale-110 active:scale-75 h-16 font-extrabold justify-center items-center cursor-pointer rounded-full bg-green-600'
         onClick={backToGameSettings}
         > Play Again
         </button>
        </div>      
    </div>
  )
}

export default Result;