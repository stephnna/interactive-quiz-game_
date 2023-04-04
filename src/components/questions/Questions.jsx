import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeScore, updateBar} from "../../redux/reducer";
import questionImage from '../../assets/question.jpg';
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import useSound from "use-sound";
import correct from "../../assets/sound-correct.mp3";
import wrong from "../../assets/sound-wrong.mp3";


const Question = () => {
  const {questions, score, loading, error, bar} = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   
  const [options, setOptions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const initialClassName = "p-1.5 hover:scale-110 active:scale-75 flex justify-center bg-blue-400 hover:bg-blue-900  text-white font-medium border-2 cursor-pointer items-center min-h-[40px] m-3 rounded-2xl"; 
  const initailBarClassName = "text-white font-medium absolute top-0 right-0 left-0 bottom-0"; 
  const [className, setclassName] = useState(initialClassName);
  const [barClassName, setBarClassName] = useState(initailBarClassName);
  const [selectedOption, setSelectedOption] = useState("");  
  const [correctOption] = useSound(correct);
  const [wrongOption] = useSound(wrong);
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));    
  }
  

  useEffect(() => {    
    const perBar = ((questionIndex/questions.length)*100);
    const barPecentage = Math.round(perBar);
    if (bar < 100) {
      dispatch(updateBar(barPecentage));      
    }      
   }, [questionIndex, bar]);

   useEffect(() => {
    if(bar) {
      getColor();
    }          
   }, [bar]);
   

   const getColor = () => {
    if (bar < 40) {
      const curr = `${initailBarClassName} w-${bar} bg-[#ff0000]`;
     return setBarClassName(curr);            
    }
    else if (bar < 70) {
      const curr = `${initailBarClassName} w-${bar} bg-[#ffa500]`;
      return setBarClassName(curr);      
    }
    else  {
     const curr = `${initailBarClassName} w-${bar} bg-[#2ecc71]`;
      return setBarClassName(curr);            
    }
   };
  

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
      delay(2000, () =>{
        setclassName(`${className} animate-correct`);
        delay(2000, ()=>{
          correctOption();
          });        
        dispatch(changeScore((score + 1)))       
        delay(3000, ()=>{
        navigateSetQustion(); 
        setclassName(className);
        });               
      });        
    }
    else {
      delay(2000, ()=>{
        setclassName(`${className} animate-wrong`);
        delay(2000, ()=>{
          wrongOption();
          });       
        delay(3000, ()=>{
          navigateSetQustion();
          setclassName(className); 
          });
      });      
    }  
};

const handleSkip = (event) => {
  console.log(event)
  return navigateSetQustion();
};
  
const commonStyle = "flex justify-center items-center w-24 h-24 rounded-full border-4 font-medium text-white text-xl bg-pink-400";

const diplayDetails = () => {
  if (error) {
    return (
      <div>{error.message}</div>
    );   
  };

  if (loading) {
    return (
      <div
      className="setting-card w-full flex justify-center items-center absolute h-screen"
      >
       <div className="font-extrabold text-xl md:text-5xl">
       GAME LOADING...
    </div> 
    </div>
    );   
  };

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
        <div className="w-1/2 relative sm:w-1/4">
          <div className="w-full re h-6 rounded-2xl bg-[#e6c6c6]">
          <div className="h-full transition ease-in-out delay-150 rounded-2xl bg-[#84b297]"></div>
          </div>
          <div className={barClassName}>
            {bar}%</div>
        </div>      
        <div className={commonStyle}>
          <Timer
          navigateSetQustion={navigateSetQustion} 
          questionIndex={questionIndex}          
          />
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
        <div className="flex mr-2">
        <div className={commonStyle}>{score}/{questions.length}</div> 
        <div className={commonStyle}>
          <button
          type="button"
          onClick={handleSkip}
        >Skip</button></div>
        </div>                      
      </div>   
    </div>
  );
};
return <>{diplayDetails()}</>  
}

export default Question;
