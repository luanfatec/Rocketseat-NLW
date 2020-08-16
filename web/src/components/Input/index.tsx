import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputsProps> = ({ name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} {...rest} />
        </div>
    );
}

export default Input;