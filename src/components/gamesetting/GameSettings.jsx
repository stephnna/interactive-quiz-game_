import setting from '../../assets/setting.jpg'
import MyForm from './MyForm';

const GameSettings = () => {

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