import { createStore } from 'redux';

const initialState = {
    todos: [
        { text: "Learn React", checked: true },
        { text: "Learn Redux", checked: false },
        { text: "Learn Express", checked: false }
    ]
};

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';

const todoReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, { text: action.payload, checked: false }] }
        case EDIT_TODO:
            return {todos: state.todos.map((todo, index) => {
                if (index === action.payload.index) return {text: action.payload.text, checked: todo.checked};
                return todo;
            })}
        case DELETE_TODO:
            console.log({todos: state.todos.filter((_, index) => index !== action.payload)})
            return {todos: state.todos.filter((_, index) => index !== action.payload)}
            
        case CHECK_TODO:
            return {todos: state.todos.map((todo, index) => {
                if (index === action.payload) return {text: todo.text, checked: !todo.checked};
                return todo;
            })}
        default:
            return state
    }
}

export const store = createStore(todoReducer);