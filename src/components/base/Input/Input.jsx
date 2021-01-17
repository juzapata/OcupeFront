import React from 'react';

const Input = (props) => {
  return (
    <label
      className="input__label"
      htmlFor={props.id}>
      <span>{props.label}</span>
      <input
          className="input__itself"
          type={props.type}
          id={props.id}
          value={props.value}
          aria-required="true"
          placeholder={props.placeholder} 
          onChange={props.onChange}
      />
      <i className={props.icon}></i>
    </label> 
  )
}

export default Input;
