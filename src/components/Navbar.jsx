import React from 'react'
import Button from './UI/Button/Button'
import { Navigate, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Button><Link to="/todo">Edit</Link></Button>
            <Button><Link to="/">Home</Link></Button>
        </nav>
    )
}

export default Navbar