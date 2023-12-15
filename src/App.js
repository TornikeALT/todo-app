import sun from './images/icon-sun.svg';
import checked from './images/icon-check.svg';
import moon from './images/icon-moon.svg';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { useTheme } from './context/themeContext';


function App() {
  const [isChecked, setIsCheked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([])
  const { theme, toggleTheme } = useTheme();


  const handleCheckTodo = () => {
    setIsCheked(!isChecked)
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      setTodoList([...todoList, inputValue])
      setInputValue('');
    }
  }

  return (
    <>
      <div className={`container mx-auto max-w-90-rem h-72 flex justify-center px-3 font-josefin-sans ${theme ? 'bg-bg-dark' : 'bg-bg-light'}`}>
        <div className='max-w-lg w-full flex flex-col pt-16'>
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-4xl font-bold tracking-spacing-1rem'>TODO</h1>
            {!theme && <img src={moon} alt="moon" onClick={toggleTheme} className='cursor-pointer' />}
            {theme && <img src={sun} alt="sun" onClick={toggleTheme} className='cursor-pointer' />}
          </div>
          <div className='relative'>
            <div className={`${theme ? 'bg-hsl---Very-Dark-Grayish-Blue' : 'bg-bg-Light-input-color border-hsl---VeryLightGrayishBlue'} w-7 h-7 rounded-2xl absolute bottom-5 left-4 z-10 cursor-pointer border border-hsl---dark-greyish-blue`} onClick={handleCheckTodo}></div>
            {isChecked &&
              <div className='absolute bottom-5 left-4 w-7 h-7 z-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-hsl-192-100-67 to-hsl-280-87-65 cursor-pointer' onClick={handleCheckTodo}>
                <img src={checked} alt="cheked" />
              </div>}
            <input type="text" className={`w-full mt-9 py-5 pl-16 ${theme ? ' bg-hsl---Very-Dark-Desaturated-Blue  text-white' : 'bg-hsl---Light-input-color text-hsl---VeryDarkGrayishBlue'} rounded-lg caret-blue-200`} placeholder='Create a new todo...' value={inputValue} onChange={handleInputValue} onKeyDown={handleAddTodo} />
          </div>
        </div>
      </div>
      <TodoList list={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;

