import React, { useState } from 'react';

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
      <button onClick={() => setOpen2(!isOpen2)}>
        Change
      </button>
      <button onClick={() => handleDelite(card.id)}>
        Rm
      </button>
    </div>

    <div style={{
        display: isOpen2 ? 'block' : 'none'
      }}>
      <form onSubmit={handleChange} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <label htmlFor='title'>Title</label>
        <input key='title' name='title' />
        <label htmlFor='description'>Description</label>
        <textarea key='description' name='description' />
        <input type="file" id="image" name="image" style={{margin: 20}} />
        <input type="hidden" name="cardId" value={card.id} />
        <button type="submit" 
        style={{
          backgroundColor: 'cadetblue',
          color: 'white',
          fontSize: 18,
          margin: 20
        }}>Change</button>
      </form>
      </div>
      </>
  )
}

export default Card;

   