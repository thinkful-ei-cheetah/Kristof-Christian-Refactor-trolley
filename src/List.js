import React from 'react';
import Card from './Card'
import './List.css';

export default function List({header, cards, handleClick, id, handleDelete}) {
  
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{header}</h2>
      </header>
      <div className='List-cards'>
        {cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            handleDelete={handleDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={()=>handleClick(id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
