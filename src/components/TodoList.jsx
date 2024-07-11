import React, { useState } from 'react';

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [data, setData] = useState("");

    const pushTodo = (event) => {
        event.preventDefault();
        setTodo([...todo, data]);
        setData("");
    };

    const actualizar = (event) => {
        setData(event.target.value);
    };

    const borrarTodo = () => {
        setTodo([]);
    };

    const borrarTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    return (
        <div>
            <form onSubmit={pushTodo}>
                <input type='text' placeholder='write a task here' onChange={actualizar} value={data} />
                <button type='submit' className='buton'>apuntar tarea</button>
            </form>
            <ul>
                {todo.map((task, index) => (
                    <div key={index} className='task'>
                        <li>{task}</li>
                        <button onClick={() => borrarTask(index)} className='buton'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8zm5-8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V8zm-4.22-4.78c.39-.39 1.02-.39 1.41 0L12 3.59l1.22-1.22c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 5l1.22 1.22c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 6.41l-1.22 1.22c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 5 9.37 3.78c-.39-.39-.39-1.02 0-1.41z"/>
                    </svg>
                        </button>
                    </div>
                ))}
            </ul>
            <button onClick={borrarTodo}>Reset</button>
        </div>
    );
}

export default TodoList;