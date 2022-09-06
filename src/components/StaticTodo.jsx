import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';

const StaticTodo = () => {
    const todos = useSelector(state => state.todos);
    const uncheckedTodos = todos.filter((todo) => todo.checked === false)
    const checkedTodos = todos.filter((todo) => todo.checked === true)

    return (
        <div className='StaticTodo'>
            <h1>Todo list</h1>
            <div className='StaticTodoList'>
                <div>
                    In progress
                    <ul className='StaticTodoList__list'>
                        {uncheckedTodos.map((todo, index) =>
                            <li key={index}>
                                {todo.text}
                            </li>)}
                    </ul>
                </div>
                <div>
                    Done
                    <ul className='StaticTodoList__list'>
                        {checkedTodos.map((todo, index) =>
                            <li key={index}>
                                {todo.text}
                            </li>)}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default StaticTodo