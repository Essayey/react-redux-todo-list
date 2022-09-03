import React, { useEffect, useRef, useState } from 'react'

const TodoItem = ({ text, checked, index, editTodo, deleteTodo, checkTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const editValueRef = useRef();

    const editHandle = () => {
        setIsEditing(true);
    }
    const saveHandle = () => {
        editTodo(editValueRef.current.value, index);
        setIsEditing(false);
    }
    const checkHandle = () => {
        checkTodo(index)
    }
    const deleteHandle = () => {
        setIsEditing(false);
        deleteTodo(index);
    }

    return (
        <div className='TodoItem'>

            {isEditing
                ? <input ref={editValueRef} defaultValue={text}></input>
                : <div className='TodoItem__check'>
                    <input onChange={checkHandle} checked={checked} type="checkbox" />
                    <p style={{textDecoration: checked ? 'line-through' : '' }}>{text}</p>
                    </div>
            }

            <div className='TodoItem__buttons'>
                <button onClick={deleteHandle}>Удалить</button>
                {isEditing
                    ? <button onClick={saveHandle}>Сохранить</button>
                    : <button onClick={editHandle}>Редактировать</button>
                }
            </div>
        </div>
    )
}

export default TodoItem