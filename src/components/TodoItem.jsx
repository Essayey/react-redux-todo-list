import React, { useRef, useState } from 'react'

const TodoItem = ({ text, checked, index, editTodo, deleteTodo, checkTodo, incrementCheckedAmount, decrementCheckedAmount }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(text);

    const editHandle = () => {
        setIsEditing(true);
    }
    const saveHandle = () => {
        editTodo(editValue, index);
        setIsEditing(false);
    }
    const checkHandle = () => {
        if (checked) decrementCheckedAmount();
        else incrementCheckedAmount();
        checkTodo(index)
    }
    const deleteHandle = () => {
        if (checked) decrementCheckedAmount();
        setIsEditing(false);
        deleteTodo(index);
    }


    return (
        <div className='TodoItem'>

            <div className='TodoItem__inner'>
                <input onChange={checkHandle} checked={checked} type="checkbox" />
                {isEditing
                    ? <textarea rows={5} cols="30" className='TodoItem__editInput' value={editValue} onChange={e => setEditValue(e.target.value)}></textarea>
                    : <pre className='TodoItem__text' style={{ textDecoration: checked ? 'line-through' : '' }}>{text}</pre>
                }

            </div>

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