import sun from './images/icon-sun.svg';
import checked from './images/icon-check.svg'
import { useState } from 'react';


function App() {
  const [isChecked, setIsCheked] = useState(false)

  const handleCheckTodo = () => {
    setIsCheked(!isChecked)
  }

  return (
    <div className='container mx-auto max-w-90-rem bg-bg-dark h-72 flex justify-center px-3 font-josefin-sans'>
      <div className='max-w-lg w-full flex flex-col pt-16'>
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-4xl font-bold tracking-spacing-1rem'>TODO</h1>
          <img src={sun} alt="sun" />
        </div>
        <div className='relative'>
          <div className='bg-hsl---Very-Dark-Grayish-Blue w-7 h-7 rounded-2xl absolute bottom-5 left-4 z-10 cursor-pointer border border-hsl---dark-greyish-blue' onClick={handleCheckTodo}></div>
          {isChecked &&
            <div className='absolute bottom-5 left-4 w-7 h-7 z-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-hsl-192-100-67 to-hsl-280-87-65 cursor-pointer' onClick={handleCheckTodo}>
              <img src={checked} alt="cheked" />
            </div>}
          <input type="text" className='w-full mt-9 py-5 pl-16 bg-hsl---Very-Dark-Desaturated-Blue rounded-lg' placeholder='Create a new todo...' />
        </div>
      </div>
    </div>
  );
}

export default App;
