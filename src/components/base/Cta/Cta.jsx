import React from 'react';

const Cta = (props) => {
  return <a 
            id={props.id} 
            href={props.href} 
            className={`btn ${props.classNameCta}`} 
            onClick={props.onClick}>
            <i className={props.icon}></i>
            {props.text}           
        </a>
}

export default Cta;