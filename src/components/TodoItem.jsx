import React, { useState } from 'react'

const TodoItem = ({ text, checked }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);
    // MOCK CHECK STATE
    const [checkedState, setCheckedState] = useState(checked);

    const edit = () => {
        setIsEditing(true);
    }
    const save = () => {
        setIsEditing(false);
        // Call dispatch
    }
    const check = () => {
        setCheckedState(prev => !prev)
    }

    return (
        <div className='TodoItem'>

            {isEditing
                ? <input value={value} onChange={e => setValue(e.target.value)}></input>
                : <div className='TodoItem__check'>
                    <input onChange={check}defaultChecked={checkedState} type="checkbox" />
                    <p style={{textDecoration: checkedState ? 'line-through' : '' }}>{text}</p>
                    </div>
            }

            <div className='TodoItem__buttons'>
                <button>Удалить</button>
                {isEditing
                    ? <button onClick={save}>Сохранить</button>
                    : <button onClick={edit}>Редактировать</button>
                }
            </div>
        </div>
    )
}

export default TodoItem