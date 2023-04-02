// import { useEffect, useState } from "react";

const QuestionAnswer = (
  // {
//   data, 
//   setTimeOut,
//   questionNumber,
//   setQuestionNumber}
) => {

//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null)

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);
      

  const answerStyles = "p-1.5 hover:scale-110 flex justify-center bg-blue-400 hover:bg-blue-900 active:bg-blue-900 text-white font-medium border-2 cursor-pointer items-center min-h-[40px] m-3 rounded-2xl";  return (
    <>
    <div className="w-5/6 border-4 font-medium text-black bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-3/6 p-2 rounded-2xl bg-slate-400">
          Question
        </div>
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 sm:w-1/2">
        <div className="animate-wrong p-1.5 flex justify-center text-white font-medium border-2 cursor-pointer items-center min-h-[40px] m-3 rounded-2xl">A1</div>
        <div className={answerStyles}>A2</div>
        <div className={answerStyles}>A3</div>
        <div className={answerStyles}>A4</div>
        </div>
    </>
  )
}

export default QuestionAnswer