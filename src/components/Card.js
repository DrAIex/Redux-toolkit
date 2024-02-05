import React, { useState } from 'react';
import Form from './Form';

function Card({ card, handleDelite, handleChange }) {
 const [isOpen2, setOpen2] = useState(false)
 console.log('isOpen2', isOpen2)

  return (

    <>
      <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'antiquewhite'
      }}>
        <img 
          style={{ maxWidth: 200, padding: 10 }} 
          src={card.imageUrl} 
          alt={card.description} 
        />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button onClick={() => setOpen2(!isOpen2)}>Change</button>
        <button onClick={() => handleDelite(card.id)}>Rm</button>
      </div>
      <Form isOpen={isOpen2} handler={handleChange} value="Change" id={card.id} />
    </>
  )
}

export default Card;

   