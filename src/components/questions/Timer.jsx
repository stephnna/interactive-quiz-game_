import { useState, useEffect } from "react";

const Timer = ({questionIndex, navigateSetQustion}) => {

  const [timer, setTimer] = useState(5);
   
    useEffect(() => {
    if (timer === 0) return navigateSetQustion();
    const interval = setInterval(()=>{
      setTimer((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    setTimer(25);

  }, [questionIndex]);
  
  return timer;
}

export default Timer;