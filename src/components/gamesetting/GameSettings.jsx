// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import setting from '../../assets/img/setting.jpg'
import MyForm from './MyForm';
// import { getQuestionsApi } from '../../redux/reducer';

const GameSettings = () => {
//   const {questions} = useSelector((state) => state.game);
//   const dispatch = useDispatch();

//   useEffect(() => () => {
//     dispatch(getQuestionsApi());
//   }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className='ralative w-full h-full'>
       <img 
       src={setting}
       className="w-full h-full object-cover"
       alt='setting' 
       />
      </div>
      <MyForm />             
    </div>
  )
}

export default GameSettings