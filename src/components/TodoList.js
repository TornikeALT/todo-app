import { useState } from "react";
import checked from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';
import { useTheme } from '../context/themeContext'

function TodoList({ list, setTodoList }) {
    const [checkedItems, setCheckedItems] = useState([]);
    const [filter, setFilter] = useState('all');
    const { theme, toggleTheme } = useTheme();

    const handleCheckTodo = (index) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            updatedCheckedItems[index] = !updatedCheckedItems[index];
            return updatedCheckedItems;
        });
    };

    const handleTodoDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            updatedCheckedItems.splice(index, 1);
            return updatedCheckedItems;
        });
        setTodoList(updatedList);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }


    const filteredList = list.filter((todo, index) => {
        if (filter === 'all') {
            return true
        } else if (filter === 'active') {
            return !checkedItems[index]
        } else if (filter === 'completed') {
            return checkedItems[index]
        }
        return true;
    })


    const handleDeleteCompleted = () => {

        //filteres todo list to return not checked items by index
        const updatedList = list.filter((_, index) => !checkedItems[index]);
        //*

        //to update checked items for not to move on another element after del
        const updatedCheckedItems = checkedItems.filter((isChecked) => !isChecked);
        //*
        setCheckedItems(updatedCheckedItems);
        setTodoList(updatedList);
    }

    return (
        <div className={`container max-w-90-rem mx-auto ${theme ? 'bg-hsl---Very-Dark-Blue' : 'bg-hsl---VeryLightGrayishBlue'} text-white flex flex-col items-center font-josefin-sans min-h-75vh relative`}>
            <div className="max-w-lg w-full absolute -top-16">
                {filteredList.map((todo, index) => {
                    const isDone = checkedItems[list.indexOf(todo)];
                    return (
                        <div className="flex flex-col gap-1 max-w-lg w-full relative rounded-t-lg" key={index}>
                            <div
                                className={`${theme ? 'bg-hsl---Very-Dark-Grayish-Blue' : 'bg-hsl---Light-input-color border-hsl---VeryLightGrayishBlue'} w-7 h-7 rounded-2xl absolute bottom-5 left-4 z-10 cursor-pointer border border-hsl---dark-greyish-blue ${isDone ? 'bg-gradient-to-r from-hsl-192-100-67 to-hsl-280-87-65' : ''}hover:border-blue-400 ease-linear duration-300`}
                                onClick={() => handleCheckTodo(index)}
                            ></div>
                            {isDone && (
                                <div
                                    className='absolute bottom-5 left-4 w-7 h-7 z-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-hsl-192-100-67 to-hsl-280-87-65 cursor-pointer'
                                    onClick={() => handleCheckTodo(index)}
                                >
                                    <img src={checked} alt="checked" />
                                </div>
                            )}
                            <li className={`${theme ? 'bg-hsl---Very-Dark-Desaturated-Blue' : 'bg-hsl---Light-input-color text-hsl---VeryDarkGrayishBlue'} py-5 border-b border-hsl---Very-Dark-Grayish-Blue pl-16 flex items-center justify-between pr-4  ${index === 0 ? 'rounded-t-lg' : ''}`}>
                                <span className={isDone ? 'line-through decoration-1 text-hsl---dark-greyish-blue' : ''}>{todo}</span>
                                <img src={cross} alt="delete icon" className="cursor-pointer" onClick={() => handleTodoDelete(index)} />
                            </li>
                        </div>
                    );
                })}
                <div className={`flex justify-between  max-w-lg w-full px-6 text-sm ${theme ? 'bg-hsl---Very-Dark-Desaturated-Blue' : 'bg-hsl---Light-input-color'} py-5 text-hsl---dark-greyish-blue rounded-b-lg`}>
                    <div className="flex gap-1">
                        <span>{list.length} </span>
                        <h3>Items Left</h3>
                    </div>
                    <div className="flex gap-2">
                        <span className={`${filter === 'all' ? 'text-blue-500' : ''} ${theme ? 'hover:text-white' : 'hover:text-black'} font-bold cursor-pointer`} onClick={() => handleFilterChange('all')}>All</span>
                        <span className={`${filter === 'active' ? 'text-blue-500' : ''} ${theme ? 'hover:text-white' : 'hover:text-black'} font-bold cursor-pointer`} onClick={() => handleFilterChange('active')}>Active</span>
                        <span className={`${filter === 'completed' ? 'text-blue-500' : ''} ${theme ? 'hover:text-white' : 'hover:text-black'} font-bold cursor-pointer`} onClick={() => handleFilterChange('completed')}>Completed</span>
                    </div>
                    <div>
                        <span className={`${theme ? 'hover:text-white' : 'hover:text-black'} cursor-pointer`} onClick={handleDeleteCompleted}>Clear Completed</span>
                    </div>
                </div>
                <h4 className="text-center mt-16 text-sm text-hsl---dark-greyish-blue">Drag and drop to reorder list</h4>
            </div>
        </div >
    );
}

export default TodoList;
