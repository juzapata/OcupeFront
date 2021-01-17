import React from 'react';

const Button = (props) => {
  return <button 
            id={props.id} 
            type={props.type} 
            className={`btn ${props.classNameBtn}`} 
            onClick={props.onClick}
            disabled={props.disabled}>
            <i className={props.icon}></i>
            {props.text}           
        </button>
}

export default Button;