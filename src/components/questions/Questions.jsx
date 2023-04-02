// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import question from '../../assets/question.jpg';
import QuestionAnswer from './QuestionAnswer';
// import ProgressBar from "@ramonak/react-progress-bar";

const Question = () => {
  // const questions = useSelector((state) => state.game);
  // const [questionNumber, setQuestionNumber] = useState(0)
  // const [timeout, setTimeout] = useState(false)
  // console.log(questions, 'q');
 
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-full">
      <img 
       src={question}
       className="w-full h-full object-cover"
       alt='game field' 
       />
      </div>      
      <div className="absolute text-center w-full h-full flex flex-col justify-evenly items-center">
       {" "/* <div className='w-1/2'>
       <ProgressBar completed={50} animatedOnRender={true} />
        </div>  */}
        <div className="flex justify-center items-center w-24 h-24 rounded-full border-4 font-medium text-white text-xl bg-pink-400">
          30
        </div>
        <QuestionAnswer         
        />                
      </div>
   
    </div>
  )
}

export default Question;