import { useState } from "react";
import checked from '../images/icon-check.svg'


function TodoList({ list }) {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckTodo = (index) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            updatedCheckedItems[index] = !updatedCheckedItems[index];
            return updatedCheckedItems;
        });
    };


    return (
        <div className="container max-w-90-rem mx-auto bg-hsl---Very-Dark-Blue text-white flex flex-col  items-center font-josefin-sans min-h-30rem">
            {list.map((todo, i) => {
                return (
                    <ul className="flex flex-col gap-1 max-w-lg w-full relative" key={i} >
                        <div className='bg-hsl---Very-Dark-Grayish-Blue w-7 h-7 rounded-2xl absolute bottom-5 left-4 z-10 cursor-pointer border border-hsl---dark-greyish-blue' onClick={() => handleCheckTodo(i)}></div>
                        {checkedItems[i] &&
                            <div className='absolute bottom-5 left-4 w-7 h-7 z-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-hsl-192-100-67 to-hsl-280-87-65 cursor-pointer' onClick={() => handleCheckTodo(i)}>
                                <img src={checked} alt="cheked" />
                            </div>}
                        <li className="bg-hsl---Very-Dark-Desaturated-Blue py-5 border-b border-hsl---Very-Dark-Grayish-Blue pl-16" >
                            {todo}
                        </li>

                    </ul>
                )
            })}
            <div className="flex justify-between  max-w-lg w-full px-6 text-sm bg-hsl---Very-Dark-Desaturated-Blue py-5 text-hsl---dark-greyish-blue">
                <div className="flex gap-1">
                    <span>{list.length} </span>
                    <h3>Items Left</h3>
                </div>
                <div className="flex gap-2">
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
                <div>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    );
}

export default TodoList;