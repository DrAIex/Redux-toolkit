import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, rmCard, changeCard } from './features/cards/cardsSlice';
import Card from './components/Card';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
 const dispatch = useDispatch();
//  const cards = useSelector((state) => state.cards);
 const [cards, setCards] = useLocalStorage('cards', []);

 const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = { 
      title: event.target.title.value, 
      description: event.target.description.value, 
      imageUrl: URL.createObjectURL(event.target.image.files[0])  
    }
    
    dispatch(addCard(newCard));
    setCards([...cards, newCard]);

    event.target.reset();
  };

  const handleDelite = (id) => {
      dispatch(rmCard({ id })
    );
  };

  const handleChange = ({id, title, description, imageUrl}) => {
      dispatch(changeCard({ 
        id,
        title:prompt.value, 
        description, 
        // imageUrl: URL.createObjectURL(event.target.image.files[0])
      })
    );
  };

 return (
    <div className="App" style={{backgroundColor: 'antiquewhite'}}>
      <form onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <label htmlFor='title'>Title</label>
        <input key='title' name='title' />
        <label htmlFor='description'>Description</label>
        <textarea key='description' name='description' />
        <input type="file" id="image" name="image" 
        style={{
          margin: 20
        }} />
        <button type="submit" 
        style={{
          backgroundColor: 'cadetblue',
          color: 'white',
          fontSize: 18,
          margin: 20
        }}>Add Card</button>
      </form>
      {!!cards?.length && cards.map((card, index) => (
        <div 
        style={{
          display: 'flex',
          margin: '40px',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          backgroundColor: 'beige'
        }}>
          <Card key={index} card={card} handleDelite={handleDelite} handleChange={handleChange} />
        </div>
      ))}
    </div>
 );
}

export default App;
