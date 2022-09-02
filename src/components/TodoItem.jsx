import React, { useState } from 'react'

const TodoItem = ({ text, checked, index, editTodo, deleteTodo, checkTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);

    const edit = () => {
        setIsEditing(true);
    }
    const save = () => {
        editTodo(value, index);
        setIsEditing(false);
    }
    const check = () => {
        checkTodo(index)
    }
    const remove = () => {
        setIsEditing(false);
        deleteTodo(index);
    }
    console.log(text, index)

    return (
        <div className='TodoItem'>

            {isEditing
                ? <input value={value} onChange={e => setValue(e.target.value)}></input>
                : <div className='TodoItem__check'>
                    <input onChange={check} checked={checked} type="checkbox" />
                    <p style={{textDecoration: checked ? 'line-through' : '' }}>{text}</p>
                    </div>
            }

            <div className='TodoItem__buttons'>
                <button onClick={remove}>Удалить</button>
                {isEditing
                    ? <button onClick={save}>Сохранить</button>
                    : <button onClick={edit}>Редактировать</button>
                }
            </div>
        </div>
    )
}

export default TodoItem