import { useState, useEffect } from "react";
import wrong from "../../assets/sound-wrong.mp3";
import useSound from "use-sound";

const Timer = ({questionIndex, navigateSetQustion}) => {

  const [timer, setTimer] = useState(25);
  const [wrongOption] = useSound(wrong);
   
    useEffect(() => {
    if (timer === 0) {     
      wrongOption();    
      return navigateSetQustion();      
    }
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