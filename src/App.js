import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, rmCard, changeCard } from './features/cards/cardsSlice';
import Card from './components/Card';
import { useLocalStorage } from './hooks/useLocalStorage';

// class Car {
//   constructor(event) {
//     id = Date.now()
//     title = this.event.target.title.value
//     description = this.event.target.description.value
//     imageUrl = URL.createObjectURL(this.event.target.title.value)
//     title = this.event.target.title.value
//     timestamp = new Date().toString()
//   }
// }

function App() {
 const dispatch = useDispatch();
 const [isOpen, setOpen] = useState(false)
 const [cards, setCards] = useLocalStorage('cards', []);

 const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = { 
      id: Date.now(),
      title: event.target.title.value, 
      description: event.target.description.value, 
      imageUrl: URL.createObjectURL(event.target.image.files[0]),
      timestamp: new Date().toString(),
    }
    
    dispatch(addCard(newCard));
    setCards([...cards, newCard]);

    event.target.reset();
  };

  const handleDelite = (id) => {
      dispatch(rmCard({ id }));
      setCards(cards.filter((card) => card.id !== id));
  };

  const handleChange = (event) => {
    console.log('event', event)
    console.log('event.target.children[5]', event.target.children[5].value)
    
    event.preventDefault();
    console.log('event.target.title.value', event.target.title.value)

    // event.preventDefault();
    // console.log('updatedCard', updatedCard)
    const changedCard = { 
      id: event.target.children[5].value,
      title: event.target.title.value, 
      description: event.target.description.value, 
      imageUrl: URL.createObjectURL(event.target.image.files[0]),
      timestamp: new Date().toString(),
    }
    dispatch(changeCard(changedCard));
    setCards(cards.map((card) => card.id.toString() ===  changedCard.id ? { ...card, ...changedCard } : card));
    event.target.reset();

  };

 return (
    <div className="App" style={{backgroundColor: 'antiquewhite'}}>
      <button onClick={() => setOpen(!isOpen)}>Open Modal</button>
      <div style={{
        display: isOpen ? 'block' : 'none'
      }}>

      
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
        <input type="file" id="image" name="image" style={{margin: 20}} />
        <button type="submit" 
        style={{
          backgroundColor: 'cadetblue',
          color: 'white',
          fontSize: 18,
          margin: 20
        }}>Add Card</button>
      </form>
      </div>
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
          <Card key={index} card={card} handleDelite={handleDelite} handleChange={handleChange} setOpen={setOpen} />
        </div>
      ))}
    </div>
 );
}

export default App;
