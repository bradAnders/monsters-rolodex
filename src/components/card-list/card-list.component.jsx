import './card-list.styles.css';
import React from 'react';

export const CardList = props => {
  console.log(props);
  return (
    <div className='card-list'>
      {props.children}
    </div>
  )
};