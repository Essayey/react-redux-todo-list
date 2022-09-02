import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
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
        </div>
    )
}

export default TodoList