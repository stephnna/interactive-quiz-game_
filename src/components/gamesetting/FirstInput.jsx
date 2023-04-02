import Select from 'react-select';

const FirstInput = ({category, difficulty, multiple, handleCategoryChange, handleDiffucultyChange}) => {
  
   return (
    <>
    <div className='mb-3'> 
    <Select       
     placeholder="Category"
     options={category}
     isMulti
     onChange={handleCategoryChange}
     />
     </div>
     <div className='mb-3'>
     <Select       
       placeholder="Difficulty"
       options={difficulty}          
       onChange={handleDiffucultyChange}
       />
       </div>
       <div className='mb-3'>
       <Select       
         placeholder="Question Type"
         options={multiple}           
       />        
       </div>    
    </>
  )
}

export default FirstInput;