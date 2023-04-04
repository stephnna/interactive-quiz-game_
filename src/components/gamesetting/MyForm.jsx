import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestionsApi } from '../../redux/reducer'; 
import FirstInput from './FirstInput';
import { category, difficulty, multiple } from './InputOptions';
import useSound from 'use-sound';
import start from '../../assets/start.mp3';

const MyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState({});
  const [playNow] = useSound(start);
  const min = 1;
  const max = 50;

  useEffect(() => {
    playNow();   
  }, [playNow]);
  


  const handleCategoryChange = (event) => {    
    setSelectedCategory(event);    
  };

  const handleDiffucultyChange = event => {    
    setSelectedDifficulty(event);    
  };
   
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {questions} = useSelector((state) => state.game);
  
  
   const questionNumber = (event) => { 
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);    
   };
  
  const startGame = () => {       
      const selectedString = [];       
    let commaStr = "";      
    if (selectedCategory.length > 0) {       
      selectedCategory.forEach(element => {
      selectedString.push(element.value);               
      });
      commaStr = selectedString.join(","); 
    };

    const queryCategory = `categories=${commaStr}`;
    let difficultStr = "";

    if (selectedDifficulty) {     
       difficultStr = selectedDifficulty.value;       
    };    
    const queryDifficulty = `&difficulty=${difficultStr}`;    // if(isInitial){
      
    dispatch(getQuestionsApi(queryCategory, queryDifficulty, value))    
            
  };

  useEffect(() => {
    if(questions.length) return navigate("/question", {replace: true}); 
  }, [questions])
  

 return (  
    <div className="absolute w-5/6 setting-card py-6 sm:m-0 sm:w-1/2 flex flex-col justify-center items-center bg-slate-600  rounded-3xl">
      <div className='mb-6 flex text-center '><h1><i className='animate-bounce  md:font-medium text-white p-2  rounded-2xl'>
        Welcome to Interactive quiz game, create your settings and click start to play!
        </i></h1></div>
      <div className='animate-bounce p-2 rounded-2xl bg-red-100'><h2><i>Game Settings</i></h2></div>
      <div className='w-4/5 mb-8'>
       <form>
      <FirstInput
       category={category}
      difficulty={difficulty}
      multiple={multiple}
      handleCategoryChange={handleCategoryChange}
      handleDiffucultyChange={handleDiffucultyChange}
       />          
        <div>
        <input
        className='w-full p-1.5 rounded-sm outline-none border-none'
        type="number"
        placeholder='number of questions'
        value={value}
        step="1"       
        onChange={questionNumber} 
        />
        </div>                
        </form>
      </div> 
      <div className='w-18 h-18'>
         <button 
         type="button"         
         className='flex w-16 hover:scale-110 active:scale-75 h-16 font-extrabold justify-center items-center cursor-pointer rounded-full bg-green-600 hover:bg-green-900'
         onClick={startGame}
         > Start 
         </button>
        </div>       
     <div>     
     </div>        
    </div>      
  );
};

export default MyForm;