import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareasProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareasProps> = ({ name, label, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} {...rest} />
        </div>
    );
}

export default Textarea;