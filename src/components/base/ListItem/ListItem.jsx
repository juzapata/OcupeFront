import React from 'react';

const ListItem = ({mentor, onClick}) => {
  return (
    <li className="mentor__list-item" onClick={onClick}>
      <div className="mentor__list-align">
        <i className="mentor__icon fas fa-user-plus"></i>
        <div className="mentor__list-data">
          <p>{mentor.name}</p>
          <span>{mentor.profession}</span>
        </div>
      </div>
      <i className="mentor__icon fas fa-eye"></i>
    </li>
  )
}

export default ListItem;
