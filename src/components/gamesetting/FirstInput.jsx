import Select from 'react-select';
const FirstInput = ({category, difficulty, multiple, handleCategoryChange, handleDiffucultyChange}) => {
  const commonStyle = 'mb-3 cursor-pointer';
  
   return (
    <>
    <div className={commonStyle}> 
    <Select       
     placeholder="Category"
     options={category}
     isMulti
     onChange={handleCategoryChange}
     />
     </div>
     <div className={commonStyle}>
     <Select       
       placeholder="Difficulty"
       options={difficulty}          
       onChange={handleDiffucultyChange}
       />
       </div>
       <div className={commonStyle}>
       <Select       
         placeholder="Question Type"
         options={multiple}           
       />        
       </div>    
    </>
  )
}

export default FirstInput;