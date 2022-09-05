import React from 'react'
import styles from './Button.module.css';

const Button = ({ variant, onClick, children }) => {
    let background;
    let color = '#fff';
    switch (variant) {
        case 'primary':
            background = '#26e04b';
            break;
        case 'secondary':
            background = '#f57242';
            break;
        default:
            background = '#eee'
            color = '#000'
            break;
    }
    return (
        <button className={styles.Button} onClick={onClick} style={{ background: background, color: color }}>
            {children}
        </button>
    )
}

export default Button