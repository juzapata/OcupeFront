import React from 'react';
import { Link } from 'react-router-dom';


const Cta = (props) => {
  return (
    <Link to={props.href}
      id={props.id} 
      className={`${props.classNameCta}`} 
      onClick={props.onClick}>
      <i className={props.icon}></i>
      <p>{props.text}</p>
      <p>{props.text2}</p>
    </Link>
    )
  }
  
  export default Cta;