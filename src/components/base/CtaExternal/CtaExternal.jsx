import React from 'react';
import { Link } from 'react-router-dom';

const CtaExternal = (props) => {
  return (
    <a href={props.href}
      id={props.id} 
      className={`${props.classNameCtaExternal}`} 
      onClick={props.onClick}>
      <i className={props.icon}></i>
      <p>{props.text}</p>
      <p>{props.text2}</p>
    </a>
    )
  }
  
  export default CtaExternal;