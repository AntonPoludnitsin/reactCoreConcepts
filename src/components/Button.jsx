import React from 'react';

const Button = ({ title, style, disabled, action }) => {
    return (
        <button
            className={style}
            disabled={disabled}
            onClick={action}
        >
            {title}
        </button>
    )
}
export default Button;