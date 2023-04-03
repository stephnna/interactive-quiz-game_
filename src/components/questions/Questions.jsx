import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeScore } from "../../redux/reducer";
import questionImage from '../../assets/question.jpg';
import { useNavigate } from "react-router-dom";

const Question = () => {
  const {questions, score} = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(questions, "ques");
  
  const [stop, setStop] = useState(false);
  const [options, setOptions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const initialClassName = "p-1.5 hover:scale-110 flex justify-center bg-blue-400 hover:bg-blue-900  text-white font-medium border-2 cursor-pointer items-center min-h-[40px] m-3 rounded-2xl"; 
  const [className, setclassName] = useState(initialClassName);
  const [selectedOption, setSelectedOption] = useState("");
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));    
  }

  
  

  useEffect(() => {
    if(questions.length){
      const question = questions[questionIndex];      
      let answers = [...question.incorrectAnswers];
      answers.splice(getRandomInt(question.incorrectAnswers.length),
      0,
      question.correctAnswer
      );
      setOptions(answers);      
    }
  }, [questions, questionIndex]);

  const delay = (duration, callback) => {
    setTimeout(()=>{
      callback();
    }, duration);
  };

  const navigateSetQustion = () => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);     
      }
      else {
        navigate("/result", {replace: true})
      }
  }
 

  const handleClickOption = (event) => {
    const question = questions[questionIndex];
    setSelectedOption(event.target.textContent);
    setclassName(`${className} active:bg-blue-900`);    
    if (event.target.textContent === question.correctAnswer) {
      delay(2000, ()=>{
        setclassName(`${className} animate-correct`);
        dispatch(changeScore((score + 1)));
        delay(3000, ()=>{
        navigateSetQustion(); 
        setclassName(className);
        });               
      });        
    }
    else {
      delay(2000, ()=>{
        setclassName(`${className} animate-wrong`);
        delay(3000, ()=>{
          navigateSetQustion();
          setclassName(className); 
          });
      });      
    }  
};


  
const commonStyle = "flex justify-center items-center w-24 h-24 rounded-full border-4 font-medium text-white text-xl bg-pink-400";
 
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-full">
      <img 
       src={questionImage}
       className="w-full h-full object-cover"
       alt='game field' 
       />
      </div>      
      <div className="absolute text-center w-full h-full flex flex-col justify-evenly items-center">       
        <div className={commonStyle}>
          30
        </div>
        <div className="w-5/6 border-4 font-medium text-black bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-3/6 p-2 rounded-2xl bg-slate-400">
          Question {questionIndex + 1}: {questions[questionIndex].question}
        </div>
        <div>
        {options.map((option, id) =>(
         <div 
         key={id} 
         onClick={handleClickOption}
         className={selectedOption===option ? className : initialClassName}
         >
          {option}
          </div>
        ))}
        </div> 
        <div className={commonStyle}>{score}/{questions.length}</div>               
      </div>   
    </div>
  )
}

export default Question;