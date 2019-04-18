import React from 'react';
import './Card.css';

export default function Card({title, content, handleDelete}) {
  return (
    <div className='Card'>
      <button onClick={handleDelete}
        type='button'
      >
        delete
      </button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
