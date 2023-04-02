import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.pic}/>
      
      <h2>{props.title}</h2>
    </div>
  );
}

export default Card;
