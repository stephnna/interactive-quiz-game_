import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestionsApi } from '../../redux/reducer'; 
import FirstInput from './FirstInput';
import { category, difficulty, multiple } from './InputOptions';

const MyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState({});
  const min = 1;
  const max = 50;

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
  
  const startGame = (event) => { 
      event.preventDefault();      
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
    const queryDifficulty = `&difficulty=${difficultStr}`;

    dispatch(getQuestionsApi(queryCategory, queryDifficulty, value))                  
   const outcome = questions.length > 0 ? navigate("/question", {replace: true}) : "Create your settings"; 
    console.log(outcome);
  };
       

  return (  
    <div className="absolute w-5/6 setting-card py-6 sm:m-0 sm:w-1/2 flex flex-col justify-center items-center bg-slate-600  rounded-3xl">
      <div><h1><i className='animate-bounce'>Game Settings</i></h1></div>
      <div className='w-4/5'>
       <form 
       onSubmit={startGame}   
       >
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
         <div>
         <input type="submit"
         className='cursor-pointer'
         /> 
        </div>        
        </form>
      </div>       
     <div>     
     </div>        
    </div>      
  );
};

export default MyForm;