import React from 'react'
import styles from './Button.module.css';

const Button = ({ variant, onClick, children }) => {
    let color;
    switch (variant) {
        case 'primary':
            color = '#26e04b';
            break;
        case 'secondary':
            color = '#f57242';
            break;
        default:
            color = '#ffffff'
            break;
    }
    return (
        <button className={styles.Button} onClick={onClick} style={{ background: color }}>
            {children}
        </button>
    )
}

export default Button