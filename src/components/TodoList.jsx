import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [value, setValue] = useState('');
    const addTodo = () => {
        setValue('');
        // call dispatch
    }
    const todos = [
        {text: "Learn React", checked: true},
        {text: "Learn Redux", checked: false},
        {text: "Learn Express", checked: false}
    ]
    return (
        <div className='TodoList'>
            {todos.map(todo => 
                <TodoItem text={todo.text} checked={todo.checked} />
            )}
            <div className='TodoList__form'>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                <button onClick={addTodo}>Добавить</button>
            </div>
        </div>
    )
}

export default TodoList