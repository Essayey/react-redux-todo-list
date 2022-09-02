import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO } from '../store/index'

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const [value, setValue] = useState('');
    const addTodo = () => {
        setValue('');
        dispatch({ type: ADD_TODO, payload: value })
    }

    const editTodo = (text, index) => {
        dispatch({ type: EDIT_TODO, payload: { text, index } })
    }

    const deleteTodo = (index) => {
        dispatch({type: DELETE_TODO, payload: index})
    }


    const checkTodo = (index) => {
        dispatch({type: CHECK_TODO, payload: index})
    }



    return (
        <div className='TodoList'>
            {todos.map((todo, index) =>
                <TodoItem
                    text={todo.text}
                    checked={todo.checked}
                    index={index}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    checkTodo={checkTodo}
                    key={todo + index} />
            )}
            <div className='TodoList__form'>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                <button onClick={addTodo}>Добавить</button>
            </div>
        </div>
    )
}

export default TodoList