import React from 'react';

const Input = (props) => {
    return (
        <div className="input-div">
            <label
                className="input-label"
                htmlFor={props.id}>
                {props.label}
            <input
                className="input-itself"
                type={props.type}
                id={props.id}
                value={props.value}
                aria-required="true"
                placeholder={props.placeholder} />
                <i className={props.icon}></i>
            </label>
        </div>    
    )
}

export default Input;
