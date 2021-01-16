import React from 'react';
import './Input.scss';

const Input = (props) => {
    return (
        <div className="input-div">
            <label 
                className="input-label" 
                htmlFor={props.id}>
                    {props.label} 
            </label>
            <input 
                className="input-itself"
                type={props.type} 
                id={props.id} 
                value={props.value}
                aria-required="true"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;
