import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from './features/cards/cardsSlice';
import Card from './components/Card';

function App() {
 const dispatch = useDispatch();
 const [newDescription, setNewDescription] = useState('');
 const [newTitle, setNewTitle] = useState('');
 const [newImage, setNewImage] = useState(null);

 const cards = useSelector((state) => state.cards);

 const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCard({ 
      title: newTitle, 
      description: newDescription, 
      imageUrl: newImage 
    }));
    setNewDescription('');
    setNewTitle('');
    setNewImage(null);
 };

 const handleFileChange = (event) => {
  setNewImage(URL.createObjectURL(event.target.files[0]));
};

 return (
    <div className="App" style={{
      backgroundColor: 'antiquewhite'
    }}>
      <form onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <label id='title'>Title</label>
        <input
          key='title'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <label id='description'>Description</label>
        <textarea
          key='description'
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} 
        style={{
          margin: 20
        }} />
        <button type="submit" style={{
          backgroundColor: 'cadetblue',
          color: 'white',
          fontSize: 18,
          margin: 20
        }}>Add Card</button>
      </form>
      {cards?.length && cards.map((card, index) => (
        <div style={{
          display: 'flex',
          margin: '40px',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          backgroundColor: 'beige'
        }}>
          <Card key={index} card={card} />
        </div>
      ))}
    </div>
 );
}

export default App;
