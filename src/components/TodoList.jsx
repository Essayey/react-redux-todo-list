import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO } from '../store/index'

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const [formValue, setFormValue] = useState('');
    const [checkedAmount, setCheckedAmount] = useState(calculateCheckedAmount());

    function calculateCheckedAmount(){
        return todos.reduce((amount, todo) => {
            if(todo.checked) return amount + 1;
            return amount;
        }, 0)
    }

    const incrementCheckedAmount = () => {
        setCheckedAmount(prev => prev + 1);
    }

    const decrementCheckedAmount = () => {
        setCheckedAmount(prev => prev - 1);
    }

    const addTodo = () => {
        setFormValue('');
        dispatch({ type: ADD_TODO, payload: formValue })
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
            <h1 className='TodoList__header'>Todo list</h1>
            <div className='TodoList__progress'>Completed {checkedAmount} out of {todos.length}</div>
            {todos.map((todo, index) =>
                <TodoItem
                    text={todo.text}
                    checked={todo.checked}
                    index={index}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    checkTodo={checkTodo}
                    key={todo.text + index}
                    incrementCheckedAmount={incrementCheckedAmount}
                    decrementCheckedAmount={decrementCheckedAmount}/>
            )}
            <div className='TodoList__form'>
                <input value={formValue} onChange={e => setFormValue(e.target.value)} type="text" />
                <button onClick={addTodo}>Добавить</button>
            </div>
        </div>
    )
}

export default TodoList