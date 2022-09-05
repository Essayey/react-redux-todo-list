import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from './components/UI/Button/Button';
import Navbar from './components/Navbar';
import StaticTodo from './components/StaticTodo';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/todo' element={<TodoList />} />
                <Route path='/' element={<StaticTodo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
